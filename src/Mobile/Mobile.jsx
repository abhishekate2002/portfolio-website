import "./Mobile.css"

import { createPortal } from "react-dom";
import { useState } from "react";

import Head from "../Mobile/MobComponents/Head/Head.jsx"
import Socials from "../Mobile/MobComponents/Socials/Socials"
import Experince from "../Mobile/MobComponents/Experince/Experince.jsx";
import Project from "../Mobile/MobComponents/Project/Project.jsx";
import Education from "./MobComponents/Education/Education.jsx";
import Achieve from "./MobComponents/Achievements/Achieve.jsx";
import Certi from "./MobComponents/Certification/Certi.jsx";
import Skills from "../Mobile/MobComponents/Skills/Skills.jsx";

import SubContentMobile from "./SubContent/SubContentMobile.jsx"
import SubProject from "./MobComponents/Project/SubProject.jsx";
import SubEducationMobile from "./MobComponents/Education/SubEducationMobile.jsx";
import MobSubSkills from "./MobComponents/Skills/MobSubSkills.jsx";
export default function Mobile(){

  const [activeComponent, setActiveComponent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Open modal with specific component
  const openContent = (component) => {
    setActiveComponent(component); // Track which component to display
    setIsOpen(true); // Show modal
  };

  // Close modal
  const closeContent = () => {
    setActiveComponent(null); // Reset active component
    setIsOpen(false); // Hide modal
  };

    return(
        <div className="mobile-main-container">
            <div className="head-and-socials">
            <Head/>
            <Socials/>
            </div>
            {/* <Head/>
            <Socials/> */}
            <div className="group-of-exp-and-project-mobile">
            <Project onClick={() => openContent("Project")}/>
            <Experince />
            </div>
            <div className="group-from-edu-to-skills">
                <Education onClick={() => openContent("Education")}/>
                <Achieve/>
                <Certi/>
                <Skills onClick={() => openContent("Skills")}/>
            </div>

            {/* Render modal using React Portal when isOpen is true */}
                      {isOpen &&
                    createPortal(
                      {
                        Project: <SubProject close={closeContent} />,
                        // Experience: <p>This is experience modal</p>,
                        // Education: <SubEducation  close={closeContent}/> // Add more modals here
                        Education: <SubEducationMobile close={closeContent}/>,
                        Skills: <MobSubSkills close={closeContent}/>
                      }[activeComponent] || null,
                      document.body
                    )}
            <div className="some-space">

            </div>
         
        </div>
    )
}