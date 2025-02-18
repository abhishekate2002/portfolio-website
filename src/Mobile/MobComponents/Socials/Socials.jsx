
import "./Socials.css"
import github from "../../../assets/github.svg"
import linkedin from "../../../assets/linkedin.svg"
import mail from "../../../assets/mailicon.svg"
import phone from "../../../assets/phone.svg"
function SocialLinks({name, imgScr, link}){
  return(
    <a href={link}  target="_blank" rel="noopener noreferrer" className={`social-a-${name}`}>
       <img src={imgScr} alt={name}  style={{ cursor: "pointer" }} className={`social-img-${name}`}/> 
    
    </a>
  )
}

export default function Socials() {
  return (
    <div className="socials-mob-container">
      <div className="socials-mob-main-container">
      <SocialLinks name="github" imgScr={github} link="https://github.com/abhishekate2002"/>
      <SocialLinks name="linkedin" imgScr={linkedin} link="https://www.linkedin.com/in/abhishekkate/"/>
      <SocialLinks name="mail" imgScr={mail} link="mailto:abhikate06@gmail.com"/>
      <SocialLinks name="phone" imgScr={phone} link="+44 07867231183"/>
      </div>
      <p className="social-mob-context">
      Socials, cause why not !! 😅
      </p>
    </div>
  );
}
