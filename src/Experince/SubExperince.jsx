import AchieveCArds from "../Achieve/AchieveCards"
import DeskSubContent from "../Desktop/SubContent/DeskSubContent"
import "./SubExperince.css"

export default function SubExperince({close}){
    return <DeskSubContent height="80%" width="60%">
        <div className="project-content">
            <button className="close-btn" onClick={close}>
            ❌ Close
        </button>
        <h3 className="project-head-text">Experince</h3>
            <p className="project-context">
            Experience refers to conscious events in general, more specifically to perceptions, or to the practical knowledge and familiarity that is produced by these processes. Understood as a conscious event in the widest sense, experience involves a subject to which various items are presented.
            </p>
        
        <div className="achieve-cards-holder">

            <AchieveCArds year="Frontend Developer">
                <p className="project-head-text sub">Feb 2022 – Aug 2022</p>
            <ul>
                <li className="project-context">Developed web applications using JavaScript, HTML, and CSS for university projects, ensuring cross-browser compatibility.</li>
                <li className="project-context">Designed user interfaces using Figma, creating wireframes and prototypes to enhance user experience.</li>
                <li className="project-context">Collaborated with a team to implement responsive and accessible designs, adhering to web standards.</li>
                <li className="project-context">Gained practical experience in frontend development and UI design principles, contributing to project deliverables.</li>

            </ul>
            </AchieveCArds>
            <AchieveCArds year="The Perfume Shop">
                <p className="project-head-text sub">Part time job</p>
            <ul>
                <li className="project-context">From October 2022 to April 2023 I was part of THE PERFUME SHOP as crew member.</li>
                <li className="project-context">My role was to recommend and enhance customers choice by helping them choose bettween some extremely good and luxirous brands in store.</li>
                <li className="project-context">Also making sure that we are in stock with all brands thhroughout the year.</li>
                <li className="project-context">Gained practical experience in sales and marketing through this job. Something totatlly out of my field. </li>
            </ul>

            </AchieveCArds>
            <AchieveCArds year="McDonalds">
                <p className="project-head-text sub">Part time job</p>
            <ul>
                <li className="project-context">From Feb 2024 till Feb 2025 I was part of Macdonalds Swansea, Fabian way team. </li>
                <li className="project-context">As a crew member I was part of team which handle kitchen and stock in branch.</li>
                <li className="project-context">My teams job was to make sure we at macdonalds serrver only the best food to pur customers.</li>
                <li className="project-context">As part of my job I was also suppose to train new joiners and explain how Mcdonalds creates delisous food in few minutes and much more</li>

            </ul>


            </AchieveCArds>
        </div>


            

        </div>
        
    </DeskSubContent>
}