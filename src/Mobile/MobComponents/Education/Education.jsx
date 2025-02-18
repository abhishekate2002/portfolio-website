import "./Education.css"
// import BCBookSticker from "../../../Education/Stickers/BCBookSticker"
// import TLBookStickers from "../../../Education/Stickers/TFBookStickers"
import TLBookStickerMobile from "../../../assets/bookStickerOnTopLeft.svg"
// import TopRightSticker from "../../../Education/Stickers/TopRightSticker"
import TLRightStickerMobile from "../../../assets/TRBookSticker.svg"
import bcbookstickerMobile from "../../../../src/assets/BCBookSticker.svg"


function TopRightStickerMobile(){
    return(
        <div className="mob-img-container-TPR">
            <img className="mob-top-right" src={TLRightStickerMobile} alt="TopRight" />
        </div>
    )
}

function TLBookStickersMob(){
    
    return(
        <div className="mob-img-container">
            <img  className="mob-top-left" src={TLBookStickerMobile} alt="top-left-sticker" />
        </div>
        
    )
}

function BCBookStickerMob(){
    
    return(
        <img className="mob-bottom-book" src={bcbookstickerMobile} alt="bottom sticker" />
    )
}


export default function Education(){
    return(
        <div className="mob-education-container">

            <div className="mob-top-books-container">
            {/* <TLBookStickers /> */}
            <TLBookStickersMob/>
            {/* <TopRightSticker/> */}
            <TopRightStickerMobile/>
            </div>

            <h3 className="mob-education-text">
                Education
            </h3>

            <p className="mob-context">
            How well am I educated ??👨‍🎓
            </p>

            <div className="mob-bottom-book-container">
                <BCBookStickerMob/>
            </div>
            
        </div>
    )
}