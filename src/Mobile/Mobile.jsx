import "./Mobile.css"
import Head from "../Mobile/MobComponents/Head/Head.jsx"
import Socials from "../Mobile/MobComponents/Socials/Socials"
import Experince from "../Mobile/MobComponents/Experince/Experince.jsx";
import Project from "../Mobile/MobComponents/Project/Project.jsx";
import Education from "./MobComponents/Education/Education.jsx";
import Achieve from "./MobComponents/Achievements/Achieve.jsx";
import Certi from "./MobComponents/Certification/Certi.jsx";
import Skills from "../Mobile/MobComponents/Skills/Skills.jsx";
export default function Mobile(){
    return(
        <div className="mobile-main-container">
            <div className="head-and-socials">
            <Head/>
            <Socials/>
            </div>
            {/* <Head/>
            <Socials/> */}
            <div className="group-of-exp-and-project-mobile">
            <Project/>
            <Experince/>
            </div>
            <div className="group-from-edu-to-skills">
                <Education/>
                <Achieve/>
                <Certi/>
                <Skills/>
            </div>
            <div className="some-space">

            </div>
         
        </div>
    )
}