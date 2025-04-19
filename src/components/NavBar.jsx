
import notificacion from "../../public/images/navbar/notificacion.svg" 
import settings from "../../public/images/navbar/settings.svg" 
import user from "../../public/images/navbar/user.svg" 
import BotonConImg from "./BotonConImg"
import "../Styles/Navbar.css"

export default function NavBar({ Usuario }){
    return(
        <div>
            <BotonConImg  imagen={user} classN={"navBarBtn"} ></BotonConImg>
            <h2>{Usuario + "."}</h2>
            <BotonConImg imagen={settings} classN={"navBarBtn"}></BotonConImg>
            <BotonConImg imagen={notificacion} classN={"navBarBtn"}></BotonConImg>
        </div>
    )
}