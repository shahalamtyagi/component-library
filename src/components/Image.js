import "./Image.css"
export const SimpleImage= (props)=>{
const {imagecontainer , imgclass , src , alt} = props;
    return (
        <div className={`image-container ${imagecontainer}`}>
            <h2 className="image-headding">Responsive Image</h2>
            <img className ={`img ${imgclass}`} src={src ? src : "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2ltcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"} alt={alt}/>
        </div>
    )
} 

 export const ArchitectureImage = ()=>{
    return(
        <div>
            <img className="architecture-image"src="https://images.unsplash.com/photo-1686345233737-8f218f94f44f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/"/>
        </div>
    )
}