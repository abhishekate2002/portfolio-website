import "./SubCerti.css"
import DeskSubContent from "../Desktop/SubContent/DeskSubContent";

export default function SubCerti({close}){
    return <DeskSubContent height="80%" width="60%">
        
        <div className="sub-container-of-certification">
            <button className="close-btn" onClick={close}>
                    ❌ Close
                </button>
            <h3 className="project-head-text">Certifications</h3>
            <p className="project-context">
            Certification is part of testing, inspection and certification and the provision by an independent body of written assurance (a certificate) that the product, service or system in question meets specific requirements. It is the formal attestation or confirmation of certain characteristics of an object, person, or organization.
            </p>
        
        
            <div className="contaier-for-cards">


                <div className="card-of-certification">
                    <h4 className="certificate-container-head">
                        React - The Complete Guide 2025 (incl. Next.js, Redux)
                    </h4>

                    <div className="list-of-points-certification">
                        <ul>
                            <li  className="li-class" style={{margin:"8px"}}>
                                <b>Mastered React.js Development:</b> Proficient in building dynamic, high-performance web applications from the ground up using React.js, starting with no prior React experience.
                            </li>
                             <li  className="li-class" style={{margin:"8px"}}>
                                <b>Comprehensive React Skills:</b> Skilled in core concepts like components, hooks, state management with Redux and Context API, routing with React Router, and full-stack development with Next.js.
                            </li>
                            <li  className="li-class" style={{margin:"8px"}}>
                                <b>Hands-On Project Experience: </b> Built multiple demo projects, including a full-stack Next.js application, with expertise in authentication, unit testing, and TypeScript integration.
                            </li>
                            <li  className="li-class" style={{margin:"8px"}}>
                                <b>Advanced Techniques:</b> Adept at styling with Styled Components and CSS Modules, managing side effects, handling forms with validation, and deploying React applications.
                            </li>
                            <li  className="li-class" style={{margin:"8px"}}>
                                <b>Practical Application:</b> Applied React in real-world scenarios, creating fast, reactive web apps with animations and debugging proficiency, ready for industry-standard development.
                            </li>
                        </ul>
                    </div>

                </div>




                <div className="card-of-certification">
                    <h4 className="certificate-container-head">
                        Tech Arena Event Experience (Mumbai University, Feb 2022 - Aug 2022)
                    </h4>

                    <div className="list-of-points-certification">
                        <ul>
                            <li  className="li-class" style={{margin:"8px"}}>
                                <b>Leadership Excellence:</b> Led a team of 5 as Team Leader and Lead Developer, demonstrating strong leadership, project management, and coordination skills to successfully execute cultural events.
                            </li>
                             <li  className="li-class" style={{margin:"8px"}}>
                                <b>Front-End Development Expertise:</b>Mentored team members in front-end technologies, including Figma, HTML5, CSS, and JavaScript, enabling the creation of visually appealing and responsive web interfaces.
                            </li>
                            <li  className="li-class" style={{margin:"8px"}}>
                                <b>Team Mentorship: </b> Guided a team in developing technical skills, fostering collaboration and ensuring high-quality deliverables for event-related web projects.
                            </li>
                            <li  className="li-class" style={{margin:"8px"}}>
                                <b>Event Organization Proficiency:</b> Coordinated and managed cultural events, ensuring seamless execution through effective planning and team collaboration.
                            </li>
                            <li  className="li-class" style={{margin:"8px"}}>
                                <b>Practical Application:</b> Applied React in real-world scenarios, creating fast, reactive web apps with animations and debugging proficiency, ready for industry-standard development.
                            </li>
                        </ul>
                    </div>

                </div>
            
            </div>
        </div>

        
{/* <li  className="li-class" style={{margin:"8px"}}>
                    <b>Mastered React.js Development:</b> Proficient in building dynamic, high-performance web applications from the ground up using React.js, starting with no prior React experience.
                </li>
                <li  className="li-class" style={{margin:"8px"}}>
                    <b>Comprehensive React Skills:</b> Skilled in core concepts like components, hooks, state management with Redux and Context API, routing with React Router, and full-stack development with Next.js.
                </li>
                <li  className="li-class" style={{margin:"8px"}}>
                    <b>Hands-On Project Experience: </b> Built multiple demo projects, including a full-stack Next.js application, with expertise in authentication, unit testing, and TypeScript integration.
                </li>
                <li  className="li-class" style={{margin:"8px"}}>
                    <b>Advanced Techniques:</b> Adept at styling with Styled Components and CSS Modules, managing side effects, handling forms with validation, and deploying React applications.
                </li>
                <li  className="li-class" style={{margin:"8px"}}>
                    <b>Practical Application:</b> Applied React in real-world scenarios, creating fast, reactive web apps with animations and debugging proficiency, ready for industry-standard development.
                </li> */}
        {/* </div> */}
        
        
        
    </DeskSubContent>
}