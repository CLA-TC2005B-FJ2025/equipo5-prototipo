import "../Styles/global.css";
import { useGoogleLogin } from "@react-oauth/google";
import logoGoogle from "../assets/googleLogo.png";

export default function GoogleButton({ onLogin }) {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Login Success:", tokenResponse);
      onLogin(); // funcion para validar el login
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <button className="google-btn" onClick={() => login()}>
      <img
        className="google-logo"
        src={logoGoogle}
        alt="logo google"
      />
    </button>
  );
}
