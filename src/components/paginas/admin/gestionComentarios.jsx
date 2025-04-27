import Sidebar from "./SidebarAdmin";

export default function GestionComentarios() {
  return (
    <div className="MainPageLayout">
      <div className="Sidebar">
        <Sidebar botonActivoAct={"Gestión de comentarios"}></Sidebar>
      </div>
      <div className="MainContent">
        <h1>GESTIÓN DE COMENTARIOS</h1>
      </div>
    </div>
  );
}
