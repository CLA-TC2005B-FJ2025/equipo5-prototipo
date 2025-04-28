import Sidebar from "../../generales/Sidebar";
import MenuContextual from "../../generales/PublicarEcoaMenu";

export default function subirArchivo() {
  return (
    <div className="MainPageLayout">
      <div className="Sidebar">
        <Sidebar botonActivoAct={"Subir Archivo"}></Sidebar>
      </div>
      <div className="MainContent">
        <MenuContextual></MenuContextual>
      </div>
    </div>
  );
}
