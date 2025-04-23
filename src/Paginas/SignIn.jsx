import Input from "../components/Input";
import Card from "../components/Card";
import { useState, useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import "../Styles/SignIn.css";

export default function SignIn({ onLogin }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [name, setPassword] = useState("");
  const [rol, setRol] = useState("Profesor");

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Tratando de iniciar sesion con las credenciales", name, email, rol);
    try {
      login(name,email,rol);
    } catch (err) {
      console.error(err);
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
            value={name}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p id="loginError" className="errorEnLogin"></p>
          <hr />
          <div className="div-botones-login">
            <div className="login-google btnOne">
              <label className="subtituloUno" htmlFor="roles">Iniciar sesión como</label>
              <select name="roles" id="roles" value={rol} onChange={(e) => setRol(e.target.value)} >
                <option value="Profesor">Profesor</option>
                <option value="Coordinador">Coordinador</option>
                <option value="Admin">Admin</option>
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
