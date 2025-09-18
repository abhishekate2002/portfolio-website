import "./SubProject.css"
import DeskSubContent from "../Desktop/SubContent/DeskSubContent"
import { projectData } from "./projectData"
import ProjectCards from "./ProjectCards"
// import { data } from "./projectData"

export default function SubProject({close}){
    return <DeskSubContent>
        <div className="project-content">
            {/* <h3>This is project Subcontent</h3> */}
            <button className="close-btn" onClick={close}>
            ❌ Close
            </button>

            <h3 className="project-head-text">Project</h3>
            <p className="project-context">
            The word project comes from the Latin word projectum from the Latin verb proicere, "before an action", which in turn comes from pro-, which denotes precedence, something that comes before something else in time (paralleling the Greek πρό) and iacere, "to do". The word "project" thus originally meant "before an action"
            </p>
            <div className="project-cards-container">
            {projectData.map((i)=>(
                    <ProjectCards
                    key={i.head}
                     head={i.head} 
                     img={i.img} 
                     weblink={i.webLink} 
                     content={i.content}
                     onClick={i.webLink}
                     className={`${i.head}-card`}
                     num={i.num}
                     />
            )
            )}
            </div>
            
            
            
        </div>
        
    </DeskSubContent>
   
}