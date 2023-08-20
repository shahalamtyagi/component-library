import "./Nav.css";
export function Navbar(props) {
  const { navigationbarclass, navlinkclass, href} = props;
  return (
    <div>
      <div className={`navigation-bar ${navigationbarclass}`}>
        <div className="navlink-wrapper">
          <h2 className="nav-brand">ZOO</h2>
          <div className="link-container">
            <a href={href} className={`nav-link ${navlinkclass}`}>
              HOME
            </a>
            <a href={href} className={`nav-link ${navlinkclass}`}>
              ABOUT   
            </a>
            <a href={href} className={`nav-link ${navlinkclass}`}>
              PROJECT
            </a>
            <a href={href} className={`nav-link ${navlinkclass}`}>
              SIGN IN
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export const HeaderNavbar = (props) => {
  const {headernavbarcontainer , href } = props;
    return (
      <div className={`header-navbar-container ${headernavbarcontainer}`}>
        <h1>UI</h1>
        <div className="header-navbar-container-link">
          <a className= "header-navbar-link"href={href}>components</a>
          <a className= "header-navbar-link"href={href}>install</a>
        </div>
      </div>
    );
  };
