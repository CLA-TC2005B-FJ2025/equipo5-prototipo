import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../generales/Input.jsx";
import Papa from "papaparse";

export default function SubirUnArchivo() {
  const [archivo, setArchivo] = useState(null);
  const [animacion, setAnimacion] = useState(false);
  const navigate = useNavigate();
  const extensionesPermitidas = [".csv"];

  const validarExtension = nombre =>
    extensionesPermitidas.some(ext => nombre.endsWith(ext));

  const handleFiles = files => {
    if (!files.length) return;
    const file = files[0];
    if (!validarExtension(file.name)) {
      console.warn("Sólo .csv");
      return;
    }

    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = e => {
      const contenido = e.target.result;

      const resultado = Papa.parse(contenido, {
        header: true,
        skipEmptyLines: true,
      });

      fetch(
        "https://didactic-journey-pjj577p6pg4j39rv6-3000.app.github.dev/subirArchivo/subir",
        {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=UTF-8" },
          body: JSON.stringify({ encuestas: resultado.data }),
        }
      )
        .then(res => (res.ok ? res.text() : Promise.reject(res.statusText)))
        .then(msg => {
          console.log("Servidor:", msg);
          // Navega a la ruta deseada tras la carga
          navigate('/subirArchivo');
        })
        .catch(err => {
          console.error("Error al subir:", err);
          alert("Hubo un error.");
        });
    };

    reader.readAsText(file, "ISO-8859-1");
    setArchivo(file);
  };

  const manejarArchivo = e => handleFiles(e.target.files);
  const dropHandler = e => { e.preventDefault(); setAnimacion(false); handleFiles(e.dataTransfer.files) };
  const dragoverHandler = e => { e.preventDefault(); setAnimacion(true) };
  const dragLeaveHandler = e => { e.preventDefault(); setAnimacion(false) };

  return (
    <div className="subirArchivoContainer">
      <h2>Subir un archivo</h2>
      <div
        className={`dropzone ${animacion ? "activo" : ""}`}
        onDrop={dropHandler}
        onDragOver={dragoverHandler}
        onDragLeave={dragLeaveHandler}
        tabIndex="0"
      >
        <img
          className="uploadIcon"
          src="/images/sidebar/upload.svg"
          alt="icono de subir archivo"
        />

        <p>
          <b>Arrastra</b> y <b>suelta</b> el archivo.
        </p>

        <div>
          <label className="botonSubirArchivo" htmlFor="subir-archivo">
            Seleccionar
          </label>
          <Input
            type="file"
            id="subir-archivo"
            className="inputSubir"
            accept=".csv,.xlsx"
            onChange={manejarArchivo}
          />
        </div>
      </div>
    </div>
  );
}
