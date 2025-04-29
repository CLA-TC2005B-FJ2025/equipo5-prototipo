import { useState, useEffect } from "react";
import "../../Styles/SubirArchivoMenu.css";

export default function MenuContextual({ singleColumn = false }) {
  const extraClass = singleColumn ? "single-column" : "";

  const [maestros, setMaestros] = useState([]);
  const [ecoas, setEcoas] = useState([]);
  const [selectedMaestro, setSelectedMaestro] = useState("");
  const [selectedEcoa, setSelectedEcoa] = useState("");
  const [respuestas, setRespuestas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carga maestros y ecoas al montar
  useEffect(() => {
    fetch(`https://didactic-journey-pjj577p6pg4j39rv6-3000.app.github.dev/subirArchivo/resumen`)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(json => {
        setMaestros(json.maestros);
        setEcoas(json.ecoas);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Carga respuestas cuando cambia la ECOA seleccionada
  useEffect(() => {
    if (!selectedEcoa) return;
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/subirArchivo/datos/${selectedEcoa}`)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(json => setRespuestas(json.respuestas))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [selectedEcoa]);

  if (loading) return <div className={`menu-contextual-container ${extraClass}`}>Cargando...</div>;
  if (error)   return <div className={`menu-contextual-container ${extraClass}`}>Error: {error}</div>;

  // Filtrar ECOAs por maestro seleccionado
  const ecoasFiltradas = selectedMaestro
    ? ecoas.filter(e => e.profesor === selectedMaestro)
    : ecoas;

  return (
    <div className={`menu-contextual-container ${extraClass}`}>
      <h1>Encuestas recientes</h1>

      <div className="filters">
        <label>Maestro:</label>
        <select value={selectedMaestro} onChange={e => setSelectedMaestro(e.target.value)}>
          <option value="">Todos</option>
          {maestros.map(m => <option key={m} value={m}>{m}</option>)}
        </select>

        <label>ECOA (CRN):</label>
        <select value={selectedEcoa} onChange={e => setSelectedEcoa(e.target.value)}>
          <option value="">Seleccione</option>
          {ecoasFiltradas.map(e => (
            <option key={e.crn} value={e.crn}>
              {`ECOA ${e.crn} - ${e.grupo} (${e.materia})`}
            </option>
          ))}
        </select>
      </div>

      {selectedEcoa && (
        <div className="respuestas-list">
          {respuestas.map((r, i) => (
            <div key={i} className="respuesta-item">
              <p><strong>Alumno:</strong> {r.alumno}</p>
              <p><strong>Pregunta:</strong> {r.pregunta}</p>
              <p><strong>Respuesta:</strong> {r.respuesta}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
