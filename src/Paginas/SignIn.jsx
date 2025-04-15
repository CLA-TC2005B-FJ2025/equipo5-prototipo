import GoogleButton from "../components/Button"
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    } else {
      //alert("Completa todos los campos");
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
          <hr />
          <div className="div-botones-login">
            <div className="login-google btnOne">
              <p className="subtituloUno">Iniciar sesión con</p>
              <GoogleButton onLogin={onLogin} />
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
