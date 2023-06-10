import { AvatarPage } from "./AvatarPage";
import { InputPage } from "./InputPage";
import { SearchBtn } from "./Button";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = () => {
  return (
    <div className="main-body-container">
      {/* in header.js */}
      <Header />
      {/* in sidebar.js */}
      <div className="main-left-right-container">
        <div className="layout-left-container">
          <h3>components</h3>
          <a href="/" className="components-link" >
            Avatar
          </a>
          <a href="/" className="components-link">
            Badge
          </a>
          <a href="/" className="components-link" >
            Button
          </a>
          <a href="/" className="components-link" >
            Card
          </a>
          <a href="/" className="components-link" >
            Image
          </a>
          <a href="/"  className="components-link" >
            Input
          </a>
          <a className="components-link" href="/">
            list
          </a>
          <a href="/" className="components-link">
            avatar
          </a>
        </div>
        <div className="layout-right-container">
          <h2>Components</h2>
          <div>
            

          </div>
          
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520button%2520%253D%2520%28props%2520%29%2520%253D%253E%257B%250A%2520%2520%2520%2520return%2520%253Cbutton%2520className%253D%2522Simple-Button%2522%253E%257Bprops.name%257D%253C%252Fbutton%253E%250A%2520%257D"
            style={{
              width: " 706px",
              height: " 242px",
              border: "0",
              transform: " scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>

      {/* in footer.js */}
      <Footer />
      <InputPage/>
      <AvatarPage/>
    </div>
  );
};
