import Sidebar from "./SidebarAdmin";

export default function EncuestasActivas() {
  return (
    <div className="MainPageLayout">
      <div className="Sidebar">
        <Sidebar botonActivoAct={"Encuestas Activas"}></Sidebar>
      </div>
      <div className="MainContent">
        <h1>ENCUESTAS ACTIVAS</h1>
      </div>
    </div>
  );
}
