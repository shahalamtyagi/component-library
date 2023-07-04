import {React} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {ButtonPage} from "./components/ButtonPage"
import { Layout } from "./components/Layout";
import {CardPage} from "./components/CardPage";
import { AvatarPage } from "./components/AvatarPage";
import { Navbarpage } from "./components/NavbarPage";
import { AlertPage } from "./components/AlertPage";
import {BadgePage} from "./components/BadgePage";
import {ImagePage} from "./components/ImagePage";
import {InputPage} from "./components/InputPage";
import {ListPage} from "./components/ListPage";
import { ModalPage } from "./components/ModalPage";
import { ToastPage } from "./components/ToastPage";
import { RattingCardPage } from "./components/RattingCardPage";

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
          <Route path="imagepage" Component={ImagePage} />
          <Route path="inputpage" Component={InputPage} />
          <Route path="listpage" Component={ListPage} />
          <Route path="modalpage" Component={ModalPage} />
          <Route path="navbarpage" Component={Navbarpage} />
          <Route path="rattingcardpage" Component={RattingCardPage}/>
         <Route path="toastpage" Component={ToastPage} />
        </Routes>
      </Router> 
  );
}

export default App;

