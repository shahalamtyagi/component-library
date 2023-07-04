import { EmailInput, NameInput, NumberInput } from "./Input";
import { Layout } from "./Layout";
import { Link } from "react-router-dom";
import {BsArrowRightCircleFill,BsFillArrowLeftCircleFill} from "react-icons/bs"
export const InputPage = () => {
  return (
    <Layout>
      <div>
        <NameInput />
        <div className="iframe-wrapper">
          <iframe
            title="input-title"
            src="https://carbon.now.sh/embed?bg=rgba%28211%2C219%2C227%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520NameInput%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257Bnameinputcontainer%2520%252C%2520nameinput%2520%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560name-input-container%2520%2524%257Bnameinputcontainer%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%253Ch2%253EInputs%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%253EEnter%2520name%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522text%2522%2520id%253D%257B%2560name-input%2520%2524%257Bnameinput%257D%2560%257Dname%253D%2522fname%2522placeholder%253D%2522Enter%2520your%2520name%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "968px",
              height: "307px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <EmailInput />
        <div className="iframe-wrapper">
          <iframe title="email-title"
            src="https://carbon.now.sh/embed?bg=rgba%28211%2C219%2C227%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520EmailInput%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257Bemailinputcontainer%2520%252C%2520emailinput%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560email-input-container%2520%2524%257Bemailinputcontainer%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%253EEnter%2520email%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522text%2522%2520id%253D%257B%2560email-input%2520%2524%257Bemailinput%257D%2560%257Dplaceholder%253D%2522Enter%2520your%2520email%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
            style={{
              width: "892px",
              height: " 289px",
              border: "0",
              transform: " scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <NumberInput />
        <div className="iframe-wrapper">
          <iframe title="number-title"
            src="https://carbon.now.sh/embed?bg=rgba%28211%2C219%2C227%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520NumberInput%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257Bnumberinputcontainer%2520%252C%2520numberinput%257D%2520%253D%2520props%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560number-input-container%2520%2524%257Bnumberinputcontainer%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%253EEnter%2520number%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522number%2522%2520id%253D%257B%2560number-inputplaceholder%2520%2524%257Bnumberinput%257D%2560%257Dplaceholder%253D%2522Enter%2520your%2520number%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B%250A"
            style={{
              width: "1024px",
              height: "326px",
              border: "0",
              transform: " scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
      <div className="button-container">
      <span>
      <Link to="/listpage">
            <BsArrowRightCircleFill className="right-icon"/>
            </Link>
        </span>
            <span>
              <Link to="/imagepage">
            <BsFillArrowLeftCircleFill/>
            </Link>
            </span>
      </div>
      
    </Layout>
  );
};
