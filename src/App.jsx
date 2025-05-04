import { useState, useEffect } from "react";
import SignIn from "./components/paginas/auth/SignIn.jsx";
import { useNavigate } from "react-router";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      //aqui es donde podemos mandar informacion sobre el usario ya una vez esta loggeado
      localStorage.setItem("archivos", 0);
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  return (
    <main>
      <SignIn onLogin={() => setIsLoggedIn(true)} />
    </main>
  );
}
