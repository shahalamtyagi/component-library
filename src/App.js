import {React} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {ButtonPage} from "./components/ButtonPage"
import { Layout } from "./components/Layout";
import {CardPage} from "./CardPage";
import { AvatarPage } from "./components/AvatarPage";
import { Navbarpage } from "./components/NavbarPage";
import { AlertPage } from "./components/AlertPage";
import {BadgePage} from "./components/BadgePage"

function App() {
  return (
  
      <Router>
        <Routes>
          <Route path="/" Component={Layout} />
          <Route path="alertpage" Component={AlertPage} />
          <Route path="avatarpage" Component={AvatarPage} />
          <Route path="badgepage" Component={BadgePage} />
          <Route path="buttonpage" Component={ButtonPage} />
          <Route path="cardpage" Component={CardPage} />
          <Route path="navbarpage" Component={Navbarpage} />
        </Routes>
      </Router> 
  );
}

export default App;

