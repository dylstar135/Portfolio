import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2
        heading="CONTACT"
        text="Feel free to contact me about a collaberation or and questions you might have"
      />
      <Footer />
    </div>
  );
};

export default Contact;
