import React, { useContext } from "react";
import "../styles/Intro.css";
import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";
import Vector1 from "../assets/Vector1.png";
import Vector2 from "../assets/Vector2.png";
import Hero from "../assets/hero.png";
import crown from "../assets/crown.png";
import thumbup from "../assets/thumbup.png";
import glassesimoji from "../assets/glassesimoji.png";
import FloatingDiv from "./FloatingDiv";
import { themeContext } from "../Context";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro" id="Intro">
      {/* Left */}
      <div className="intro__left">
        {/* Name */}
        <div className="intro__name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I'm</span>
          <span>Vo Bao Long</span>
          <span>
            Front-end Developer with medium level of exprience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="intro__button button">Hire me</button>
        </Link>
        <div className="intro__icons">
          <a href="https://github.com/vobaolong">
            <img src={Github} alt="" />
          </a>
          <img src={Linkedin} alt="" />
        </div>
      </div>
      {/* Right */}
      <div className="intro__right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Hero} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv img={thumbup} text1="Design" text2="" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(230 210 255" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
