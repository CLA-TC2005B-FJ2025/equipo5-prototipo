import Sidebar from "./SidebarAdmin";
import SubirUnArchivo from "./SubirArchivos/SubirUnArchivo";
import NavBar from "../../generales/NavBar";
import "../../Styles/Dashboard.css";

export default function Dashboard(){
    return (
        <div className="MainPageLayout">
          <div className="Sidebar">
            <Sidebar botonActivoAct="Dashboard"></Sidebar>
          </div>
          <div className="Navbar">
            <NavBar Usuario={localStorage.getItem("userName")}></NavBar>
          </div>
          <div className="MainContent">
            <div className="div1">ECOAS</div>
            <div className="div2">PRINCIPALES ENCUESTAS ACTIVAS</div>
            <div className="div3">
              <SubirUnArchivo></SubirUnArchivo>
            </div>
            <div className="div4">3 BOTONES</div>
            <div className="div5">INFO DESTACADA</div>
            <div className="div6">ACCIONES RAPIDAS</div>
          </div>
        </div>
      );
}