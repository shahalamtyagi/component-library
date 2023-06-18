 import "./Avatar.css"
 import {AiTwotoneHeart} from "react-icons/ai"
 export const Avatar = ()=>{
    return <div>
        <div className="main-container">
          <a className="link-avatar" href="/">DU</a>
        </div>
    </div>

}

 export const HeartIcon = () =>{
  return <div>
    <div className="heart-icon-wrapper">
  <AiTwotoneHeart className="heart-icon-avatar"/>
    </div>
  </div>
}

// export const ContactIcon = ()=>{
//   return <div>
//      <div class="contact-icon-wrapper">
//      <BiSolidContact/>
//         </div>
//   </div>
// }
