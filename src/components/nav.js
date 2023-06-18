import "./Nav.css";
export function Navbar() {
  return (
    <div>
      <div className="navigation-bar">
        <div className="navlink-wrapper">
          <h2 className="nav-brand">ZOO</h2>
          <div className="link-container">
            <a href="/#" className="nav-link">
              HOME
            </a>
            <a href="/" className="nav-link">
              ABOUT
            </a>
            <a href="/" className="nav-link">
              PROJECT
            </a>
            <a href="/" className="nav-link">
              SIGN IN
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export const HeaderNavbar = () => {
    return (
      <div className="header-navbar-container">
        <h1>UI</h1>
        <div className="header-navbar-container-link">
          <a className= "header-navbar-link"href="/">components</a>
          <a className= "header-navbar-link"href="/">install</a>
        </div>
      </div>
    );
  };
