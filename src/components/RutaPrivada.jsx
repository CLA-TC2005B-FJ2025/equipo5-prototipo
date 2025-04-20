import { Navigate } from "react-router-dom";

const RutaPrivada = ({ children }) => {
  const isLogged = JSON.parse(localStorage.getItem("isLoggedIn"));
  return isLogged ? children : <Navigate to="/" />;
};

export default RutaPrivada;
