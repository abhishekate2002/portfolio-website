import "./ProjectCards.css"

export default function ProjectCards({head, img, content,weblink,className,num}){
    return(
        <>
        <div className={`project-card-${num}`} onClick={() => window.open(weblink, "_blank")}>
                <h4 className={head}>{head}</h4>
                <img src={img} alt={`${head}-${className}`} className={`${head}-${className}`} />
                <div className={`${head}-card-container`}>
                    
                    {content.map((item, index) => (
                            <li key={index} className={className} style={{margin:"8px"}}>{item}</li>
                        ))}
                    
                </div>
            </div>
        </>
    )
}