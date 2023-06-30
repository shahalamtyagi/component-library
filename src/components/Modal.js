import "./Modal.css"
import {RxCross2} from "react-icons/rx"
export const Modal = (props)=>{
 const {modalcontaier} = props;
    return (
        <div className={`modal-container ${modalcontaier}`}>
            <RxCross2 className="cross-icon"/>
            <div className="modal-input-container">
            <label for="name" className="modal-name-label" placeholder="Enter Your Name">NAME</label>
            <input type="text" className="modal-name-input"/>
            <label for="email" className="modal-emial-label" placeholder="Enter Your Email">EMAIL</label>
            <input type="text" className="modal-mail-input"/>
           
            </div>
            <button className="modal-btn ">check</button>
           
        </div>
    )
}