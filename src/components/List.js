import "./List.css"
 export const UnorderList = (props)=>{
    const {Unorderlistwrapper} = props;
    return <div className= {`unorderlist-wrapper ${Unorderlistwrapper}`}>
        <ul>
            <li className="unorderlist-Item">HTML</li>  
            <li className="unorderlist-Item">CSS</li>
            <li className="unorderlist-Item">JAVA</li>
            <li className="unorderlist-Item">CCC</li>
        </ul>
    </div>
}

 export const OrderList = (props)=>{
    const {orderlistwrapper } = props;
    return <div className={`orderlist-wrapper ${orderlistwrapper}`}>
        <ol>
            <li className="orderlist-item">SEARCHING</li>
            <li className="orderlist-item">JAVA SCRIPT</li>
            <li className="orderlist-item">PROGRAMING</li>
            <li className="orderlist-item">HTML</li>
        </ol>
    </div>
}