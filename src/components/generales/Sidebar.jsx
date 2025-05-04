import highpointLogo from "../../../public/images/general/highpointLogo.png";
import SidebarButton from "./SidebarButton";

import dashboardIcon from "../../../public/images/sidebar/dashboard.svg";
import subirArchivoIcon from "../../../public/images/sidebar/upload.svg";
import nuevoPerfilIcon from "../../../public/images/sidebar/person.svg";
import encuestaIcon from "../../../public/images/sidebar/tabla.svg";
import comentarioIcon from "../../../public/images/sidebar/sms.svg";
import "../../Styles/Sidebar.css";

import { useNavigate } from "react-router";
import BotonLogout from "./BotonLogout";
// este modulo actualmente no se utiliza me parece
export default function Sidebar({ botonActivoAct }) {
  const navigate = useNavigate();

  function navergarPestana(e) {
    console.log("navegando a", e);
    navigate(`/${e}`);
  }

  return (
    <div>
      <div>
        <img src={highpointLogo} width={200} alt="logo highpoint" />
      </div>
      <hr />
      <div className="contenedorBotones">
        <SidebarButton
          imgSrc={dashboardIcon}
          content={"Dashboard"}
          classN={"dashboardButton"}
          active={botonActivoAct === "Dashboard"}
          onClick={() => navergarPestana("dashboard")}
        />

        <SidebarButton
          imgSrc={nuevoPerfilIcon}
          content={"Nuevo Perfil"}
          classN={"dashboardButton"}
          active={botonActivoAct === "Nuevo Perfil"}
          onClick={() => navergarPestana("nuevoPerfil")}
        />
        <SidebarButton
          imgSrc={encuestaIcon}
          content={"Encuestas Activas"}
          classN={"dashboardButton"}
          active={botonActivoAct === "Encuestas Activas"}
          onClick={() => navergarPestana("encuestasActivas")}
        />
        <SidebarButton
          imgSrc={comentarioIcon}
          content={"Gestión de comentarios"}
          classN={"dashboardButton"}
          active={botonActivoAct === "Gestión de comentarios"}
          onClick={() => navergarPestana("gestionComentarios")}
        />
      </div>
    </div>
  );
}
