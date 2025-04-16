
export default function DashboardButton({imgSrc, content, onClick = null, classN, active = null}){
    let clases = `${classN} ${active ? "botonActivo" : ""}`

    return (
        <div className={clases}>
            <button onClick={onClick}> 
                <div><img src={imgSrc} alt={content + " icono"} /></div> 
                <div> {content}</div> 
            </button>
        </div>
    )
}