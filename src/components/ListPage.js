import { Layout } from "./Layout";
import { OrderList, UnorderList } from "./List";

export const ListPage = () => {
  return (
    <Layout>
      <div>
        <h2>Lists</h2>
        <UnorderList />
        <div>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28211%2C219%2C227%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520UnorderList%2520%253D%2520%28props%29%253D%253E%257B%250A%2520%2520%2520%2520const%2520%257BUnorderlistwrapper%257D%2520%253D%2520props%253B%250A%2520%2520%2520%2520return%2520%253Cdiv%2520className%253D%2520%257B%2560unorderlist-wrapper%2520%2524%257BUnorderlistwrapper%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cul%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522unorderlist-Item%2522%253EHTML%253C%252Fli%253E%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522unorderlist-Item%2522%253ECSS%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522unorderlist-Item%2522%253EJAVA%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522unorderlist-Item%2522%253ECCC%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%257D%250A"
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
        <OrderList />
        <div>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28211%2C219%2C227%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520OrderList%2520%253D%2520%28props%29%253D%253E%257B%250A%2520%2520%2520%2520const%2520%257Borderlistwrapper%2520%257D%2520%253D%2520props%253B%250A%2520%2520%2520%2520return%2520%253Cdiv%2520className%253D%257B%2560orderlist-wrapper%2520%2524%257Borderlistwrapper%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Col%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522orderlist-item%2522%253ESEARCHING%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522orderlist-item%2522%253EJAVA%2520SCRIPT%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522orderlist-item%2522%253EPROGRAMING%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522orderlist-item%2522%253EHTML%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fol%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%257D%250A"
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
      </div>
    </Layout>
  );
};
