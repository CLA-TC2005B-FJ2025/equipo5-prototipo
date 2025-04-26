import Sidebar from "../SidebarAdmin";

export default function subirArchivo() {
  return (
    <div className="MainPageLayout">
      <div className="Sidebar">
        <Sidebar botonActivoAct={"Subir Archivo"}></Sidebar>
      </div>
      <div className="MainContent">
        <h1>SUBIR ARCHIVO</h1>
      </div>
    </div>
  );
}
