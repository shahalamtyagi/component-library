import {React} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ButtonPage } from "./components/ButtonPage";
import { Layout } from "./components/layout";
import { Card } from "./Card";

function App() {
  return (
    <div>
      <Card/>
    </div>
      // <Router>
      //   <Routes>
      //     <Route path="/" Component={Layout} />
      //     <Route path="/buttonpage" Component={ButtonPage}/>
      //   </Routes>
      // </Router> 
  );
}

export default App;

