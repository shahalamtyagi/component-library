import "./List.css"
 export const UnorderList = ()=>{
    return <div className= "unorderlist-wrapper">
        <ul>
            <li className="unorderlist-Item">HTML</li>  
            <li className="unorderlist-Item">CSS</li>
            <li className="unorderlist-Item">JAVA</li>
            <li className="unorderlist-Item">CCC</li>
        </ul>
    </div>
}

 export const OrderList = ()=>{
    return <div className="orderlist-wrapper">
        <ol>
            <li className="orderlist-item">SEARCHING</li>
            <li className="orderlist-item">JAVA SCRIPT</li>
            <li className="orderlist-item">PROGRAMING</li>
            <li className="orderlist-item">HTML</li>
        </ol>
    </div>
}