
export default function BotonConImg({imagen,classN}){
    return (
        <button className={classN}><img src={imagen} alt="boton con imagen"></img></button>
    )
}