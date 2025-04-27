import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import "../Styles/EncuestasActivas.css";

export default function EncuestasActivas() {
  const userName = localStorage.getItem("userName") || "Usuario";

  return (
    <div className="MainPageLayout">
      <div className="Sidebar">
        <Sidebar botonActivoAct="Encuestas Activas" />
      </div>

      <div className="Navbar">
        <NavBar Usuario={userName} />
      </div>

      <div className="MainContent">
        <div className="encuestas-activas-container">
          <div className="encuestas-main-content">
            <h1 className="encuestas-header">Encuestas Activas</h1>
            <div className="encuestas-info-bar">
              <span>2 ECOA's encontradas (0 filtros aplicados)</span>
              <span>65 respuestas totales</span>
            </div>
            <div className="encuestas-list">
              <table>
                <thead>
                  <tr>
                    <th>Materia</th>
                    <th>Profesor</th>
                    <th>Grupo</th>
                    <th>Respuestas</th>
                    <th>Info</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Construcción de software y toma de decisiones</td>
                    <td>Eliel Mejia</td>
                    <td>400</td>
                    <td>32</td>
                    <td><a href="#">Ver datos</a></td>
                  </tr>
                  <tr>
                    <td>Implementacion de metodos computacionales</td>
                    <td>Eliel Mejia</td>
                    <td>401</td>
                    <td>33</td>
                    <td><a href="#">Ver datos</a></td>
                  </tr>
                  {/* Más filas */}
                </tbody>
              </table>
            </div>
          </div>

          <div className="encuestas-filtros">
            <h2>Filtros de búsqueda</h2>

            <div>
              <label>Profesor</label>
              <input type="text"/>
            </div>

            <div>
              <label>Grupo</label>
              <input type="text"/>
            </div>

            <div>
              <label>Departamento</label>
              <select>
                <option>Selecciona un departamento</option>
                <option>Académico</option>
                <option>Deportivo</option>
                <option>Cultural</option>
                <option>Laboratorista</option>
                <option>Tutores</option>
              </select>
            </div>

            <div>
              <label>Fecha de Inicio</label>
              <input type="date" />
            </div>

            <div>
              <label>Fecha Final</label>
              <input type="date" />
            </div>

            <button>Filtrar</button>
          </div>

        </div>
      </div>
    </div>
  );
}
