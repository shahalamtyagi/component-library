import "./Layout.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="main-body-container">
      <Header />
      <div className="layout-body">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
      <Footer/>
    </div>
  );
};
