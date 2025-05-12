import DeskSubContent from "../Desktop/SubContent/DeskSubContent"
import "./SubSkills.css"



// Step 1: Dynamically import all SVGs in the folder
const svgFiles = import.meta.glob('./../assets/skills/*.svg', { eager: true });

// Step 2: Convert the imports into an array of objects
const icons = Object.entries(svgFiles).map(([path, module]) => {
    const name = path.split('/').pop().split('-')[0].replace('.svg', '');
    // get file name
  return { name, src: module.default };
});
export default function SubSkills({close}){
    return(
        <DeskSubContent>
            <button className="close-btn" onClick={close}>
                    ❌ Close
                </button>
            <div className="skills-sub-main-container">
                
            <h2 className="skills-head">Skills</h2>
            <p className="skills-subtext">A skill is the learned or innate  ability to act with determined results with good execution often within a given amount of time, energy, or both. Skills can often be divided into domain-general and domain-specific skills.</p>
            <div className="icons-holder">
            {icons.map((icon, index) => (
                <div key={index} style={{ textAlign: 'center' }} className="img-bg-holder">
                    <img src={icon.src} alt={icon.name} className={`img-${icon.name}`} width="60" height="60"/>
                    <p className="icon-inner-text">{icon.name}</p>
                </div>
            ))}
            </div>
            
         
            </div>

   

        </DeskSubContent>
    )
}