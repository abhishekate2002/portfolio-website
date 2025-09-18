import "./Aboutme.css"

export default function Aboutme({onClick}){
    return(
        <div className="about-me-container" onClick={onClick}>
            <h4 className="main-heading-text">
                About me
            </h4>
            <p className="about-me-context">
            Who am I and what is my moto ?
            🤓
            </p>
        </div>
    )
}