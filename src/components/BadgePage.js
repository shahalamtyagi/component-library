import { GithubBadge, PoliceBadge } from "./Badge"
import { Layout } from "./Layout"

 export const BadgePage = ()=>{
    return (
      <Layout>
        <div>
            <h2>Badges</h2>
            <PoliceBadge/>
            <div>
            <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%250Aexport%2520const%2520PoliceBadge%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badge-page-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%253CGiPoliceBadge%2520className%253D%2522badge-page-image%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B%250A"
  style={{ width: "799px",
  height: "233px",
  border: "0",
  transform: "scale(1)",
  overflow: "hidden",}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
<GithubBadge/>
<div>
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=export%2520const%2520GithubBadge%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520return%2520%28%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522girhub-badge-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%253CDiGithubBadge%2520className%253D%2522github-badge-image%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%29%253B%250A%257D%253B%250A"
  style={{ width: "799px",
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