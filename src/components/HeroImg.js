import "./HeroImgStyles.css";

import React from "react";
import IntroImg from "../assets/IntroImage.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I'm Dylan</p>
        <h1>Software Dveloper</h1>
        <div>
          <Link to="/Projects" className="btn">
            Projects
          </Link>
          <Link to="/Contact" className="btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
