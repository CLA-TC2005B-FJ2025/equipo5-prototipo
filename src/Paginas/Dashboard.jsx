import { useEffect } from "react";
import LogoutButton from "../components/BotonLogout";
import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
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
      <div className="MainContent">
        <h1>DASHBOARD</h1>
        <LogoutButton></LogoutButton>
      </div>
    </div>
  );
}
