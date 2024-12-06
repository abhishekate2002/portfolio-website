import "./TopRightSticker.css"
import TRBStick from "../../assets/TRBookSticker.svg"

export default function TopRightSticker(){
    return(
        <div className="img-container">
            <img className="top-right" src={TRBStick} alt="TopRight" />
        </div>
    )
}