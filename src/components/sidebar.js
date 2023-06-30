import "./Sidebar.css";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <h2>components</h2>
      <Link className="sidebar-links" to="/alertpage">
        Alert
      </Link>
      <Link className="sidebar-links" to="/avatarpage">
        Avatar
      </Link>
      <Link className="sidebar-links" to="/badgepage">
        Badge
      </Link>

      <Link className="sidebar-links" to="/buttonpage">
        Button
      </Link>
      <Link className="sidebar-links" to="/cardpage">
        Card
      </Link>

      <Link className="sidebar-links" to="/imagepage">
        Image
      </Link>
      <Link className="sidebar-links" to="/inputpage">
        Input
      </Link>
      <Link className="sidebar-links" to="/listpage">
        List
      </Link>
      <Link className="sidebar-links" to="/modalpage">
        Modal
      </Link>
      <Link className="sidebar-links" to="/navbarpage">
        Navbar
      </Link>
      <Link className="sidebar-links" to="/rattingcardpage">
        Rating Card
      </Link>
      <Link className="sidebar-links" to="/toastpage">
        Toast
      </Link>
    </div>
  );
};
