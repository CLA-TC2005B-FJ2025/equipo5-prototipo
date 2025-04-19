import LogoutButton from "../components/BotonLogout";
import Sidebar from "../components/Sidebar";
import SubirUnArchivo from "../components/dashboard/SubirUnArchivo";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "../Styles/Dashboard.css";

export default function Dashboard() {
  const isLogged = JSON.parse(localStorage.getItem("isLoggedIn"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, [isLogged, navigate]);

  if (!isLogged) {
    return null;
  }

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
