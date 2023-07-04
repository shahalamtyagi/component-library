import { Layout } from "./Layout";
import { HeaderNavbar, Navbar } from "./Nav";
import { Link } from "react-router-dom";
import {BsArrowRightCircleFill,BsFillArrowLeftCircleFill} from "react-icons/bs"
export const Navbarpage = () => {
  return (
    <Layout>
      <h2>Navbars</h2>
      <Navbar />
      <div className="iframe-wrapper">
        <iframe title="nav-bar-title"
          src="https://carbon.now.sh/embed?bg=rgba%28211%2C219%2C227%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520function%2520Navbar%28props%29%2520%257B%250A%2520%2520const%2520%257B%2520navigationbarclass%252C%2520navlinkclass%252C%2520href%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560navigation-bar%2520%2524%257Bnavigationbarclass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522navlink-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%2520className%253D%2522nav-brand%2522%253EZOO%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522link-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%257Bhref%257D%2520className%253D%257B%2560nav-link%2520%2524%257Bnavlinkclass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520HOME%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%257Bhref%257D%2520className%253D%257B%2560nav-link%2520%2524%257Bnavlinkclass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520ABOUT%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%257Bhref%257D%2520className%253D%257B%2560nav-link%2520%2524%257Bnavlinkclass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520PROJECT%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%257Bhref%257D%2520className%253D%257B%2560nav-link%2520%2524%257Bnavlinkclass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520SIGN%2520IN%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D"
          style={{width: "757px",
          height: "344px",
          border: "0",
          transform: " scale(1)",
          overflow: "hidden",}}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <HeaderNavbar />
      <div className="iframe-wrapper">
      <iframe title="header-navbar-title"
  src="https://carbon.now.sh/embed?bg=rgba%28211%2C219%2C227%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520HeaderNavbar%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257Bheadernavbarcontainer%2520%252C%2520href%2520%257D%2520%253D%2520props%253B%250A%2520%2520%2520%2520return%2520%28%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560header-navbar-container%2520%2524%257Bheadernavbarcontainer%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253EUI%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522header-navbar-container-link%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%2520%2522header-navbar-link%2522href%253D%257Bhref%257D%253Ecomponents%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%2520%2522header-navbar-link%2522href%253D%257Bhref%257D%253Einstall%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%29%253B%250A%2520%2520%257D%253B"
  style={{width: "757px",
  height: "344px",
  border: "0",
  transform: " scale(1)",
  overflow: "hidden",}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
      </div>
      <div className="button-container">
      <span>
      <Link to="/rattingcardpage">
            <BsArrowRightCircleFill className="right-icon"/>
            </Link>
        </span>
            <span>
              <Link to="/modalpage" >
            <BsFillArrowLeftCircleFill className="left-icon"/>
            </Link>
            </span>
      </div>
     
    </Layout>
  );
};
