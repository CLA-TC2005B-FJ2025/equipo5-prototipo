import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  //hacer el fetch a la base de datos
  const login = async (email, password, rol) => {
    console.log("dentro de la funcion de login!!");
    return true;
  };

  const logout = () => {
    setUsuario(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
