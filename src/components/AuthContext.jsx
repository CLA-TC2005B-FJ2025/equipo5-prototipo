import { createContext, useState } from "react"
// import bcrypt from "bcrypt"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) =>{
    const [usuario, setUsuario] = useState(null);
    
    //hacer el fetch a la base de datos
    const login = async (email, password) =>{
        try {
            const response = await fetch('https://didactic-journey-pjj577p6pg4j39rv6-3000.app.github.dev/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include',  
            });

            if(response.ok){
                const contraCorrecta = await response.json();
                if(!contraCorrecta){
                    throw new Error("Credenciales inválidas");
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
}