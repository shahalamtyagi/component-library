import "./Alert.css";
import { CiCircleAlert } from "react-icons/ci";
import { MdAddAlert } from "react-icons/md";

export const AlertCircle = ( props ) => {
   const {alertcirclecontainer , alertcircleimage} = props;
  return (
    <div>
      <h2>Alert</h2>
      <div className={`alert-circle-container ${alertcirclecontainer}`}>
        <CiCircleAlert className={`alert-circle-image ${alertcircleimage}`} />
      </div>
    </div>
  );
};

export const AddAlert = (props) => {
  const {addalertcontainer , addalertimage} = props;
  return (
    <div className={`add-alert-container ${addalertcontainer}`}>
      <MdAddAlert className={`add-alert-image ${addalertimage}`} />
    </div>
  );
};
