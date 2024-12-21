import Fence from "./fence/Fence"
import Github from "./Github/Github"
import "./Socials.css"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import mail from "./../../assets/mailicon.svg"
import phone from "../../assets/phone.svg"


function IndividualIcon({ icon, alt, handleOnChange, className }) {
    return (
        <img
            src={icon}
            alt={alt}
            onClick={handleOnChange}
            className={className}

        />
    );
}

export default function Socials() {
    const Icons = [
        { src: github, className: "github" },
        { src: linkedin, className: "linkedin" },
        { src: mail, className: "mail" },
        { src: phone, className: "phone" },
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
                    handleOnChange={null}
            
                />
            ))}

            <p className="base-text">
            Socials, cause why not !! 😅
            </p>

        </div>
    );
}   