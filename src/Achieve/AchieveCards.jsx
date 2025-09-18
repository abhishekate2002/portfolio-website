import "./AchieveCArds.css"

export default function AchieveCArds({children,year}){
    return(
        <div className="achieve-card">
            <h3 className="project-head-text">{year}</h3>
            {children}
        </div>
    )
}