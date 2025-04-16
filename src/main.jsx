import { googleLogout, GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Dashboard from "./Paginas/Dashboard.jsx";
import SubirArchivo from "./Paginas/subirArchivo.jsx";
import NuevoPerfil from "./Paginas/NuevoPerfil.jsx";
import EncuestasActivas from "./Paginas/EncuestasActivas.jsx";
import GestionComentarios from "./Paginas/GestionComentarios.jsx";
import "./Styles/index.css";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="282021918737-r3df5eihoi0uplbhoskmdbm1ic4l9999.apps.googleusercontent.com">
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subirArchivo" element={<SubirArchivo />} />
          <Route path="/nuevoPerfil" element={<NuevoPerfil />} />
          <Route path="/encuestasActivas" element={<EncuestasActivas />} />
          <Route path="/gestionComentarios" element={<GestionComentarios />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </GoogleOAuthProvider>,
);
