import { useState, useEffect } from "react";
import SignIn from "./Paginas/SignIn";
import { useNavigate } from "react-router";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      //aqui es donde podemos mandar informacion sobre el usario ya una vez esta loggeado
      console.log("usuario loggeado");
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  return (
    <main>
      <SignIn onLogin={() => setIsLoggedIn(true)} />
    </main>
  );
}
