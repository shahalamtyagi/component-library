import "./Button.css"
export const CancleBtn = (props) =>{
    const {name} = props;
 return <button className="Cancle-Btn">{name ? name : "Cancle button"}</button>
 };
  
  export const LikeBtn = (props) => {
   const {name} = props;
    return <button className="Like-Btn">{name ? name : "Like"}</button>
 };

 export const SelectBtn = (props) => {
   const {name} = props;
    return <button className="Select-Btn">{name ? name : "Select"}</button>
 };
 
 export const SearchBtn = (props) => {
   const {name} = props;
    return <button className="Search-Btn">{name ? name : "Searching"}</button>
 };

export const button = (props ) =>{
   const {name} = props;
    return <button className="Simple-Button">{name ? name : "button"}</button>
 }
//   export const RadioBtn = () => {
//     return(
//   <label>radiobutton
//     <input type="radio"/>
//   </label>
//     )
//  }