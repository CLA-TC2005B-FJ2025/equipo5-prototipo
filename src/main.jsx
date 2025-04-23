import App from "./App.jsx";
import Dashboard from "./Paginas/Dashboard.jsx";
import SubirArchivo from "./Paginas/subirArchivo.jsx";
import NuevoPerfil from "./Paginas/NuevoPerfil.jsx";
import EncuestasActivas from "./Paginas/EncuestasActivas.jsx";
import GestionComentarios from "./Paginas/GestionComentarios.jsx";
import RutaPrivada from "./components/RutaPrivada.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./components/AuthContext.jsx";
import "./Styles/index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              path="/dashboard"
              element={
                <RutaPrivada>
                  <Dashboard />
                </RutaPrivada>
              }
            />
            <Route
              path="/subirArchivo"
              element={
                <RutaPrivada>
                  <SubirArchivo />
                </RutaPrivada>
              }
            />
            <Route
              path="/nuevoPerfil"
              element={
                <RutaPrivada>
                  <NuevoPerfil />
                </RutaPrivada>
              }
            />
            <Route
              path="/encuestasActivas"
              element={
                <RutaPrivada>
                  <EncuestasActivas />
                </RutaPrivada>
              }
            />
            <Route
              path="/gestionComentarios"
              element={
                <RutaPrivada>
                  <GestionComentarios />
                </RutaPrivada>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </StrictMode>
);
