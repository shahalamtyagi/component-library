 import "./Avatar.css"
 import {AiTwotoneHeart} from "react-icons/ai"
 export const Avatar = (props)=>{
  const {maincontainerclass, linkavatarclass ,href} = props;
    return <div>
        <div className={`main-container ${maincontainerclass}`}>
          <a className={`link-avatar ${linkavatarclass}`} href={href}>DU</a>
        </div>
    </div>

}

 export const HeartIcon = (props) =>{
  const {hearticonwrapperclass , hearticonavatarclass} = props
  return <div>
    <div className={`heart-icon-wrapper ${hearticonwrapperclass}`}>
  <AiTwotoneHeart className={`heart-icon-avatar ${hearticonavatarclass}`}/>
    </div>
  </div>
}