import "../Styles/global.css";
import { useGoogleLogin } from "@react-oauth/google";
import logoGoogle from "../assets/googleLogo.png";
import axios from "axios";

export default function GoogleButton({ onLogin }) {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {

      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          },
        );
        const user = {
          name: res.data.name,
          email: res.data.email,
          idToken: tokenResponse.access_token,
        };

        localStorage.setItem("userName", user.name);
        localStorage.setItem("isLoggedIn", JSON.stringify(true));

        onLogin(user); //pasar el usuario al componente padre
      } catch (err) {
        console.error("Error fetching user info:", err);
      }
    },
    onError: () => {
      console.log("Google login failed");
    },
  });

  return (
    <button className="google-btn" onClick={() => login()}>
      <img className="google-logo" src={logoGoogle} alt="logo google" />
    </button>
  );
}
