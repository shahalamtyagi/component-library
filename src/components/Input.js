import "./Input.css"
export const NameInput = (props) => {
  const {nameinputcontainer , nameinput } = props;
  return (
    <div className={`name-input-container ${nameinputcontainer}`}>
      <h2>Inputs</h2>
      <p>Enter name</p>
      <input type="text" id="name-input"name="fname"placeholder="Enter your name" />
    </div>
  );
};

export const EmailInput = (props) => {
  const {emailinputcontainer , emailinput} = props;
  return (
    <div className={`email-input-container ${emailinputcontainer}`}>
      <p>Enter email</p>
      <input type="text" id="email-input"placeholder="Enter your email" />
    </div>
  );
};

export const NumberInput = (props) => {
  const {numberinputcontainer , numberinput} = props
  return (
    <div className={`number-input-container ${numberinputcontainer}`}>
      <p>Enter number</p>
      <input type="number" id="number-input" placeholder="Enter your number" />
    </div>
  );
};








