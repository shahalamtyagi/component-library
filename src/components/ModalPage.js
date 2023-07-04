import { Layout } from "./Layout"
import { Modal } from "./Modal"
import { Link } from "react-router-dom";
import {BsArrowRightCircleFill,BsFillArrowLeftCircleFill} from "react-icons/bs"
export const ModalPage = ()=>{
    return(
        <Layout>
            <div>
                <Modal/>
                <div>
                <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28211%2C219%2C227%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520Modal%2520%253D%2520%28props%29%253D%253E%257B%250A%2520const%2520%257Bmodalcontaier%257D%2520%253D%2520props%253B%250A%2520%2520%2520%2520return%2520%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560modal-container%2520%2524%257Bmodalcontaier%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CRxCross2%2520className%253D%2522cross-icon%2522%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522modal-input-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522name%2522%2520className%253D%2522modal-name-label%2522%2520placeholder%253D%2522Enter%2520Your%2520Name%2522%253ENAME%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522text%2522%2520className%253D%2522modal-name-input%2522%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522email%2522%2520className%253D%2522modal-emial-label%2522%2520placeholder%253D%2522Enter%2520Your%2520Email%2522%253EEMAIL%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522text%2522%2520className%253D%2522modal-mail-input%2522%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522modal-btn%2520%2522%253Echeck%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%29%250A%257D"
  style={{width:" 1018px", height: "437px", border:"0", transform: "scale(1)", overflow:"hidden",}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
                </div>
            </div>
            <div className="button-container">
            <span>
      <Link to="/navbarpage">
            <BsArrowRightCircleFill className="right-icon"/>
            </Link>
        </span>
            <span>
              <Link to="/listpage">
            <BsFillArrowLeftCircleFill/>
            </Link>
            </span>
            </div>
          
        </Layout>
    )
}