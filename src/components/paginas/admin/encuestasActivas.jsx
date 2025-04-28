import Sidebar from "./SidebarAdmin";
import NavBar from "../../generales/NavBar";
import "../../../Styles/EncuestasActivas.css";

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
        <h1 className="encuestas-header">Encuestas Activas</h1>
        <div className="encuestas-activas-container">


          <div className="encuestas-main-content">
            <div className="encuestas-list">

            <div className="tituloEcoasAC">
              <div>
                <h1>27 ECOA's encontradas</h1>
                <p>(2) Filtros aplicados</p>
              </div>

              <div>
                <h2>278</h2>
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
                    <th>RESPUESTA</th>
                    <th>INFO</th>
                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <td>Construcción de software y toma de decisiones</td>
                    <td>Eliel Mejia</td>
                    <td>400</td>
                    <td>32</td>
                    <td>
                      <a href="#">Ver datos</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Construcción de software y toma de decisiones</td>
                    <td>Eliel Mejía</td>
                    <td>400</td>
                    <td>32</td>
                    <td><a href="#">Ver datos</a></td>
                  </tr>
                  <tr>
                    <td>Introducción a bases de datos</td>
                    <td>Ana López</td>
                    <td>385</td>
                    <td>30</td>
                    <td><a href="#">Ver datos</a></td>
                  </tr>
                  <tr>
                    <td>Programación avanzada</td>
                    <td>Carlos Jiménez</td>
                    <td>410</td>
                    <td>28</td>
                    <td><a href="#">Ver datos</a></td>
                  </tr>
                  <tr>
                    <td>Redes de computadoras</td>
                    <td>Laura García</td>
                    <td>395</td>
                    <td>31</td>
                    <td><a href="#">Ver datos</a></td>
                  </tr>
                  <tr>
                    <td>Inteligencia artificial</td>
                    <td>David Rodríguez</td>
                    <td>420</td>
                    <td>29</td>
                    <td><a href="#">Ver datos</a></td>
                  </tr>
                  <tr>
                    <td>Seguridad informática</td>
                    <td>Mariana Pérez</td>
                    <td>375</td>
                    <td>27</td>
                    <td><a href="#">Ver datos</a></td>
                  </tr>
                  <tr>
                    <td>Ingeniería de software</td>
                    <td>José Martínez</td>
                    <td>405</td>
                    <td>33</td>
                    <td><a href="#">Ver datos</a></td>
                  </tr>
                  <tr>
                    <td>Algoritmos y estructuras de datos</td>
                    <td>Andrea Fernández</td>
                    <td>390</td>
                    <td>30</td>
                    <td><a href="#">Ver datos</a></td>
                  </tr>
                  <tr>
                    <td>Administración de proyectos TI</td>
                    <td>Marco Gómez</td>
                    <td>415</td>
                    <td>34</td>
                    <td><a href="#">Ver datos</a></td>
                  </tr>
                  <tr>
                    <td>Desarrollo web</td>
                    <td>Patricia Herrera</td>
                    <td>380</td>
                    <td>26</td>
                    <td><a href="#">Ver datos</a></td>
                  </tr>



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
                <select>
                  <option value="">Todas</option>
                  <option>Construcción de software y toma de decisiones</option>
                  <option>Introducción a bases de datos</option>
                  <option>Programación avanzada</option>
                  <option>Redes de computadoras</option>
                  <option>Inteligencia artificial</option>
                  <option>Seguridad informática</option>
                  <option>Ingeniería de software</option>
                  <option>Algoritmos y estructuras de datos</option>
                  <option>Administración de proyectos TI</option>
                  <option>Desarrollo web</option>
                </select>
              </div>

              <div className="filtro-item">
                <label>Profesor</label>
                <select>
                  <option value="">Todos</option>
                  <option>Eliel Mejía</option>
                  <option>Ana López</option>
                  <option>Carlos Jiménez</option>
                  <option>Laura García</option>
                  <option>David Rodríguez</option>
                  <option>Mariana Pérez</option>
                  <option>José Martínez</option>
                  <option>Andrea Fernández</option>
                  <option>Marco Gómez</option>
                  <option>Patricia Herrera</option>
                </select>
              </div>

              <div className="filtro-item">
                <label>Grupo</label>
                <select>
                  <option value="">Todos</option>
                  <option>400</option>
                  <option>385</option>
                  <option>410</option>
                  <option>395</option>
                  <option>420</option>
                  <option>375</option>
                  <option>405</option>
                  <option>390</option>
                  <option>415</option>
                  <option>380</option>
                </select>
              </div>
            </div>
              <button className="filtro-btn">Filtrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
