import "./Avatar.css"
import avatar from "../../assets/abhishekCoffee.svg"
export default function Avatar(){
    return(
        <img className="avatar" src={avatar} alt="abhishek" />
    )
}