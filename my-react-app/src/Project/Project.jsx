import "./Project.css"
import Machine from "./Machine"

import link from "../assets/openlink.svg"



function OpenLink(){
    return(
        <img  className="openLink" src={link} alt="opening link" />
    )
}

export default function Project() {
    return(
        <>
            <div className="container">
                <OpenLink/>
                <p className="qtext">What have I made so far ?🤔</p>
                <h3 className="project-text">
                    Projects
                </h3>
                
                <div className="image-container">
                <Machine/>
                </div>
                    
                
                
            </div>
        </>
        
    )
}