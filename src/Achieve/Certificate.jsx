import"./Certificate.css"
import rocket from "../assets/rocket.svg"
export default function Certificate({onClick}){
    return(
        <div className="certificate-main-container" onClick={onClick}>
                <img src={rocket} alt="rocket" className="rocket-image" />

                <div className="text-container-certificates">

                    <h3 className="certification-main-text">
                        Certificates
                    </h3>
                    <p className="certification-context">
                        Any certificates ? 📃📎
                    </p>
                </div>
                
        </div>
    )
}