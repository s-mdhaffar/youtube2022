import Logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with &#10084; and <b>React.js</b>
      </span>
    </footer>
  );
};

export default Footer;
