import React from "react";
import "../styles/Footer.css";
import Wave from "../assets/wave.png";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>vobaolong317@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.facebook.com/baolong317">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/vobaolong">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
