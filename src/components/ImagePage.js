import { ArchitectureImage, SimpleImage } from "./Image";
import { Layout } from "./Layout";

export const ImagePage = () => {
  return (
    <div>
      <h2>Images</h2>
      <Layout>
        <SimpleImage />
        <div className="iframe-wrapper">
        <iframe
          title="image-title"
          src="https://carbon.now.sh/embed?bg=rgba%28211%2C219%2C227%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520%257Bimagecontainer%2520%252C%2520imgclass%2520%252C%2520src%2520%252C%2520alt%257D%2520%253D%2520props%253B%250A%2520%2520%2520%2520return%2520%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%257B%2560image-container%2520%2524%257Bimagecontainer%257D%2560%257D%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%2520className%253D%2522image-headding%2522%253EResponsive%2520Image%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520className%2520%253D%257B%2560img%2520%2524%257Bimgclass%257D%2560%257D%2520src%253D%257Bsrc%2520%253F%2520src%2520%253A%2520%2522https%253A%252F%252Fimages.unsplash.com%252Fphoto-1533090161767-e6ffed986c88%253Fixlib%253Drb-4.0.3%2526ixid%253DM3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2ltcGxlfGVufDB8fDB8fHww%2526auto%253Dformat%2526fit%253Dcrop%2526w%253D500%2526q%253D60%2522%257D%2520alt%253D%257Balt%257D%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%29%250A%257D%2520"
          style={{
            width: "1024px",
            height: "326px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
        </div>
        <ArchitectureImage />
        <div className="iframe-wrapper">
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28211%2C219%2C227%2C1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520export%2520const%2520ArchitectureImage%2520%253D%2520%28props%29%253D%253E%257B%250A%2520%2520%2520%2520const%2520%257Barchitectureimage%2520%252C%2520src%2520%252C%2520alt%2520%257D%2520%253D%2520props%253B%250A%2520%2520%2520%2520return%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520className%253D%257B%2560architecture-image%2520%2524%257Barchitectureimage%257D%2560%257Dsrc%253D%2520%257Bsrc%2520%253F%2520src%2520%253A%2522https%253A%252F%252Fimages.unsplash.com%252Fphoto-1686345233737-8f218f94f44f%253Fixlib%253Drb-4.0.3%2526ixid%253DM3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%25253D%25253D%2526auto%253Dformat%2526fit%253Dcrop%2526w%253D500%2526q%253D60%2522%257D%2520alt%253D%257Balt%257D%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%29%250A%257D"
          style={{
            width: "1024px",
            height: "326px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
        </div>
      </Layout>
    </div>
  );
};
