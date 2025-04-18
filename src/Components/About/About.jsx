import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profiile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>Education</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-education">
        <div className="edu-card">
          <div className="edu-header">
            <h3>B.E. in Information Science</h3>
            <div className="edu-details">
              <p>RNS Institute of Technology</p>
              <p>8.8 CGPA</p>
              <span>2020 - 2026</span>
            </div>
          </div>
          <div className="edu-description">
            <p>
              Completed BE in Information Science, gaining strong foundations in
              software development, system design, and problem-solving through
              hands-on projects and industry-focused learning.
            </p>
          </div>
        </div>

        <div className="edu-card">
          <div className="edu-header">
            <h3>Pre-University College - PCMC</h3>
            <div className="edu-details">
              <p>Sri Kumarans Composite PU College</p>
              <p>Karnataka State Board - 95.33%</p>
              <span>2020 - 2022</span>
            </div>
          </div>
          <div className="edu-description">
            <p>
              Pursued PCMC (Physics, Chemistry, Mathematics, Computer Science),
              developing analytical thinking and a strong interest in technology
              and engineering.
            </p>
          </div>
        </div>

        <div className="edu-card">
          <div className="edu-header">
            <h3>Secondary Education - Class 10</h3>
            <div className="edu-details">
              <p>Carmel School</p>
              <p>ICSE Board - 96.8%</p>
              <span>Till 2020</span>
            </div>
          </div>
          <div className="edu-description">
            <p>
              Built a solid academic foundation along with values, communication
              skills, and curiosity that shaped my overall growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
