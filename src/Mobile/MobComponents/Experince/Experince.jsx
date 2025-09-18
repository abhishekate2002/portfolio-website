import "./Experince.css"
import Calender from "../../../Experince/calender/Calender.jsx"
export default function Experince(onClick){
    return(
        <div className="exp-mobile-container" onClick={onClick}>
            <Calender className="mob-image"/>
            <h3 className="exp-mob-text">Experince</h3>
            <p className="q-mob-text">Where did I served my creativity!! 😎</p>

        </div>
    )
}