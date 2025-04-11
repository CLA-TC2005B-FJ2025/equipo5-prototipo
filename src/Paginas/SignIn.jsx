import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";
import "../Styles/SignIn.css";

export default function SignIn({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    } else {
      alert("Completa todos los campos");
    }
  };

  return (
    <section className="signin">
      <Card>
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
          <div className="divBotonesLogin">
            <div className="loginGoogle">
              <p>Iniciar sesión con</p>
              <Button type="submit">G</Button>
            </div>
            <div className="loginNormal">
              <Button type="submit">Log in</Button>
            </div>
          </div>
        </form>
      </Card>
    </section>
  );
}
