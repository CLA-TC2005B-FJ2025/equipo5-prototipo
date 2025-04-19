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
        <div>
          <h1>DASHBOARD</h1>
          <SubirUnArchivo></SubirUnArchivo>
          <LogoutButton></LogoutButton>
        </div>
      </div>
    </div>
  );
}
