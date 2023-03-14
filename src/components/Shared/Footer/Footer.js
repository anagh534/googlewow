import { logo } from "../../../Assets";
import "./Footer.css";
import Socialcontainer from "./Socialcontainer";
import { AiOutlineCopyright } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footerwrapper">
      <footer className="footer">
        <img src={logo} alt="" />
        <p style={{ maxWidth: "450px", textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo
          libero sunt alias quis, quaerat voluptatibus ipsum, dolor nobis vel
          vitae eveniet rem consequuntur et minima consectetur earum!
          Necessitatibus, aut.
        </p>
        <Socialcontainer />
        <small>
          <AiOutlineCopyright />
          2023 GDSC WOW. All rights reserved.
        </small>
      </footer>
    </div>
  );
};
export default Footer;
