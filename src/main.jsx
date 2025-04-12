import { googleLogout, GoogleOAuthProvider } from "@react-oauth/google";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./Styles/index.css";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="282021918737-r3df5eihoi0uplbhoskmdbm1ic4l9999.apps.googleusercontent.com">
    <StrictMode>
      <App />
    </StrictMode>,
  </GoogleOAuthProvider>
);
