import { useState } from "react";
import uploadIcon from "../../../public/images/sidebar/upload.svg";
import Input from "../Input";

export default function SubirUnArchivo() {
  const [archivo, setArchivo] = useState();
  const extensionesPermitidas = [".csv", ".xlsx"];

  function validarExtension(nombreArchivo) {
    return extensionesPermitidas.some((ext) => nombreArchivo.endsWith(ext));
  }

  function handleFiles(files) {
    if (files.length > 0) {
      const archivo = files[0];
      if (validarExtension(archivo.name)) {
        console.log(archivo);
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
    handleFiles(e.dataTransfer.files);
  }

  function dragoverHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="subirArchivoContainer">
      <h2>Subir un archivo</h2>

      <div
        className="dropzone"
        onDrop={dropHandler}
        onDragOver={dragoverHandler}
        tabIndex="0"
      >
        <img
          className="uploadIcon"
          src={uploadIcon}
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
