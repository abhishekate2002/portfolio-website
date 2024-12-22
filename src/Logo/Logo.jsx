import "./Logo.css"
import logo from  "../assets/Logo.svg"

export default function Logo(){
    return(
        <img src={logo} alt="main logo" className="logo" />
    )
}