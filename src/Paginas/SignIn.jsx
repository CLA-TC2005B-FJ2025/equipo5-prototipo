import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";
import "../Styles/SignIn.css";
import logoGoogle from "../assets/googleLogo.png";

export default function SignIn({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              <Button type="submit">
                <img
                  className="google-logo"
                  src={logoGoogle}
                  alt="logo google"
                />
              </Button>
            </div>
            <div className="login-normal btnOne">
              <Button type="submit">Log in</Button>
            </div>
          </div>
        </form>
      </Card>
    </section>

  );
}
