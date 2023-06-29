import "./Toast.css"
import {RxCross2} from "react-icons/rx"
 export const SuccessToast =()=>{
    return(
        <div>
            
       <div class="success-toast-container">
       <RxCross2 className="success-cross-icon"/>
          <p>This is a sucess toast </p>
        </div>
      
        </div>
    )
}