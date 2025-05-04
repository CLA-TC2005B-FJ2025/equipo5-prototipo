import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  //hacer el fetch a la base de datos
  const login = async (email, password, rol) => {
    console.log("here");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, rol }),
        },
      );

      if (response.ok) {
        const contraCorrecta = await response.json();
        if (!contraCorrecta) {
          throw new Error("Aqui algo fallo");
        }
        return true;
      }
    } catch (err) {
      console.error("Error en login:", err);
      return { success: false, error: err.message };
    }
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
