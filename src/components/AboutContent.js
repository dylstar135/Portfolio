import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/React1.jpg";
import Express from "../assets/express.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>A Software Developer and part-time adventurer</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={Express} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
