import { Layout } from "./Layout"
import { AddAlert, AlertCircle } from "./Alert"
export const AlertPage =()=>{
    return (
        <Layout>
        <div >
        <AlertCircle/>
        <div>
        <iframe title="alertpage"
  src="https://carbon.now.sh/embed?bg=rgba%28211%2C219%2C227%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520AlertCircle%2520%253D%2520%28%2520props%2520%29%2520%253D%253E%2520%257B%250A%2520%2520%2520const%2520%257Balertcirclecontainer%2520%252C%2520alertcircleimage%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Ch2%253EAlert%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560alert-circle-container%2520%2524%257Balertcirclecontainer%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253CCiCircleAlert%2520className%253D%257B%2560alert-circle-image%2520%2524%257Balertcircleimage%257D%2560%257D%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
  style={{width:"799px",
  height: "233px",
  border: "0",
  transform: "scale(1)",
  overflow: "hidden",}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
<AddAlert/>
<div>
<iframe title="addalert"
  src="https://carbon.now.sh/embed?bg=rgba%28211%2C219%2C227%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520AddAlert%2520%253D%2520%28props%29%2520%253D%253E%2520%257B%250A%2520%2520const%2520%257Baddalertcontainer%2520%252C%2520addalertimage%257D%2520%253D%2520props%253B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560add-alert-container%2520%2524%257Baddalertcontainer%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%253CMdAddAlert%2520className%253D%257B%2560add-alert-image%2520%2524%257Baddalertimage%257D%2560%257D%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B"
  style={{width:"799px",
  height: "233px",
  border: "0",
  transform: "scale(1)",
  overflow: "hidden",}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
</div>
        </div>
        </div>
           
        </Layout>
    )
}