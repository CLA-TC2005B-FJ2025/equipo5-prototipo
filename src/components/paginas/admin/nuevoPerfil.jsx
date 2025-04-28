import Sidebar from "./SidebarAdmin";
import NavBar from "../../generales/NavBar";
import { useState, useRef } from "react";
import "../../../Styles/NuevoPerfil.css";

export default function NuevoPerfil() {
  const [form, setForm] = useState({
    nombre: "",
    apellidop: "",
    apellidom: "",
    correo: "",
    rol: "",
    departamento: "",
  });

  const msgRef = useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nombre, apellidop, apellidom, correo, rol, departamento } = form;
    if (!nombre || !correo || !rol || !departamento) {
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
        body: JSON.stringify({
          correo,
          nombre,
          apellidop,
          apellidom,
          departamento,
          rol,
        }),
      });
      if (response.ok) {
        msgRef.current.innerText = "Usuario creado exitosamente!";
        console.log(response);
      }
    } catch (err) {
      console.error("Error al crear usuario:", err);
      msgRef.current.innerText =
        "Ocurrio un error durante la creación del usuario";
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

      <div className="nuevo-perfil-container">
        {" "}
        {/*MainCntent*/}
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
                name="rol"
                value={form.rol}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value={3}>Profesor</option>
                <option value={2}>Coordinador</option>
                <option value={1}>Admin</option>
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
                <option value={1}>Académico</option>
                <option value={2}>Deportivo</option>
                <option value={3}>Cultural</option>
                <option value={4}>Laboratorista</option>
                <option value={5}>Tutores</option>
              </select>
            </div>

            <div className="crearPerfilMSG">
              <h3 ref={msgRef}></h3>
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
