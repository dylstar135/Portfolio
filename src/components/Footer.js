import "./FooterStyles.css";

import React from "react";
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          </div>
          <div>
            <p>Heywood, Manchester</p>
            <p>UK</p>
          </div>
          <div className="Phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              07713570456
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Dylstar160990@googlemail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Myself</h4>
          <p>
            This is me, Dylan Power. Software Developer. I enjoy discussing new
            projects and design challenges.
          </p>
          <div className="social">
            <FaInstagram
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
