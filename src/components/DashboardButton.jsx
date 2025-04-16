
export default function DashboardButton({imgSrc, content, onClick = null, classN}){
    return (
        <div className={classN}>
            <button onClick={onClick}> 
                <div><img src={imgSrc} alt={content + " icono"} /></div> 
                <div> {content}</div> 
            </button>
        </div>
    )
}