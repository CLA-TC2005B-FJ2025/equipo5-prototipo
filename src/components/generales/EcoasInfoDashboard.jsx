import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function InfoEcoas() {
  const [ecoasCount, setEcoasCount] = useState(0);
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
        // json.ecoas es el array de encuestas con conteo
        setEcoasCount(json.ecoas.length);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="frame">
        <div className="semiCirculo"></div>
        <div className="contenidoEncima">
          <p>Cargando...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="frame">
        <div className="semiCirculo"></div>
        <div className="contenidoEncima">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="frame">
      <div className="semiCirculo" />
      <div className="contenidoEncima">
        <h1>{ecoasCount}</h1>
        <div>
          <p className="mainText">ECOA'S</p>
          <p className="subUno">activas</p>
        </div>
        <div className="ecoaListBtn">
          <button onClick={() => navigate("/subirArchivo")}>
            Lista de ECOA's
          </button>
        </div>
      </div>
    </div>
  );
}
