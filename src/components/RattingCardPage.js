import { Layout } from "./Layout"
import { RattingCard } from "./RattingCard"
import { Link } from "react-router-dom";
import {BsArrowRightCircleFill,BsFillArrowLeftCircleFill} from "react-icons/bs"
 export const RattingCardPage = ()=>{
    return (
        <Layout>
            <div className="ratting-card-main">
                <RattingCard/>
                <div className="itrame-wrapper">
                <iframe title="ratting-card"
  src="https://carbon.now.sh/embed?bg=rgba%28211%2C219%2C227%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520RattingCard%2520%253D%2520%28props%29%253D%253E%257B%250A%2520%2520%2520%2520const%2520%257Bimgwrapper%252C%2520src%2520%252C%2520alt%2520%252Csubmitbtnclass%257D%2520%253D%2520props%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520return%2520%28%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253ERatting%2520card%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522rattingcard-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560img-wrapper%2520%2524%257Bimgwrapper%257D%2560%257D%253E%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520%2520className%253D%2522ratting-card-img%2522%2520src%253D%2520%257Bsrc%2520%253F%2520src%2520%253A%2520%2522https%253A%252F%252Frukminim1.flixcart.com%252Fimage%252F312%252F312%252Fxif0q%252Fshoe%252Fs%252Fy%252F8%252F-original-imaggcaxucctuzp8.jpeg%253Fq%253D70%2522%257D%2520alt%253D%257Balt%257D%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cul%2520className%253D%2522star-icon-wrapper%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522star-icon-list%2522%253E%253CAiOutlineStar%252F%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522star-icon-list%2522%253E%253CAiOutlineStar%252F%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522star-icon-list%2522%253E%253CAiOutlineStar%252F%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522star-icon-list%2522%253E%253CAiOutlineStar%252F%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522star-icon-list%2522%253E%253CAiOutlineStar%252F%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%257B%2560submit-btn%2520%2524%257Bsubmitbtnclass%257D%2560%257D%253Esubmit%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%250A%257D"
  style={{
    width: "968px",
    height: "307px",
    border: "0",
    transform: "scale(1)",
    overflow: "hidden",
}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
                </div>
            </div>
            <div className="button-container">
            <span>
      <Link to="/toastpage">
            <BsArrowRightCircleFill className="right-icon"/>
            </Link>
        </span>
            <span>
              <Link to="/navbarpage">
            <BsFillArrowLeftCircleFill/>
            </Link>
            </span>
            </div>
            
        </Layout>
    )
}