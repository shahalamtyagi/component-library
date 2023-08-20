import "./RattingCard.css"
import { AiOutlineStar} from "react-icons/ai"
import {AiFillStar} from "react-icons/ai"
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


export const AirpodCard = () =>{
    return(
        <div className="main-container">
            <div className="card-container">
                <img className="card-img" src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="watch image"/>
                <h4 className="image-name">Airpods</h4>
                <p>Men multi function Airpods</p>
                <h5 className="image-cost">$70.10</h5>
                <div className=" star image-star">
                    <i className="image-icon cheked"> <AiFillStar/></i>
                    <i className="image-icon cheked"> <AiFillStar/></i>
                    <i className="image-icon cheked"> <AiFillStar/></i>
                    <i className="image-icon cheked"> <AiFillStar/></i>
                    <i className="image-icon"> <AiFillStar/></i>
                </div>
                <div className="btn-container">
                    <button type="btn" className="btn">Add to bag </button>
                </div>
            </div>
            </div>
    )
}