import "./Project.css"
import { useState } from "react"
import Machine from "./Machine"
import link from "../assets/openlink.svg"
import DeskSubContent from "../Desktop/SubContent/DeskSubContent"

function OpenLink(){
    return(
        <img  className="openLink" src={link} alt="opening link" />
    )
}



export default function Project() {

    const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };
    return(
        <>
            <div className="container" onClick={() =>{openModal}}>
            {isModalOpen && <DeskSubContent/>}
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