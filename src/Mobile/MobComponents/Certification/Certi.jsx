import "./Certi.css"
import rocket from "../../../assets/rocket.svg"
export default function Certi(){
    return(
        <div className="mob-certificate-main-container">
                <img src={rocket} alt="rocket" className="mob-rocket-image" />

                <div className="mob-text-container-certificates">

                    <h3 className="mob-certification-main-text">
                        Certificates
                    </h3>
                    <p className="mob-certification-context">
                        Any certificates ? 📃📎
                    </p>
                </div>
                
        </div>
    )
}