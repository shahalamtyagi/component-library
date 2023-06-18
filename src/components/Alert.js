import "./Alert.css";
import { CiCircleAlert } from "react-icons/ci";
import { MdAddAlert } from "react-icons/md";

export const AlertCircle = () => {
  return (
    <div>
      <h2>Alert</h2>
      <div className="alert-circle-container">
        <CiCircleAlert className="alert-circle-image" />
      </div>
    </div>
  );
};

export const AddAlert = () => {
  return (
    <div className="add-alert-container  ">
      <MdAddAlert className="add-alert-image" />
    </div>
  );
};
