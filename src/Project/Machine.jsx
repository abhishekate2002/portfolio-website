import machine from "../assets/projectIcon.png"
import "./Machine.css"
export default function MachineImage(){
    return(
        <div className="img-carry">
            <img src={machine} alt="machine image" />
        </div>
    )
}