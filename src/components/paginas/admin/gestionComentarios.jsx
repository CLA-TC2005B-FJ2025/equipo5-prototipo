import Sidebar from "./SidebarAdmin";
import NavBar from "../../generales/NavBar";
import { useState, useEffect } from "react";
import "../../../Styles/GestionComentario.css";

export default function GestionComentarios() {
  const [docente, setDocente] = useState("");
  const [profesores, setProfesores] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [loadingProf, setLoadingProf] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Carga lista de profesores al montar
  useEffect(() => {
    async function fetchProfesores() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}directorio/profesores`,
        );
        if (!res.ok) throw new Error(res.statusText);
        const json = await res.json();
        setProfesores(json.profesores);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoadingProf(false);
      }
    }
    fetchProfesores();
  }, []);

  // Carga materias cuando cambia docente
  useEffect(() => {
    async function fetchComentarios() {
      if (!docente) return;
      setLoading(true);
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}comentarios/gestion?matriculaMaestro=${encodeURIComponent(docente)}`,
        );
        if (!res.ok) throw new Error(res.statusText);
        const json = await res.json();
        setMaterias(json.materias);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchComentarios();
  }, [docente]);

  if (loadingProf) return <p>Cargando docentes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="MainPageLayout">
      <div className="Sidebar">
        <Sidebar botonActivoAct={"Gestión de comentarios"} />
      </div>
      <div className="Navbar">
        <NavBar Usuario={localStorage.getItem("userName")} />
      </div>

      <div>
        <h1 className="headerDos">Gestión de comentarios</h1>
      </div>
      <div className="gestion-comentarios-content">
        <div className="gestion-box">
          <div className="header-bar">
            <h3>
              ECOA’s de{" "}
              {docente
                ? profesores.find((p) => p.matriculaMaestro === docente)
                    ?.nombreCompleto
                : "..."}
            </h3>
            <div>
              <p>Docente</p>
              <select
                id="docente-select"
                value={docente}
                onChange={(e) => setDocente(e.target.value)}
                className="docente-select"
              >
                <option value="">Selecciona docente</option>
                {profesores.map((p) => (
                  <option key={p.matriculaMaestro} value={p.matriculaMaestro}>
                    {p.nombreCompleto}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {loading && <p>Cargando comentarios...</p>}

          {!loading && materias.length > 0 && (
            <div className="cards-grid">
              {materias.map((m, i) => (
                <div key={i} className="EcoaCard">
                  <h4>
                    <a href="#">{m.nombre}</a>
                  </h4>
                  <p>{m.total} Comentarios totales</p>
                  {m.filtrados > 0 && (
                    <p>{m.filtrados} Comentarios filtrados</p>
                  )}
                  {m.eliminados > 0 && (
                    <p>{m.eliminados} Comentario eliminado</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {!loading && docente && materias.length === 0 && (
            <p>No hay comentarios para este docente.</p>
          )}
        </div>
      </div>
    </div>
  );
}
