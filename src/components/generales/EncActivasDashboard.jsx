export default function EncuestasActivas() {
  return (
    <div className="frameEncuestasAct">
      <div className="headerEncAct">
        <h1>Principales encuestas activas</h1>
        <div>
          <h1>1578</h1>
          <h3>respuestas totales</h3>
        </div>
      </div>
      <div className="cuerpoEncAct">
        <div>
          <h4>Materia</h4>
          <h4>Profesor</h4>
          <h4>Grupo</h4>
          <h4>Respuestas</h4>
          <h4>INFO</h4>
        </div>
        <div>
          <h4>Administración de Proyectos</h4>
          <h4>Laura González</h4>
          <h4>450</h4>
          <h4>28</h4>
          <h4 className="pointer"><a href="#">Ver datos</a></h4>
        </div>

        <div>
          <h4>Inteligencia Artificial</h4>
          <h4>Carlos Díaz</h4>
          <h4>520</h4>
          <h4>35</h4>
          <h4 className="pointer"><a href="#">Ver datos</a></h4>
        </div>

        <div>
          <h4>Bases de Datos Avanzadas</h4>
          <h4>Mariana Torres</h4>
          <h4>480</h4>
          <h4>30</h4>
          <h4 className="pointer"><a href="#">Ver datos</a></h4>
        </div>

        <div>
          <h4>Programación Web</h4>
          <h4>José Martínez</h4>
          <h4>410</h4>
          <h4>25</h4>
          <h4 className="pointer"><a href="#">Ver datos</a></h4>
        </div>

        <div>
          <h4>Redes de Computadoras</h4>
          <h4>Andrea López</h4>
          <h4>470</h4>
          <h4>29</h4>
          <h4 className="pointer"><a href="#">Ver datos</a></h4>
        </div>

        <div>
          <h4>Seguridad Informática</h4>
          <h4>Raúl Fernández</h4>
          <h4>490</h4>
          <h4>31</h4>
          <h4 className="pointer"><a href="#">Ver datos</a></h4>
        </div>
      </div>
    </div>
  );
}
