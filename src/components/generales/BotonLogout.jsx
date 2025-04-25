import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

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

  return <button onClick={() => setLogOut(true)}>Salir</button>;
}
