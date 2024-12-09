import "./Head.css"
import Avatar from "./Stickers/Avatar"
import Bulb from "./Stickers/Bulb"
import Monitor from "./Stickers/Monitor"


export default function Head() {
    return(
        <div className="head-container">

            <div className="imgcontainer-1">
                <Monitor/>
            </div>

            <div className="text-container">
                <h3 className="main-text">
                    Abhishek  <br/>
                    Kate
                </h3>

                <p className="context">
                💻 A MERN stack developer 💻
                </p>
            </div>

            <div className="image-container-2">
                <Bulb/>
                <Avatar/>
            </div>

        </div>
    )
    
}