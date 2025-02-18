import TLBSticker from "../../assets/bookStickerOnTopLeft.svg"
import "./TFBookStickers.css"
export default function TLBookStickers(){
    
    return(
        <div className="img-container">
            <img  className="top-left" src={TLBSticker} alt="top-left-sticker" />
        </div>
        
    )
}