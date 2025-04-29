import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import notificacion from "../../../public/images/navbar/notificacion.svg";

export default function LogoutButton() {
  const [logOut, setLogOut] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (logOut) {
      navigate("/");
      localStorage.setItem("isLoggedIn", JSON.stringify(false));
      localStorage.setItem("userName", "");
    }
  });

  return <button classN={"navBarBtn logoutBtn"} onClick={() => setLogOut(true)}><img src={notificacion}></img></button>;
}
