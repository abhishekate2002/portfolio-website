import "./Skills.css"
import ok from"../../../assets/ok.svg"
import listIcon from "../../../assets/list.svg"


export default function Skills({onClick}){
    return(
        <div className="mob-skills-container" onClick={onClick}>
                    <img src={ok} alt="" className="mob-ok" />
                    <h3 className="mob-skills-main-text">
                        Skills
                    </h3>
        
                    <p className="mob-skills-context">
                    What magics tricks I can do?!!
                    </p>
        
                    <img src={listIcon} alt="" className="mob-list-img" />
                </div>
    )
}