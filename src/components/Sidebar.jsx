import highpointLogo from "../../public/images/highpointLogo.png"
import DashboardButton from "./DashboardButton"

import dashboardIcon from "../../public/images/sidebar/dashboard.svg"
import subirArchivoIcon from "../../public/images/sidebar/upload.svg"
import nuevoPerfilIcon from "../../public/images/sidebar/person.svg"
import encuestaIcon from "../../public/images/sidebar/tabla.svg"
import comentarioIcon from "../../public/images/sidebar/sms.svg"
import "../Styles/Sidebar.css"


export default function Sidebar(){
    return (
        <div>
            <div><img src={highpointLogo} width={200} alt="logo highpoint" /></div>
            <hr />
            <div className="contenedorBotones">
                <DashboardButton
                    imgSrc={dashboardIcon}
                    content={"Dashboard"}
                    classN={"dashboardButton"}
                />
                <DashboardButton
                    imgSrc={subirArchivoIcon}
                    content={"Subir Archivo"}
                    classN={"dashboardButton"}
                />
                <DashboardButton
                    imgSrc={nuevoPerfilIcon}
                    content={"Nuevo Perfil"}
                    classN={"dashboardButton"}
                />
                <DashboardButton
                    imgSrc={encuestaIcon}
                    content={"Encuestas Activas"}
                    classN={"dashboardButton"}
                />
                <DashboardButton
                    imgSrc={comentarioIcon}
                    content={"Gestión de comentarios"}
                    classN={"dashboardButton"}
                />
            </div>

        </div>
    )
}