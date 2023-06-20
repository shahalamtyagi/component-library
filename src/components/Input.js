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

// export const DateInput = () => {
//   return (
//     <div className="date-input-container">
//       <h2>Inputs</h2>
//       <p>Enter Date</p>
//       <input type="date" id="fname" name="fname"placeholder="Enter your name" />
//     </div>
//   );
// };










{/* <br />
      <label for="lname">LAST NAME:</label>
      <br />
      <input type="text" id="lname" name="lname" />
      <br />
      <label for="num">ENTER YOUR NUMBER :</label>
      <br />
      <input type="number" id="num" name="num" />
      <br />
      <input type="submit" value="Submit" />
      <hr /> */}