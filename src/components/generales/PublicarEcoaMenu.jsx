import { useState, useEffect, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
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
    fetch(
      `https://didactic-journey-pjj577p6pg4j39rv6-3000.app.github.dev/subirArchivo/resumen`,
    )
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((json) => {
        setMaestros(json.maestros);
        setEcoas(json.ecoas);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Carga respuestas cuando cambia la ECOA seleccionada
  useEffect(() => {
    if (!selectedEcoa) return;
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}subirArchivo/datos/${selectedEcoa}`)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((json) => setRespuestas(json.respuestas))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [selectedEcoa]);

  // Datos agregados para el gráfico: promedio de respuesta por pregunta
  const chartData = useMemo(() => {
    const agg = {};
    respuestas.forEach(({ pregunta, respuesta }) => {
      const val = Number(respuesta);
      if (!agg[pregunta]) agg[pregunta] = { sum: 0, count: 0 };
      agg[pregunta].sum += val;
      agg[pregunta].count += 1;
    });
    return Object.entries(agg).map(([pregunta, { sum, count }]) => ({
      pregunta,
      promedio: +(sum / count).toFixed(2),
    }));
  }, [respuestas]);

  if (loading)
    return (
      <div className={`menu-contextual-container ${extraClass}`}>
        Cargando...
      </div>
    );
  if (error)
    return (
      <div className={`menu-contextual-container ${extraClass}`}>
        Error: {error}
      </div>
    );

  // Filtrar ECOAs por maestro seleccionado
  const ecoasFiltradas = selectedMaestro
    ? ecoas.filter((e) => e.profesor === selectedMaestro)
    : ecoas;

  return (
    <div className={`menu-contextual-container ${extraClass}`}>
      <h1>Encuestas recientes</h1>

      <div className="filters">
        <label>Maestro:</label>
        <select
          value={selectedMaestro}
          onChange={(e) => setSelectedMaestro(e.target.value)}
        >
          <option value="">Todos</option>
          {maestros.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <label>ECOA (CRN):</label>
        <select
          value={selectedEcoa}
          onChange={(e) => setSelectedEcoa(e.target.value)}
        >
          <option value="">Seleccione</option>
          {ecoasFiltradas.map((e) => (
            <option key={e.crn} value={e.crn}>
              {`ECOA ${e.crn} - ${e.grupo} (${e.materia})`}
            </option>
          ))}
        </select>
      </div>

      {selectedEcoa && (
        <div className="chart-container">
          <h2>Promedio de respuestas por pregunta</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="pregunta"
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis />
              <Tooltip />
              <Bar dataKey="promedio" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
