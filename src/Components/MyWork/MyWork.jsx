import React from "react";
import "./MyWork.css"; 
import theme_pattern from "../../assets/theme_pattern.svg"; 
import arrow_icon from "../../assets/arrow_icon.svg"; 


const achievements_data = [
  {
    title: "Frontend Development",
    description: "HTML, CSS, JavaScript, React, Tailwind CSS",
    details: "Built responsive and interactive user interfaces using modern frontend technologies."
  },
  {
    title: " Backend Development",
    description: "Node.js, Express.js, MongoDB, MySQL",
    details: "Created scalable server-side applications and RESTful APIs with secure data handling."
  },
  {
    title: "Tools & Workflow",
    description: "Git, GitHub, VS Code, NPM, Postman",
    details: "Used development tools for version control, debugging, and efficient coding workflows.",
  },
  {
    title: " Programming Languages",
    description: "Java, C++",
    details: "Strong in OOP and problem-solving with hands-on coding experience."
  }
];

const MyWork = () => {
  return (
    <div id='work' className="mywork">
      <div className="mywork-title">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      
      
      <div className="mywork-container achievements-grid">
        {achievements_data.map((achievement, index) => {
          return (
            <div key={index} className="achievement-card">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
              <p className="achievement-details">{achievement.details}</p>
            </div>
          );
        })}
      </div>
      
      
    </div>
  );
};

export default MyWork;




