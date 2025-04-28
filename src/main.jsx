import App from "./App.jsx";
import Dashboard from "./components/paginas/Dashboard.jsx";
import SubirArchivo from "./components/paginas/admin/SubirArchivo.jsx";
import NuevoPerfil from "./components/paginas/admin/nuevoPerfil.jsx";
import EncuestasActivas from "./components/paginas/admin/encuestasActivas.jsx";
import GestionComentarios from "./components/paginas/admin/gestionComentarios.jsx";
import RutaPrivada from "./components/generales/RutaPrivada.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./components/generales/AuthContext.jsx";
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
              //<RutaPrivada>
              <Dashboard />
              //</RutaPrivada>
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
              //<RutaPrivada>
              <NuevoPerfil />
              //</RutaPrivada>
            }
          />
          <Route
            path="/encuestasActivas"
            element={
              //<RutaPrivada>
              <EncuestasActivas />
              //</RutaPrivada>
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
  </StrictMode>,
);
