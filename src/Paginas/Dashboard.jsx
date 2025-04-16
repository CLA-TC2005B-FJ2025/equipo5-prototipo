import { useEffect } from "react";
import LogoutButton from "../components/BotonLogout";
import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";

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
    <div className="Sidebar">
      {/* <h1>DASHBOARD</h1> */}
      <Sidebar botonActivoAct="Dashboard" ></Sidebar>
      {/* <LogoutButton></LogoutButton> */}
    </div>
  );
}
