// import logo from './logo.svg';
import { CancleBtn, LikeBtn, SearchBtn, SelectBtn } from './components/Button';
import './App.css';
import { Navbar, } from './components/nav';
import "./components/nav.css";
import { Avatar } from './components/Avatar';
import './components/avatar.css';
import './components/layout.css';
import { Layout } from './components/layout';
import { InputPage } from './components/InputPage';
import { AvatarPage } from './components/AvatarPage';
function App() {
  return (

    <div className="App">
      {/* <p>SIMPLE BUTTON</p>
      <SearchBtn name="Search"/>
      <SelectBtn name="Select"/>
      <LikeBtn name="Like"/>
      <CancleBtn name="Cancle"/>
      <hr/>

     <p>INPUTS</p>
     <label for="fname">FIRST NAME:</label><br/>
  <input type="text" id="fname" name="fname" /><br/>
  <label for="lname">LAST NAME:</label><br/>
  <input type="text" id="lname" name="lname" /><br/>
  <label for="num">ENTER YOUR NUMBER :</label><br/>
  <input type="number" id="num" name="num" /><br/>
  <input type="submit" value="Submit"/>
  <hr/>
  <p>NAVIGATION BAR</p>
<Navbar/>
<hr></hr>
<button/>
<Avatar/> */}
<><Layout/>
<InputPage/>
<AvatarPage/></>





    </div>
    
  );
}

export default App;
