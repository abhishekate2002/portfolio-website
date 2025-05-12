import Fence from "./fence/Fence"
import Github from "./Github/Github"
import "./Socials.css"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import mail from "./../../assets/mailicon.svg"
import phone from "../../assets/phone.svg"


function IndividualIcon({ icon, alt, link, className }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img
            src={icon}
            alt={alt}
            style={{ cursor: "pointer" }}
            href={link}
            // onClick={handleOnChange}
            className={className}

        />
        </a>
        
    );
}

export default function Socials() {
    const Icons = [
        { src: github, className: "github" , link: "https://github.com/abhishekate2002"},
        { src: linkedin, className: "linkedin", link:"https://www.linkedin.com/in/abhishekkate/" },
        { src: mail, className: "mail", link:"mailto:abhikate06@outlook.com" },
        { src: phone, className: "phone", link:"+44 07867231183" },
    ];

    return (
        <div className="social-container">
            <Fence />

            {Icons.map((ic, index) => (
                <IndividualIcon
                    key={index}
                    icon={ic.src}
                    alt={ic.className}
                    className={ic.className}
                    link={ic.link}
                    // handleOnChange={null}
            
                />
            ))}

            <p className="base-text">
            Socials, cause why not !! 😅
            </p>

        </div>
    );
}   