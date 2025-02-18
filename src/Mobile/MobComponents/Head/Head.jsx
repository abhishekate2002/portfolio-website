import "./Head.css"
import Monitor from "../../../Head/Stickers/Monitor"
import Bulb from "../../../Head/Stickers/Bulb"
import Avatar from "../../../Head/Stickers/Avatar"
export default function Head(){
    return(
        <div className="head-mobile-main-container">
            <div className="head-mobile-imgcontainer-1">
            <Bulb/>
                            
                        </div>

                        <div className="head-mobbile-text-container">
                            <h3 className="head-mobile-main-text">
                                Abhishek
                                Kate
                            </h3>
            
                            <p className="head-mobile-context">
                            💻 A MERN stack developer 💻
                            </p>
                        </div>
            
                        <div className="head-mobile-image-container-2">
                        <Avatar/>
                        <div className="monitor-mobile">
                        <Monitor/> 
                        </div>
                         
                            
                        </div>
        </div>
    )
}