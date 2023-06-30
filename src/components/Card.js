import "./Card.css"
export const Card = (props)=>{
const {src , alt ,href} = props
    return <div className="card-container">
        <img src={src ? src : "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"} alt={alt} className="card-image"/>
        <p className="card-title">More details about the card</p>
        <a href={href} className="card-btn">Learn more</a>
    </div>
   
   
}

 export const SecoundCard  =(props)=>{
    const {cardcontainer , src , alt , href} = props;
return <div className={`card-container ${cardcontainer}`}>
<img src={src ? src :"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"} alt={alt} className="card-image"/>
<p className="card-title">More details about the card</p>
<a href={href} className="card-btn">select item</a>
</div>
}

