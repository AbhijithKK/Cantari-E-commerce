import "./Footer.css";
import fb from "../../Assets/socialMediaIcon/fb.png";
import lin from "../../Assets/socialMediaIcon/in.png";
import tw from "../../Assets/socialMediaIcon/tw.png";
import ig from "../../Assets/socialMediaIcon/ig.png";
import logo from "../../Assets/currease logo 1-1.png";

const Footer = () => {
  return (
    <>
    <div className="foot-logo">
            <img src={logo} alt="" />
          </div>
    <div className="Footer-h">
      <div className="Footer">
        <div>Customer Support</div>
        <div>+1 65695 545 65</div>
        <div>support@cantaricorp.com</div>
        <div className="Footer-list">
          <div>Home</div>
          <div>About Us</div>
          <div>Contact Us</div>
          <div>Shop</div>
        </div>
      </div>
      <div className="Footer-bar-h">
        <div className="Footer-bar">
          <div className="copyRight">&copy; 2023 Cantari Corp.</div>
          <div className="terms-service">
            <div>Terms of Service</div>
            &nbsp;&nbsp; &nbsp;&nbsp; <div>Privacy Policy</div>
          </div>
          <div className="social-img">
            <img src={fb} alt="Facebook" />
            <img src={lin} alt="Linkedin" />
            <img src={tw} alt="Twitter" />
            <img src={ig} alt="Instagram" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
