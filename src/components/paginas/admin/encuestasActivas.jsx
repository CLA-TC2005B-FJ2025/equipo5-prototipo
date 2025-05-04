import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./SidebarAdmin";
import NavBar from "../../generales/NavBar";
import "../../../Styles/EncuestasActivas.css";

export default function EncuestasActivas() {
  const userName = localStorage.getItem("userName") || "Usuario";
  const navigate = useNavigate();

  const [ecoas, setEcoas] = useState([]);
  const [filteredEcoas, setFilteredEcoas] = useState([]);
  const [totalRespuestas, setTotalRespuestas] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // filtros
  const [selectedMateria, setSelectedMateria] = useState("");
  const [selectedProfesor, setSelectedProfesor] = useState("");
  const [selectedGrupo, setSelectedGrupo] = useState("");

  useEffect(() => {
    // fetch resumen con conteo
    fetch(
      `${import.meta.env.VITE_API_URL}subirArchivo/resumenConConteo`,
    )
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((json) => {
        setEcoas(json.ecoas);
        setFilteredEcoas(json.ecoas);
        setTotalRespuestas(json.total);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // opciones para selects
  const materias = useMemo(
    () => [...new Set(ecoas.map((e) => e.materia))],
    [ecoas],
  );
  const profesores = useMemo(
    () => [...new Set(ecoas.map((e) => e.profesor))],
    [ecoas],
  );
  const grupos = useMemo(
    () => [...new Set(ecoas.map((e) => e.grupo))],
    [ecoas],
  );

  const handleFilter = () => {
    let list = ecoas;
    if (selectedMateria) {
      list = list.filter((e) => e.materia === selectedMateria);
    }
    if (selectedProfesor) {
      list = list.filter((e) => e.profesor === selectedProfesor);
    }
    if (selectedGrupo) {
      list = list.filter((e) => e.grupo === selectedGrupo);
    }
    setFilteredEcoas(list);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="MainPageLayout">
      <div className="Sidebar">
        <Sidebar botonActivoAct="Encuestas Activas" />
      </div>

      <div className="Navbar">
        <NavBar Usuario={userName} />
      </div>

      <div className="MainContent">
        <h1 className="encuestas-header">Encuestas Activas</h1>
        <div className="encuestas-activas-container">
          <div className="encuestas-main-content">
            <div className="encuestas-list">
              <div className="tituloEcoasAC">
                <div>
                  <h1>{filteredEcoas.length} ECOA's encontradas</h1>
                  <p>
                    Filtros aplicados:{" "}
                    {[
                      selectedMateria ? 1 : 0,
                      selectedProfesor ? 1 : 0,
                      selectedGrupo ? 1 : 0,
                    ].reduce((a, b) => a + b, 0)}
                  </p>
                </div>

                <div>
                  <h2>{totalRespuestas}</h2>
                  <p>respuestas totales</p>
                </div>
              </div>

              <div className="encuestas-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>MATERIA</th>
                      <th>PROFESOR</th>
                      <th>GRUPO</th>
                      <th>RESPUESTAS</th>
                      <th>INFO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEcoas.map((e) => (
                      <tr key={e.crn}>
                        <td>{e.materia}</td>
                        <td>{e.profesor}</td>
                        <td>{e.grupo}</td>
                        <td>{e.respuestasCount}</td>
                        <td>
                          <a
                            className="pointer"
                            onClick={() =>
                              navigate("/subirArchivo", {
                                state: { crn: e.crn },
                              })
                            }
                          >
                            Ver datos
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="encuestas-filtros">
            <h2>Filtros de búsqueda</h2>
            <div>
              <div className="filtro-item">
                <label>Materia</label>
                <select
                  value={selectedMateria}
                  onChange={(e) => setSelectedMateria(e.target.value)}
                >
                  <option value="">Todas</option>
                  {materias.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filtro-item">
                <label>Profesor</label>
                <select
                  value={selectedProfesor}
                  onChange={(e) => setSelectedProfesor(e.target.value)}
                >
                  <option value="">Todos</option>
                  {profesores.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filtro-item">
                <label>Grupo</label>
                <select
                  value={selectedGrupo}
                  onChange={(e) => setSelectedGrupo(e.target.value)}
                >
                  <option value="">Todos</option>
                  {grupos.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button className="filtro-btn" onClick={handleFilter}>
              Filtrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
