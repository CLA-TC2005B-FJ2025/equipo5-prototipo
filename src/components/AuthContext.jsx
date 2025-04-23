import { createContext, useState } from "react"
// import bcrypt from "bcrypt"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) =>{
    const [usuario, setUsuario] = useState(null);
    
    //hacer el fetch a la base de datos
    const login = async (email, password) =>{
        console.log("tratando de iniciar sesion como ")
    };

    // const googleLogin = async (email, name, idToken) => {
    //     console.log(email, name, idToken);
    //     return true;
    // }
      
    const logout = () => {
        setUsuario(null);
        localStorage.clear();
    };
        
    return (
    <AuthContext.Provider value={{ usuario, login, /*googleLogin, */ logout }}>
        {children}
    </AuthContext.Provider>
    );
}

