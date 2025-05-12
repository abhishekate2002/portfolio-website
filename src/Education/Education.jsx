import "./Education.css"
import BCBookSticker from "./Stickers/BCBookSticker"
import TLBookStickers from "./Stickers/TFBookStickers"
import TopRightSticker from "./Stickers/TopRightSticker"


export default function Education({onClick}){
    return(
        <div className="education-container" onClick={onClick} >

            <div className="top-books-container">
            <TLBookStickers/>
            <TopRightSticker/>
            </div>

            <h3 className="education-text">
                Education
            </h3>

            <p className="context">
            How well am I educated ??👨‍🎓
            </p>

            <div className="bottom-book-container">
                <BCBookSticker/>
            </div>
            
        </div>
    )
}