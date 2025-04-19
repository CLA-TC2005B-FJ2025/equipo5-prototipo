import GoogleButton from "../components/GoogleButton";
import { useState } from "react";
import Input from "../components/Input";
import Card from "../components/Card";
import "../Styles/SignIn.css";

export default function SignIn({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  function handleGoogleLogin(e) {
    onLogin();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
      //aqui es donde vamos a tener que implementar la verificacion hacia la base de datos si no es con google!
      //por el momento estoy asumiendo que todo bn, sino no deberia de saltar a la linea de abajo
      localStorage.setItem("userName", getNombre(email)); //despues hay que actulizar este para que saque el nombre conforme al correo en la BDD
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
    } else {
      //alert("Completa todos los campos");
    }
  };

  const getNombre = (email) =>{
    let nombre = email.split("@")[0];
    return nombre.charAt(0).toUpperCase() + String(nombre).slice(1); //primera letra mayuscula
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
