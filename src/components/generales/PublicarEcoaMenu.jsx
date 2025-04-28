import "../../Styles/SubirArchivoMenu.css";

export default function MenuContextual() {
  return (
    <div className="menu-contextual-container">
      <div className="info-general">
        <h1>Información General</h1>
        <div className="info-grid">
          <div className="info-item">
            <label>Nombre del archivo</label>
            <div className="info-value">ECOA#134324.csv</div>
          </div>

          <div className="info-item">
            <label>Grupo</label>
            <div className="info-value">Grupo 501B</div>
          </div>

          <div className="info-item">
            <label>Materia</label>
            <div className="info-value">Implementación computacional II</div>
          </div>

          <div className="info-item">
            <label>No. de Preguntas</label>
            <div className="info-value">34</div>
          </div>

          <div className="info-item">
            <label>Profesor</label>
            <div className="info-value">Eliel Alfredo Mejía Villa</div>
          </div>

          <div className="info-item">
            <label>No. de Respuestas</label>
            <div className="info-value">42</div>
          </div>

          <div className="info-item">
            <label>Supervisor</label>
            <div className="info-value">Yahir Tapia</div>
          </div>

          <div className="info-item">
            <label>Fecha</label>
            <div className="info-value">9 de marzo del 2025</div>
          </div>
        </div>
      </div>

      <div className="opciones-publicacion">
        <h1>Opciones de publicación</h1>
        <div className="opciones-grid">
          <div className="visibilidad">
            <label className="info-item">Visibilidad</label>
            <div className="checkBntPE">
              <input type="checkbox" checked />
              <p>Directores Académicos</p>
            </div>
            <div className="checkBntPE">
              <input type="checkbox" checked />
              <p>Coordinadores Académicos</p>
            </div>
            <div className="checkBntPE">
              <input type="checkbox" checked />
              <p>Profesores y Tutores</p>
            </div>
          </div>
        </div>
        <div className="publicar-btn">
          <button>Publicar ECOA</button>
        </div>
      </div>
    </div>
  );
}
