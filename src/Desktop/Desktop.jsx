import "./Desktop.css";
import { createPortal } from "react-dom";
import { useState } from "react";

import Project from "../Project/Project";
import Experince from "../Experince/Experince";
import Education from "../Education/Education";
import Head from "../Head/Head";
import Logo from "../Logo/Logo";
import Socials from "../Socials/logos/Socials";
import Aboutme from "../Aboutme/Aboutme";
import Skills from "../Skills/Skills";
import Achievements from "../Achieve/Achieve";
import Certificate from "../Achieve/Certificate.jsx";
import SubProject from "../Project/SubProject.jsx";
import SubEducation from "../Education/SubEducation.jsx";
import SubSkills from "../Skills/SubSkills.jsx";

export default function Desktop() {
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

  return (
    <div className="desktop-main-container">
      <div className="container-is-the-main">
        <div className="main-container">
          <div className="group1">
            <div className="sub-group1">
              {/* Click opens respective modal */}
              <Project onClick={() => openContent("Project")} />
              <Experince onClick={() => openContent("Experience")} />
            </div>

            <div className="group-pf-edu-achi-cert">
              <Education onClick={() => openContent("Education")}/>
              <div className="group-of-achiv-and-certifi">
                <Achievements onClick={() => openContent("Education")} />
                <Certificate />
              </div>
            </div>
          </div>

          <div className="group3">
            <Head />
            <Logo />
          </div>

          <div className="main-group-of-4-and-5">
            <Socials />
            <Aboutme />
            <Skills onClick={() => openContent("Skills")}/>
          </div>
          {/* Render modal using React Portal when isOpen is true */}
          {isOpen &&
        createPortal(
          {
            Project: <SubProject close={closeContent} />,
            Experience: <p>This is experience modal</p>,
            Education: <SubEducation  close={closeContent}/>,
            Skills: <SubSkills close={closeContent}/>,
            Achievements: null
          }[activeComponent] || null,
          document.body
        )}
        </div>
        
      </div>

      
    </div>
  );
}
