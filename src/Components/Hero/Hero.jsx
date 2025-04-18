import React from "react";
import "./Hero.css";
import profile_img from "../../assets/my_image.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="hero-img" src={profile_img} alt="" />
      <h1>
        <span> I'm Ramya Shree V,</span> an aspiring software developer
      </h1>
      <p>
      I'm a passionate and curious developer eager to build meaningful experiences and continuously grow through hands-on learning and collaboration.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
      <div className="hero-resume">
            <a
              href="https://drive.google.com/file/d/1p4lVcTnm0NlZ9OubSusrazvhjsj9Cm9r/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              My Resume
            </a>
      </div>

      </div>
    </div>
  );
};

export default Hero;
