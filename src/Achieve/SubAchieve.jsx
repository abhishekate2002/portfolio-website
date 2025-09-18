import DeskSubContent from "../Desktop/SubContent/DeskSubContent"
import AchieveCArds from "./AchieveCards"
import "./SubAchieve.css"

export default function SubAchieve({close}){
    return <DeskSubContent height="80%" width="60%">
        <button className=" close-btn" onClick={close}>
                    ❌ Close
                </button>
        <div className="sub-achieve-container">

            <h3 className="project-head-text">Achievements / Activites</h3>
            <p className="project-context">
                In video gaming, an achievement (or a trophy) is a meta-goal defined outside a game's parameters, a digital reward that signifies a player's mastery of a specific task or challenge within a video game. Unlike the in-game systems of quests, tasks, and/or levels that usually define the goals of a video game and have a direct effect on further gameplay, the management of achievements usually takes place outside the confines of the game environment and architecture.
            </p>

        <div className="achieve-cards-holder">
            <AchieveCArds year="2020">
            <h6 className="project-head-text sub">Volunteer at Tech Arena</h6>
            <ul>
                <li className="project-context">Was part of marketing team at tech arena event. Where my job was to conduct marketing across multiple universites in Mumbai.</li>
                <li className="project-context">The marketing was done by visiting several universities and their classroom with team of 4 people.</li>
                <li className="project-context">With this marketing we were able gain 250+ external participants. This rise in participants was praised and the whole team awarded with "Most impactful team" award of the event.</li>
            </ul>
        </AchieveCArds>

        <AchieveCArds year={2022}>
            <h6 className="project-head-text sub">Team Leader of marketing at Tech Arena</h6>
            <ul>
                <li className="project-context">Based on outstanding achievement in privious event, I was promoted this time as team leader of marketing and social media handle of event.</li>
                <li className="project-context">This time along with marketing I was handling team of 5 people. Our teams job was to make sure we digitally advertise about event, distribute e-certificates to all participants, stream event live in auditorium and more.</li>
                <li className="project-context">With just team of 5 people we were able to accomploish all golas and hence deliver a smooth event both online and offline together.</li>
            </ul>

        </AchieveCArds>
        </div>
        </div>
    </DeskSubContent>
}