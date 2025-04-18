import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";

const Projects = () => {
  const projects_data = [
    {
      p_no: "01",
      p_name: "Chat Application",
      p_desc:
        "A real-time messaging app built with React, Node.js and Socket.IO for instant communication.",
      technologies: ["React", "Node.js", "Socket.IO", "MongoDB"],
      projectUrl: "https://chat-app-frontend-sigma-ruddy.vercel.app",
    },
    {
      p_no: "02",
      p_name: "Portfolio Website",
      p_desc:
        "A responsive portfolio showcasing my skills and projects with modern animations and design.",
      technologies: ["React", "CSS", "Vite"],
      projectUrl: "",
    },
    {
      p_no: "03",
      p_name: "Pha5e Hero Section",
      p_desc:
        "Recreated the hero section of the Pah5e website with responsive design and animations.",
      technologies: ["HTML", "CSS", "React"],
      projectUrl: "https://ramyashreev19.github.io/Itzfizz-assignment/",
    },
    {
      p_no: "04",
      p_name: "Tictac Toe Using React",
      p_desc: "Developed a two-player Tic Tac Toe game with win-check logic.",
      technologies: ["React"],
      projectUrl: "https://ramyashreev19.github.io/TicTacToe/",
    },
    {
      p_no: "05",
      p_name: "Image Search Engine",
      p_desc: "Built a search engine to find and display images via API.",
      technologies: ["JavaScript", "React", "Unsplash API"],
      projectUrl: "https://ramyashreev19.github.io/Image-Search-Engine/",
    },
    {
      p_no: "06",
      p_name: "Todo List",
      p_desc:
        "A productivity app that allows users to organize tasks with drag-and-drop functionality.",
      technologies: ["React", "JavaScript", "CSS"],
      projectUrl: "https://ramyashreev19.github.io/ToDo-List/",
    },
  ];

  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="projects-container">
        {projects_data.map((project, index) => {
          return (
            <div key={index} className="projects-format">
              <h3>{project.p_no}</h3>
              <h2>{project.p_name}</h2>
              <p>{project.p_desc}</p>
              <div className="projects-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="projects-readmore">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects-readmore"
                >
                  <p>View Project</p>
                  <img src={arrow_icon} alt="" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
