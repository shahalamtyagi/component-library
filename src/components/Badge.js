import "./Badge.css";
import { GiPoliceBadge } from "react-icons/gi";
import { DiGithubBadge } from "react-icons/di";
import {BiMessageDots} from "react-icons/bi";
import {BsFacebook} from "react-icons/bs"


export const MessageBadge = (props)=>{
const {Messagebadgewrapperclass} = props;
  return(
    <div value="30" className={`message-badge-wrapper ${Messagebadgewrapperclass}`}>
    <BiMessageDots className="message-badge-icon"/>
    </div>
  )
}

export const FacebookBadge = (props)=>{
  const {facebookbadgewrapper} = props;
  return(
    <div FacebookBadgeValue="43"className={`facebook-badge-wrapper ${facebookbadgewrapper}`}>
      <BsFacebook className="facebook-badge-icon"/>
    </div>
  )
}