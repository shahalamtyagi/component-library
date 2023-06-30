import { FacebookBadge, GithubBadge, MessageBadge, PoliceBadge } from "./Badge";
import { Layout } from "./Layout";

export const BadgePage = () => {
  return (
    <Layout>
      <div>
        <h2>Badges</h2>
        <MessageBadge />
        <div>
          <iframe
            title="message-badge"
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520MessageBadge%2520%253D%2520%28props%29%253D%253E%257B%250Aconst%2520%257BMessagebadgewrapperclass%257D%2520%253D%2520props%253B%250A%2520%2520return%28%250A%2520%2520%2520%2520%253Cdiv%2520value%253D%252230%2522%2520className%253D%257B%2560message-badge-wrapper%2520%2524%257BMessagebadgewrapperclass%257D%2560%257D%253E%250A%2520%2520%2520%2520%253CBiMessageDots%2520className%253D%2522message-badge-icon%2522%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%250A%257D"
            style={{
              width: "917px",
              height: "270px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
          <FacebookBadge />
          <div>
            <iframe title="facebookBadge"
              src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520FacebookBadge%2520%253D%2520%28props%29%253D%253E%257B%250A%2520%2520const%2520%257Bfacebookbadgewrapper%257D%2520%253D%2520props%253B%250A%2520%2520return%28%250A%2520%2520%2520%2520%253Cdiv%2520FacebookBadgeValue%253D%252243%2522className%253D%257B%2560facebook-badge-wrapper%2520%2524%257Bfacebookbadgewrapper%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%253CBsFacebook%2520className%253D%2522facebook-badge-icon%2522%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%250A%257D"
              style={{
                width: "917px",
                height: "270px",
                border: "0",
                transform: "scale(1)",
                overflow: "hidden",
              }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};
