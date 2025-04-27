
import SidebarButton from "../../generales/SidebarButton";
import "../../../Styles/Sidebar.css";

import { useNavigate } from "react-router";
import BotonLogout from "../../generales/BotonLogout";

export default function Sidebar({ botonActivoAct }) {
  const navigate = useNavigate();

  function navegarPestana(e) {
    // console.log("navegando a", e )
    navigate(`/${e}`);
  }

  return (
    <div>
      <div>
      <img src="/images/general/highpointLogo.png" width={200} alt="logo highpoint" />
      </div>
      <hr />
      <div className="contenedorBotones">
         <SidebarButton
          imgSrc="/images/sidebar/dashboard.svg"
          content="Dashboard"
          classN="dashboardButton"
          active={botonActivoAct === "Dashboard"}
          onClick={() => navegarPestana("dashboard")}
        />
        <SidebarButton
          imgSrc="/images/sidebar/upload.svg"
          content="Subir Archivo"
          classN="dashboardButton"
          active={botonActivoAct === "Subir Archivo"}
          onClick={() => navegarPestana("subirArchivo")}
        />
        <SidebarButton
          imgSrc="/images/sidebar/person.svg"
          content="Nuevo Perfil"
          classN="dashboardButton"
          active={botonActivoAct === "Nuevo Perfil"}
          onClick={() => navegarPestana("nuevoPerfil")}
        />
        <SidebarButton
          imgSrc="/images/sidebar/tabla.svg"
          content="Encuestas Activas"
          classN="dashboardButton"
          active={botonActivoAct === "Encuestas Activas"}
          onClick={() => navegarPestana("encuestasActivas")}
        />
        <SidebarButton
          imgSrc="/images/sidebar/sms.svg"
          content="Gestión de comentarios"
          classN="dashboardButton"
          active={botonActivoAct === "Gestión de comentarios"}
          onClick={() => navegarPestana("gestionComentarios")}
        />
        <BotonLogout></BotonLogout>
      </div>
    </div>
  );
}
