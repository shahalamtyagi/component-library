import { Avatar } from "./Avatar";
import { Layout } from "./Layout";
import { HeartIcon } from "./Avatar";
export const AvatarPage = () => {
  return (
    <Layout>
      <div>
        <h2>Avatar</h2>
        <Avatar />
        <div>
        <iframe title="avatar-title"
  src="https://carbon.now.sh/embed?bg=rgba%28211%2C219%2C227%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520export%2520const%2520Avatar%2520%253D%2520%28props%29%253D%253E%257B%250A%2520%2520const%2520%257Bmaincontainerclass%252C%2520linkavatarclass%2520%252Chref%257D%2520%253D%2520props%253B%250A%2520%2520%2520%2520return%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560main-container%2520%2524%257Bmaincontainerclass%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%257B%2560link-avatar%2520%2524%257Blinkavatarclass%257D%2560%257D%2520href%253D%257Bhref%257D%253EDU%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%257D"
  style={{width:"799px",
  height: "233px",
  border: "0",
  transform: "scale(1)",
  overflow: "hidden",}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
        </div>
        <HeartIcon/>
        <div>
        <iframe  title="heart-avatar-title"
  src="https://carbon.now.sh/embed?bg=rgba%28211%2C219%2C227%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520export%2520const%2520HeartIcon%2520%253D%2520%28props%29%2520%253D%253E%257B%250A%2520%2520const%2520%257Bhearticonwrapperclass%2520%252C%2520hearticonavatarclass%257D%2520%253D%2520props%250A%2520%2520return%2520%253Cdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560heart-icon-wrapper%2520%2524%257Bhearticonwrapperclass%257D%2560%257D%253E%250A%2520%2520%253CAiTwotoneHeart%2520className%253D%257B%2560heart-icon-avatar%2520%2524%257Bhearticonavatarclass%257D%2560%257D%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E%250A%257D"
  style={{width:"799px",
  height: "233px",
  border: "0",
  transform: "scale(1)",
  overflow: "hidden",}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
        </div>
      </div>
    </Layout>
  );
};
