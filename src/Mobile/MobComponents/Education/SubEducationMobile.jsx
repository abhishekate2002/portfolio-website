import "./SubEducationMobile.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SubContentMobile from "../../SubContent/SubContentMobile";

export default function SubEducationMobile({close}){
    return <SubContentMobile>

        <button className="mob-close-btn" onClick={close}>
            ❌
        </button>

        <div className="sub-education-container">

        <h3 className="subeducation-head-context">Education</h3>
        <p className="subcontent-para-context">The term "education" originates from the Latin words educare, meaning "to bring up," and educere, meaning "to bring forth."</p>
       
        <div className="timeline-container">
            <VerticalTimeline
            layout="2-columns"
            contentStyle={{ background: 'rgba(33, 149, 243, 0)', color: 'rgba(33, 149, 243, 0)' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(28, 28, 28)' }}
            lineColor="#2B2528"
            >

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // date="2011 - present"
                    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                    iconStyle={{ background:  '#131213', color: '#9A7AFF' }}
                    // iconClassName={ {color:"#9A7AFFx"}}
                    contentStyle={ {
                        // color:'#9A7AFF',
                        background: '#131213'
                        
                    }}
                    date="September 2022 - December 2023"

                > 
                    <h4>Master of Science in Advance Computer Science</h4>
                    <h6 style={{marginTop:"0px"}}><i>Swansea University, United Kingdom</i></h6>
                    <p><u><i>8.6 CGPA</i></u></p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // date="2011 - present"
                    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                    iconStyle={{ background:  '#131213', color: '#9A7AFF' }}
                    iconClassName={ {color:"#9A7AFFx"}}
                    contentStyle={ {
                        // color:'#9A7AFF',
                        background: '#131213'
                        
                    }}
                    date="July 2019 - April 2022"

                > 
                    <h4>Bachlors in Computer Science</h4>
                    <h6 style={{marginTop:"0px"}}><i>Mumbai University, Mumbai India</i></h6>
                    <p><u><i>9.2 CGPA</i></u></p>
                </VerticalTimelineElement>
                

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // date="2011 - present"
                    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                    iconStyle={{ background:  '#131213', color: '#9A7AFF' }}
                    iconClassName={ {color:"#9A7AFFx"}}
                    contentStyle={ {
                        // color:'#9A7AFF',
                        background: '#131213'
                        
                    }}
                    date="July 2019 - April 2022"

                > 
                    <h4>Higher Education</h4>
                    <h6 style={{marginTop:"0px"}}><i>Maharastra State Board, Mumbai India</i></h6>
                    <p><u><i>65%</i></u></p>
                </VerticalTimelineElement>


            </VerticalTimeline>
        </div>

        </div>

{console.log("SubEducation was clicked")}
       
    </SubContentMobile>
}