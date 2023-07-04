import { Card, SecoundCard } from "./Card";
import { Layout } from "./Layout";
import { Link } from "react-router-dom";
import {BsArrowRightCircleFill,BsFillArrowLeftCircleFill} from "react-icons/bs"
export const CardPage = () => {
  return (
    <Layout>
        <h2>Cards</h2>
      <Card />
      <iframe title="card-title"
        src="https://carbon.now.sh/embed?bg=rgba%28211%2C219%2C227%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520Card%2520%253D%2520%28props%29%253D%253E%257B%250Aconst%2520%257Bsrc%2520%252C%2520alt%2520%252Chref%257D%2520%253D%2520props%250A%2520%2520%2520%2520return%2520%253Cdiv%2520className%253D%2522card-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%257Bsrc%2520%253F%2520src%2520%253A%2520%2522https%253A%252F%252Fimages.unsplash.com%252Fphoto-1595950653106-6c9ebd614d3a%253Fixlib%253Drb-4.0.3%2526ixid%253DM3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8fDA%25253D%2526auto%253Dformat%2526fit%253Dcrop%2526w%253D500%2526q%253D60%2522%257D%2520alt%253D%257Balt%257D%2520className%253D%2522card-image%2522%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522card-title%2522%253EMore%2520details%2520about%2520the%2520card%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%257Bhref%257D%2520className%253D%2522card-btn%2522%253ELearn%2520more%253C%252Fa%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%250A%2520%2520%2520%250A%257D"
        style={{
          width: " 1024px",
          height: "344px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <SecoundCard />
      <iframe title="card-title"
  src="https://carbon.now.sh/embed?bg=rgba%28211%2C219%2C227%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520SecoundCard%2520%2520%253D%28props%29%253D%253E%257B%250A%2520%2520%2520%2520const%2520%257Bcardcontainer%2520%252C%2520src%2520%252C%2520alt%2520%252C%2520href%257D%2520%253D%2520props%253B%250Areturn%2520%253Cdiv%2520className%253D%257B%2560card-container%2520%2524%257Bcardcontainer%257D%2560%257D%253E%250A%253Cimg%2520src%253D%257Bsrc%2520%253F%2520src%2520%253A%2522https%253A%252F%252Fimages.unsplash.com%252Fphoto-1606107557195-0e29a4b5b4aa%253Fixlib%253Drb-4.0.3%2526ixid%253DM3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%25253D%2526auto%253Dformat%2526fit%253Dcrop%2526w%253D500%2526q%253D60%2522%257D%2520alt%253D%257Balt%257D%2520className%253D%2522card-image%2522%252F%253E%250A%253Cp%2520className%253D%2522card-title%2522%253EMore%2520details%2520about%2520the%2520card%253C%252Fp%253E%250A%253Ca%2520href%253D%257Bhref%257D%2520className%253D%2522card-btn%2522%253Eselect%2520item%253C%252Fa%253E%250A%253C%252Fdiv%253E%250A%257D"
  style={{width: "1024px", height: "307px", border:"0", transform: "scale(1)", overflow:"hidden",}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
<div className="button-container">
<span>
      <Link to="/imagepage">
            <BsArrowRightCircleFill className="right-icon"/>
            </Link>
        </span>
            <span>
              <Link to="/buttonpage">
            <BsFillArrowLeftCircleFill/>
            </Link>
            </span>
</div>

    </Layout>
  );
};
