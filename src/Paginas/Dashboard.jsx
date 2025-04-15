import { useEffect } from "react";
import LogoutButton from "../components/BotonLogout";
import { useNavigate } from "react-router";

export default function Dashboard(){
  const isLogged = JSON.parse(localStorage.getItem("isLoggedIn"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged){
      navigate("/");
    } 
  }, [isLogged, navigate]);

  if(!isLogged){
    return null;
  }

  return (
    <div>
      <h1>DASHBOARD</h1>
      <LogoutButton></LogoutButton>
    </div>
  )
}
