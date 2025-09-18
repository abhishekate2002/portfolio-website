import DeskSubContent from "../Desktop/SubContent/DeskSubContent"
import "./SubAboutMe.css"

export default function SubAboutMe({close}){
    return(
        <DeskSubContent height="30%" width="50%">
        <div className="project-content">
        <button className="close-btn" onClick={close}>
            ❌ Close
            </button>

        <h4 className="project-head-text">About me</h4>
        <p className="project-context">
            🚀 Code Wizard Unleashed: I weave ReactJS magic into web wonders that make devices swoon—no dating app needed! 😄
        </p>
        <p className="project-context">
            🎨 Figma-to-Fame Maestro: Blending MERN mastery with Mumbai-Swansea vibes, my responsive designs outshine your best selfie! ✨
        </p>
        <p className="project-context">
            🌟 Tech Trailblazer: Leading teams and coding brilliance, I turn ideas into digital gold—hustle included! 💻
        </p>
        </div>
        </DeskSubContent>

    )
}