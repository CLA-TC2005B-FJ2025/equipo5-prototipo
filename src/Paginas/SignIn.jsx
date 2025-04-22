import GoogleButton from "../components/GoogleButton";
import { useState, useContext } from "react";
import Input from "../components/Input";
import Card from "../components/Card";
import { AuthContext } from "../components/AuthContext";
import "../Styles/SignIn.css";

export default function SignIn({ onLogin }) {
  const { login } = useContext(AuthContext);
  const { googleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [name, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = document.getElementById("loginError");
    if (email && name) {
      try {
        const contraCorrecta = await login(email,name);
        if (contraCorrecta == true) { 
          onLogin();
          localStorage.setItem("userName", email); 
          localStorage.setItem("isLoggedIn", JSON.stringify(true));
        } else {
          //castigar al usuario ajajaj
          errorMsg.textContent = " Credenciales Incorrectas "
        }
      } catch (err) {
        console.error('Error en login (SingIn.jsx):', err);
      }
    } 
  };

  async function handleGoogleLogin(e) {
    //destructurarlo del array del evento 
    const {email, idToken, name} = e;
    if (email && name && idToken) {
      try {
        console.log(await googleLogin(email, name, idToken));
      } catch (err) {
        console.error('Error en login (SingIn.jsx):', err);
      }
    } 
  }

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
              <p className="subtituloUno">Iniciar sesión con</p>
              <GoogleButton onLogin={handleGoogleLogin} />
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
