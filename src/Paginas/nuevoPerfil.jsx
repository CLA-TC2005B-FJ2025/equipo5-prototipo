import Sidebar from "../components/Sidebar";

export default function NuevoPerfil() {
  return (
    <div className="MainPageLayout">
      <div className="Sidebar">
        <Sidebar botonActivoAct={"Nuevo Perfil"}></Sidebar>
      </div>
      <div className="MainContent">
        <h1>NUEVO PERFIL</h1>
      </div>
    </div>
  );
}
