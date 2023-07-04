import { CancleBtn, LikeBtn, SearchBtn, SelectBtn } from "./Button";
import { Layout } from "./Layout";
import { Link } from "react-router-dom";
import {BsArrowRightCircleFill,BsFillArrowLeftCircleFill} from "react-icons/bs"
export const ButtonPage = () => {
  return (
    <Layout>
      <CancleBtn />
      <div className="button-iframe">
        <iframe title="cancle-btn-title"
          src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520CancleBtn%2520%253D%2520%28props%29%2520%253D%253E%257B%250A%2520%2520%2520%2520const%2520%257Bname%257D%2520%253D%2520props%253B%250A%2520return%2520%253Cbutton%2520className%253D%2522Cancle-Btn%2522%253E%257Bname%2520%253F%2520name%2520%253A%2520%2522Cancle%2520button%2522%257D%253C%252Fbutton%253E%250A%2520%257D%253B"
          style={{
            width: "799px",
            height: "233px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <LikeBtn />
      <div className="button-iframe">
            <iframe title="likebtn-title"
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520export%2520const%2520LikeBtn%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520%2520const%2520%257Bname%257D%2520%253D%2520props%253B%250A%2520%2520%2520%2520return%2520%253Cbutton%2520className%253D%2522Like-Btn%2522%253E%257Bname%2520%253F%2520name%2520%253A%2520%2522Like%2522%257D%253C%252Fbutton%253E%250A%2520%257D%253B"
        style={{
          width: "799px",
          height: "233px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      </div>
      <SelectBtn />
      <div className="button-iframe">
      <iframe title="select-btn-title "
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520SelectBtn%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520%2520const%2520%257Bname%257D%2520%253D%2520props%253B%250A%2520%2520%2520%2520return%2520%253Cbutton%2520className%253D%2522Select-Btn%2522%253E%257Bname%2520%253F%2520name%2520%253A%2520%2522Select%2522%257D%253C%252Fbutton%253E%250A%2520%257D%253B"
  style={{
    width: "799px",
    height: "233px",
    border: "0",
    transform: "scale(1)",
    overflow: "hidden",
  }}
  sandbox="allow-scripts allow-same-origin">
</iframe>
      </div>
      <SearchBtn />
      <div className="button-iframe">
      <iframe title="search-btn-title"
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520SearchBtn%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520%2520const%2520%257Bname%257D%2520%253D%2520props%253B%250A%2520%2520%2520%2520return%2520%253Cbutton%2520className%253D%2522Search-Btn%2522%253E%257Bname%2520%253F%2520name%2520%253A%2520%2522Searching%2522%257D%253C%252Fbutton%253E%250A%2520%257D%253B"
  style={{
    width: "799px",
    height: "233px",
    border: "0",
    transform: "scale(1)",
    overflow: "hidden",
  }}
  sandbox="allow-scripts allow-same-origin">
</iframe>
      </div>
      <div className="button-container">
      <span>
      <Link to="/cardpage">
            <BsArrowRightCircleFill className="right-icon"/>
            </Link>
        </span>
            <span>
              <Link to="/badgepage">
            <BsFillArrowLeftCircleFill/>
            </Link>
            </span>
      </div>
      
    </Layout>
  );
};
