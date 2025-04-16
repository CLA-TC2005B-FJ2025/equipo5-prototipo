import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function NuevoPerfil() {
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
        <Sidebar botonActivoAct={"Nuevo Perfil"}></Sidebar>
      </div>
      <div className="MainContent">
        <h1>NUEVO PERFIL</h1>
      </div>
    </div>
  );
}
