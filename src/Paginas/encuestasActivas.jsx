import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function EncuestasActivas() {
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
        <Sidebar botonActivoAct={"Encuestas Activas"}></Sidebar>
      </div>
    </div>
  );
}
