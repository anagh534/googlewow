import "./Footer.css";
import { BsDiscord, BsYoutube, BsInstagram } from "react-icons/bs";
import { blacklogo, footerbg, footerside } from "../../Assets";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src={blacklogo} alt="" />
      </div>
      <div>
        <div>
          <div>
            <p>
              GDSC WOW is an annual collaboration of GDSCs in India where we aim
              at providing quality education, network and a wide exploration of
              technology and community with lots of fun.
            </p>
            <img src={footerside} alt="" />
          </div>
          <div className="contact-wrapper">
            <div>
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <a href="">
                    <BsDiscord />
                  </a>
                </li>
                <li>
                  <a href="">
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a href="">
                    <BsYoutube />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Contact Us</h3>
              <div>
                <a href="">support@gdscwow.live</a>
                <a href="">support@gdscwow.team</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
