import "./Toast.css"
import {VscCheckAll} from "react-icons/vsc"
 export const SuccessToast =(props)=>{
    const {successtoastcontainer, successcrossicon} = props
    return(
       <div class={`success-toast-container ${successtoastcontainer}`}>
       <VscCheckAll className={`success-cross-icon ${successcrossicon}`}/>
          <p>This is a success toast </p>
        </div>
    )
}