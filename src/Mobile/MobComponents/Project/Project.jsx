import "./Project.css"
import Machine from "../../../Project/Machine"

import link from "../../../assets/openlink.svg"



function OpenLink(){
    return(
        <img  className="openLink" src={link} alt="opening link" />
    )
}

export default function Project() {
    return(
        <>
            <div className="mob-project-container">
                <OpenLink/>
                <p className="mob-project-qtext">What have I made so far ?🤔</p>
                <h3 className="mob-project-project-text">
                    Projects
                </h3>
                
                <div className="mob-project-image-container">
                
                    <Machine/>
                    
                </div>
                    
                
                
            </div>
        </>
        
    )
}