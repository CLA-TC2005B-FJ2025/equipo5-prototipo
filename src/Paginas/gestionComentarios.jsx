import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import { useState } from "react";
import "../Styles/GestionComentario.css";

//son datos inventados nomas para simular los que vendrian
const materias = [
  {
    nombre: "Construcción de software",
    total: 32,
    filtrados: 4,
    eliminados: 1,
  },
  {
    nombre: "Matemáticas Discretas",
    total: 42,
    filtrados: 2,
    eliminados: 1,
  },
  {
    nombre: "Análisis y diseño de algoritmos",
    total: 24,
    filtrados: 9,
    eliminados: 0,
  },
  {
    nombre: "Optativa de liderazgo",
    total: 32,
    filtrados: 0,
    eliminados: 0,
  },
  {
    nombre: "Estructuras de datos",
    total: 54,
    filtrados: 2,
    eliminados: 1,
  },
  {
    nombre: "Experimentación física",
    total: 21,
    filtrados: 3,
    eliminados: 3,
  },
];

export default function GestionComentarios() {
  const [docente, setDocente] = useState("Jose Perez");

  return (
    <div className="MainPageLayout">
      <div className="Sidebar">
        <Sidebar botonActivoAct={"Gestión de comentarios"} />
      </div>
      <div className="Navbar">
        <NavBar Usuario={localStorage.getItem("userName")} />
      </div>
      <div className="MainContent gestion-comentarios-content">
        <div className="gestion-box">
          <div className="header-bar">
            <h3>ECOA’s de {docente}</h3>
            <select
              value={docente}
              onChange={(e) => setDocente(e.target.value)}
              className="docente-select"
            >
              <option value="Jose Perez">Jose Perez</option>
              <option value="Otro Docente">Otro Docente</option>
            </select>
          </div>
          <div className="cards-grid">
            {materias.map((materia, index) => (
              <div key={index} className="card">
                <h4>{materia.nombre}</h4>
                <p>{materia.total} Comentarios totales</p>
                {materia.filtrados > 0 && (
                  <p>{materia.filtrados} Comentarios filtrados</p>
                )}
                {materia.eliminados > 0 && (
                  <p>{materia.eliminados} Comentario eliminado</p>
                )}
                <a href="#" className="ver-link">
                  Ver...
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
