import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/EncuestasActivas.css";

export default function EncuestasActivas() {
  const [encuestas, setEncuestas] = useState([]);
  const [totalRespuestas, setTotalRespuestas] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://didactic-journey-pjj577p6pg4j39rv6-3000.app.github.dev/subirArchivo/resumenConConteo`,
    )
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((json) => {
        // Nos quedamos con las 6 principales
        setEncuestas(json.ecoas.slice(0, 6));
        setTotalRespuestas(json.total);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <div className="frameEncuestasAct">Cargando encuestas...</div>;
  if (error) return <div className="frameEncuestasAct">Error: {error}</div>;

  return (
    <div className="frameEncuestasAct">
      <div className="headerEncAct">
        <h1>Principales encuestas activas</h1>
        <div>
          <h1>{totalRespuestas}</h1>
          <h3>respuestas totales</h3>
        </div>
      </div>

      <div className="cuerpoEncAct">
        {/* Encabezados */}
        <div className="filaEnc encabezados">
          <h4>Materia</h4>
          <h4>Profesor</h4>
          <h4>Grupo</h4>
          <h4>Respuestas</h4>
          <h4>INFO</h4>
        </div>

        {/* Filas dinámicas */}
        {encuestas.map((e) => (
          <div key={e.crn} className="filaEnc">
            <h4>{e.materia}</h4>
            <h4>{e.profesor}</h4>
            <h4>{e.grupo}</h4>
            <h4>{e.respuestasCount}</h4>
            <h4 className="pointer">
              <a
                onClick={() =>
                  navigate("/subirArchivo", { state: { crn: e.crn } })
                }
              >
                Ver datos
              </a>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
