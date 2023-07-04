import "./RattingCard.css"
import { AiOutlineStar} from "react-icons/ai"
export const RattingCard = (props)=>{
    const {imgwrapper, src , alt ,submitbtnclass} = props;
        return (<div>
            <h2>Ratting card</h2>
            <div className="rattingcard-wrapper">
            <div className={`img-wrapper ${imgwrapper}`}> 
            <img  className="ratting-card-img" src= {src ? src : "https://rukminim1.flixcart.com/image/312/312/xif0q/shoe/s/y/8/-original-imaggcaxucctuzp8.jpeg?q=70"} alt={alt}/>
            </div>
            <ul className="star-icon-wrapper">
                <li className="star-icon-list"><AiOutlineStar/></li>
                <li className="star-icon-list"><AiOutlineStar/></li>
                <li className="star-icon-list"><AiOutlineStar/></li>
                <li className="star-icon-list"><AiOutlineStar/></li>
                <li className="star-icon-list"><AiOutlineStar/></li>
            </ul>
            <button className={`submit-btn ${submitbtnclass}`}>submit</button>
        </div>
        </div>
        )
        
}