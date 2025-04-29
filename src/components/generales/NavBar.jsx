import notificacion from "../../../public/images/navbar/notificacion.svg";
import settings from "../../../public/images/navbar/settings.svg";
import user from "../../../public/images/navbar/user.svg";
import BotonConImg from "./BotonConImg";
import LogoutButton from "./BotonLogout";
import "../../Styles/Navbar.css";

export default function NavBar({ Usuario }) {
  return (
    <div>
      <h2>{Usuario}</h2>
      <BotonConImg imagen={user} classN={"navBarBtn"}></BotonConImg>
      <BotonConImg imagen={settings} classN={"navBarBtn"}></BotonConImg>
      <LogoutButton></LogoutButton>
      
    </div>
  );
}
