import { useEffect, useState } from "react";
import Input from "../generales/Input.jsx";

export default function SubirUnArchivo() {
  const [archivo, setArchivo] = useState();
  const extensionesPermitidas = [".csv", ".xlsx"];

  function validarExtension(nombreArchivo) {
    return extensionesPermitidas.some((ext) => nombreArchivo.endsWith(ext));
  }

  //si el archivo tiene existe, es csv o xlsx, usa el api de filereader y lo lee
  //al cargar lo loggea a la consola, pero en si deberiamos pasarlo a otra funcion
  //que lo seccione o lo suba a la base de datos, se lo atribuya a un usuario
  //tambien abrir el menu para agregar las encuestas, etc...

  function handleFiles(files) {
    if (files.length > 0) {
      const archivo = files[0];
      if (validarExtension(archivo.name)) {
        if (archivo) {
          console.log("cargando archivo!");
          const reader = new FileReader();
          reader.onload = (e) => {
            const contenido = e.target.result;
            console.log("Contenido del archivo:", contenido);
          };
          reader.readAsText(archivo);
        }
        setArchivo(archivo);
      } else {
        console.log("Tipo de archivo no permitido. Solo .csv y .xlsx");
      }
    }
  }

  function manejarArchivo(e) {
    handleFiles(e.target.files);
  }

  function dropHandler(e) {
    e.preventDefault();
    setAnimacion(false);
    handleFiles(e.dataTransfer.files);
  }

  function dragoverHandler(e) {
    e.preventDefault();
    setAnimacion(true);
  }

  function dragLeaveHandler(e) {
    e.preventDefault();
    setAnimacion(false);
  }

  //useState para manejar animacion de cuando se esta arrastrando un archivo!
  const [animacion, setAnimacion] = useState(false);

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
          <b>Arrastra</b> y <b>suelta</b> el archivo o seleccionalo.
        </p>

        <div>
          <label className="botonSubirArchivo" htmlFor="subir-archivo">
            Seleccionar Archivo
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
