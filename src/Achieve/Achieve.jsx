import "./Achieve.css"

export default function Achievements({onClick}){
    return(
        <div className="achieve-main-container" onClick={onClick}>
            <h3 className="achieve-main-text">Achievements</h3>
            <p className="achieve-context">What extracurricular stuff I have done? ⚙</p>
        </div>
    )
}