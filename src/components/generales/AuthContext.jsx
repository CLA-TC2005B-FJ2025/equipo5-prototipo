import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  //hacer el fetch a la base de datos
  const login = async (email, password, rol) =>{
    console.log("here")
    try {
      console.log(process.env.REACT_APP_API_URL)
      console.log("asdasdasd")
        const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, rol })
        });

        if(response.ok){
            const contraCorrecta = await response.json();
            if(!contraCorrecta){
                throw new Error("Aqui algo fallo");
            }
            return true;q
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
