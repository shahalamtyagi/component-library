import { Layout } from "./Layout"
import { SuccessToast } from "./Toast"
import { Link } from "react-router-dom";
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
 export const ToastPage = ()=>{
    return(
        <Layout>
            <div>
               <SuccessToast/>
               <div className="iframe-wrapper">
               <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28211%2C219%2C227%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520export%2520const%2520SuccessToast%2520%253D%28props%29%253D%253E%257B%250A%2520%2520%2520%2520const%2520%257Bsuccesstoastcontainer%252C%2520successcrossicon%257D%2520%253D%2520props%250A%2520%2520%2520%2520return%28%250A%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%257B%2560success-toast-container%2520%2524%257Bsuccesstoastcontainer%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%253CVscCheckAll%2520className%253D%257B%2560success-cross-icon%2520%2524%257Bsuccesscrossicon%257D%2560%257D%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EThis%2520is%2520a%2520success%2520toast%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%29%250A%257D"
  style={{
    width: "968px",
    height: "307px",
    border: "0",
    transform: "scale(1)",
    overflow: "hidden",
}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
               </div>
            </div>

            <div className="toast-previous-btn">
            <Link to="/rattingcardpage">
            <BsFillArrowLeftCircleFill/>
            </Link>
            </div>
             
            
        </Layout>
    )
}