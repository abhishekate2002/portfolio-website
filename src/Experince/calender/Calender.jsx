import calender from "../../assets/calender.png"

export default function Calender(props){
    return(
        <img  className={props.className} src={calender} alt="calender" />
    )
}