import "./Footer.css"
export const Footer = (props)=>{
  const {footercontainerclass , footerlinks , href} = props;
return (
    <div className={`footer-container ${footercontainerclass}`}>
        <a className= {`footer-links ${footerlinks}`} href={href}>Github</a>
        <a className= {`footer-links ${footerlinks}`} href={href}>Facebook</a>
        <a className= {`footer-links ${footerlinks}`} href={href}>Teligram</a>
      </div>
)
}