import "./Input.css"
export const NameInput = () => {
  return (
    <div className="name-input-container">
      <h2>Inputs</h2>
      <p>Enter name</p>
      <input type="text" id="name-input" name="fname"placeholder="Enter your name" />
    </div>
  );
};

export const EmailInput = () => {
  return (
    <div className="email-input-container">
      <p>Enter email</p>
      <input type="text" id="email-input"placeholder="Enter your email" />
    </div>
  );
};

export const NumberInput = () => {
  return (
    <div className="number-input-container">
      <p>Enter number</p>
      <input type="number" id="number-input"placeholder="Enter your number" />
    </div>
  );
};








