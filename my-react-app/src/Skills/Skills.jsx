import "./Skills.css"
import ok from"../assets/ok.svg"
import listIcon from "../assets/list.svg"
export default function Skills(){
    return(
        <div className="skills-container">
            <img src={ok} alt="" className="ok" />
            <h3 className="skills-main-text">
                Skills
            </h3>

            <p className="skills-context">
            What magics tricks I can do?!!
            </p>

            <img src={listIcon} alt="" className="list-img" />
        </div>
    )
}