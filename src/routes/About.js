import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="ABOUT" text="Im a Software Developer" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
