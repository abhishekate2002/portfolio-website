import "./experince.css"
import Calender from "./calender/Calender.jsx"
export default function Experince({onClick}){
    return(
        <div className="exp-container" onClick={onClick}>
            <Calender className="image"/>
            <h3 className="exp-text">Experience</h3>
            <p className="q-text">Where did I served my creativity!! 😎</p>

        </div>
    )
}