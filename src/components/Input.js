export const Inputs = () => {
  return (
    <div>
      <label for="fname">FIRST NAME:</label>
      <br />
      <input type="text" id="fname" name="fname" />
      <br />
      <label for="lname">LAST NAME:</label>
      <br />
      <input type="text" id="lname" name="lname" />
      <br />
      <label for="num">ENTER YOUR NUMBER :</label>
      <br />
      <input type="number" id="num" name="num" />
      <br />
      <input type="submit" value="Submit" />
      <hr />
    </div>
  );
};
