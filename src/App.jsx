import { useState } from "react";
import SignIn from "./Paginas/SignIn";
import BuscaDepartamento from "./Paginas/BuscaDepartamento";
import { useNavigate } from "react-router";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navegate = useNavigate();

  return (
    <main>
      {isLoggedIn ? (
        navegate("/dashboard")
      ) : (
        <SignIn onLogin={() => setIsLoggedIn(true)} />
      )}
    </main>
  );
}
