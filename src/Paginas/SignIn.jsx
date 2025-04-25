import Input from "../components/Input";
import Card from "../components/Card";
import { useState, useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import "../Styles/SignIn.css";

export default function SignIn({ onLogin }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("3");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = document.getElementById("loginError");
    if (email && password && rol) {
      try {
        const contraCorrecta = await login(email,password,rol);
        if (contraCorrecta == true) { 
          onLogin();
          localStorage.setItem("userName", email); 
          localStorage.setItem("isLoggedIn", JSON.stringify(true));
          localStorage.setItem("rol",rol);
        } else {
          //castigar al usuario ajajaj
          errorMsg.textContent = " Credenciales Incorrectas "
        }
      } catch (err) {
        console.error('Error en login (SingIn.jsx):', err);
      }
    } 
  };

  return (
    <section className="signin">
      <Card className="card-signin">
        <h2 className="signin-title">HighPoint International School</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="a000134@tec.mx"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p id="loginError" className="errorEnLogin"></p>
          <hr />
          <div className="div-botones-login">
            <div className="login-google btnOne">
              <label className="subtituloUno" htmlFor="roles">
                Iniciar sesión como
              </label>
              <select
                name="roles"
                id="roles"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
              >
                <option value={3}>Profesor</option>
                <option value={2}>Coordinador</option>
                <option value={1}>Admin</option>
              </select>
            </div>
            <div className="login-normal btnOne">
              <button type="submit">Log in</button>
            </div>
          </div>
        </form>
      </Card>
    </section>
  );
}
