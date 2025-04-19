import { useState } from "react";
import Input from "../Input";


export default function SubirUnArchivo (){


    const [arhivo,setArchivo] = useState();
    function manejarArchivo(e) {
        console.log(e.target.files)
        setArchivo(e.target.files[0])
    }

    return(
        <div>
            <h2>Subir un archivo</h2>
            <Input type="file" accept=".csv,.xlsx" onChange={manejarArchivo} ></Input>
        </div>
    )
}