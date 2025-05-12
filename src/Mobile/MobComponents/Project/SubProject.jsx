
import "./SubProject.css"
import SubContentMobile from "../../SubContent/SubContentMobile"
import {projectData}  from "./projectData"
import ProjectCards from "../../../Project/ProjectCards.jsx"


export default function SubProject({close}){
    return <SubContentMobile height="85%" width="85%">
        <div className="mob-project-content">
                    {/* <h3>This is project Subcontent</h3> */}
                    <button className="mob-close-btn" onClick={close}>
                    ❌
                    </button>
        
                    <h3 className="mob-project-head-text">Project</h3>
                    <p dclassName="mob-project-context">
                    The word project comes from the Latin word projectum from the Latin verb proicere, "before an action", which in turn comes from pro-, which denotes precedence, something that comes before something else in time (paralleling the Greek πρό) and iacere, "to do". The word "project" thus originally meant "before an action"
                    </p>
                    <div className="mob-project-cards-container">
                    {projectData.map((i)=>(
                            <ProjectCards
                            key={i.head}
                             head={i.head} 
                             img={i.img} 
                             weblink={i.webLink} 
                             content={i.content}
                             onClick={i.webLink}
                             className={`mob-${i.head}-card`}
                             num={i.num}
                             />
                    )
                    )}
                    </div>
                    
                    
                    
                </div>

    </SubContentMobile>
}