import { Avatar, ContactIcon } from "./Avatar";
import { Layout } from "./Layout";
import { HeartIcon } from "./Avatar";
export const AvatarPage = () => {
  return (
    <Layout>
      <div>
        <h2>Avatar</h2>
        <Avatar />
        <div>
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520Avatar%2520%253D%2520%28%29%253D%253E%257B%250A%2520%2520%2520%2520return%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522main-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520className%253D%2522link-avatar%2522%2520href%253D%2522%252F%2522%253EDU%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%257D"
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
        <HeartIcon/>
        <div>
        <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520export%2520const%2520HeartIcon%2520%253D%2520%28%29%2520%253D%253E%257B%250A%2520%2520return%2520%253Cdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522heart-icon-wrapper%2522%253E%250A%2520%2520%253CAiTwotoneHeart%2520className%253D%2522heart-icon-avatar%2522%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E%250A%257D%250A%250A%2520%2520return%2520go%28f%252C%2520seed%252C%2520%255B%255D%29%250A%257D"
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
      </div>
    </Layout>
  );
};
