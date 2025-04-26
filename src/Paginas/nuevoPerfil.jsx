import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";
import { useState } from "react";
import "../Styles/NuevoPerfil.css";

export default function NuevoPerfil() {
  const [form, setForm] = useState({
    nombre: "",
    apellidop: "",
    apellidom: "",
    correo: "",
    tipoUsuario: "",
    departamento: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nombre, correo, tipoUsuario, departamento } = form;
    if (!nombre || !correo || !tipoUsuario || !departamento) {
      alert("Por favor, completa todos los campos antes de continuar.");
      return;
    }

    console.log("Perfil nuevo:", form);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/usuario`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, apellidop, apellidom, correo, rol, departamento }),
      });
      if (response.ok) {
        console.log(response)
      }
    } catch (err) {
      console.error("Error en login:", err);
      return { success: false, error: err.message };
    }

  };

  return (
    <div className="MainPageLayout">
      <div className="Sidebar">
        <Sidebar botonActivoAct={"Nuevo Perfil"} />
      </div>

      <div className="Navbar">
        <NavBar Usuario={localStorage.getItem("userName")} />
      </div>

      <div className="MainContent nuevo-perfil-container">
        <div className="form-box">
          <div className="form-header">
            <h2>Crea un perfil nuevo</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                id="nombre"
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="apellidos">
              <div className="input-group">
                <label htmlFor="apellidop">Apellido Paterno</label>
                <input
                  id="apellidop"
                  type="text"
                  name="apellidop"
                  value={form.apellidop}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="apellidom">Apellido Materno</label>
                <input
                  id="apellidom"
                  type="text"
                  name="apellidom"
                  value={form.apellidom}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            

            <div className="input-group">
              <label htmlFor="correo">Correo Institucional</label>
              <input
                id="correo"
                type="email"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="tipoUsuario">Tipo de usuario</label>
              <select
                id="tipoUsuario"
                name="tipoUsuario"
                value={form.tipoUsuario}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Profesor">Profesor</option>
                <option value="Coordinador">Coordinador</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="departamento">Departamento</label>
              <select
                id="departamento"
                name="departamento"
                value={form.departamento}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un departamento</option>
                <option value="Académico">Académico</option>
                <option value="Deportivo">Deportivo</option>
                <option value="Cultural">Cultural</option>
                <option value="Laboratorista">Laboratorista</option>
                <option value="Tutores">Tutores</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Crear perfil
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
