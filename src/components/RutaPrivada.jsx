import { Navigate } from "react-router-dom";

const RutaPrivada = ({ children }) => {
  // quite la verificacion por el momento por que tenemos que cambiarlo para que funciones con coookies
  // pero pues por el momento como voy a cambiar el endpoint pues tampoco tiene mucho sentido

  const isLogged = JSON.parse(localStorage.getItem("isLoggedIn"));
  return isLogged ? children : <Navigate to="/" />;
  // return <Navigate to="/" />;//borrar
};

export default RutaPrivada;
