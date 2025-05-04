import Sidebar from "./SidebarAdmin";
import NavBar from "../../generales/NavBar";
import SubirUnArchivo from "../../generales/SubirUnArchivoModulo.jsx"; //este es el modulo
import InfoECOA from "../../generales/EcoasInfoDashboard.jsx";
import EncActivas from "../../generales/EncActivasDashboard.jsx";
import "../../../Styles/Dashboard.css";
import TresBotones from "../../generales/TresBotones.jsx";
import InfoDestacada from "../../generales/InfoDestacada.jsx";

export default function Dashboard() {
  return (
    <div className="MainPageLayout">
      <div className="Sidebar">
        <Sidebar botonActivoAct="Dashboard"></Sidebar>
      </div>
      <div className="Navbar">
        <NavBar
          Usuario={localStorage.getItem("userName").split("@")[0]}
        ></NavBar>
      </div>

      <div className="DashboardMainContent">
        <div className="div1">
          <InfoECOA></InfoECOA>
        </div>
        <div className="div2">
          <EncActivas></EncActivas>
        </div>
        <div className="div3">
          <SubirUnArchivo></SubirUnArchivo>
        </div>
        <div className="div4">
          <TresBotones></TresBotones>
        </div>
        <div className="div6">
          <InfoDestacada></InfoDestacada>
        </div>
      </div>
    </div>
  );
}
