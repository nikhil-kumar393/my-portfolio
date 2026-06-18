import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>

        <div className="project-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-card-header">
              <span className="project-icon">🚀</span>
              <h3>NutriChef.ai — AI-Powered Recipe Planner</h3>
            </div>
            <p className="project-desc">
              Split-stack AI recipe planner using React and FastAPI, powered by a low-latency hybrid engine combining Scikit-Learn and Gemini Pro.
            </p>
            <div className="project-tech">
              {["React",  "FastAPI" ,"Gemini Pro","Scikit-Learn"].map((tech) => (
                <span key={tech} className="tech-pill">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href="https://github.com/nikhil-kumar393/nutrichef-frontend" target="_blank" rel="noreferrer" className="proj-link link-github">
                Code Repo
              </a>
              <a href="https://nutricheffai.netlify.app/" target="_blank" rel="noreferrer" className="proj-link link-demo">
                Live Demo <span>→</span>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-card-header">
              <span className="project-icon">🌐</span>
              <h3>Fraylon Technologies Website Clone</h3>
            </div>
            <p className="project-desc">
              Contributed to backend development of a website clone by building REST APIs using NestJS and TypeScript.
            </p>
            <div className="project-tech">
              {["NestJS", "TypeScript", "PostgreSQL", "Prisma ORM"].map((tech) => (
                <span key={tech} className="tech-pill">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href="https://github.com/Fraylon-Technologies/pr1-be" target="_blank" rel="noreferrer" className="proj-link link-github">
                Code Repo
              </a>
              <a href="https://fraylontech.com" target="_blank" rel="noreferrer" className="proj-link link-demo">
                Live Demo <span>→</span>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-card-header">
              <span className="project-icon">🛡️</span>
              <h3>Covid-19 India Portal Backend</h3>
            </div>
            <p className="project-desc">
              Developed a Node.js, Express.js RESTful API for COVID-19 data, featuring JWT authentication, bcrypt hashing, and CRUD functionality.
            </p>
            <div className="project-tech">
              {["Node.js", "Express.js", "JWT", "SQLite"].map((tech) => (
                <span key={tech} className="tech-pill">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href="https://github.com/nikhil-kumar393/Covid19-India-Portal-API" target="_blank" rel="noreferrer" className="proj-link link-github">
                Code Repo
              </a>
              <a href="https://github.com/nikhil-kumar393/Covid19-India-Portal-API" target="_blank" rel="noreferrer" className="proj-link link-demo">
                Live Demo <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Global "View More" CTA Button */}
        <div className="view-more-wrapper">
          <a 
            href="https://github.com/nikhil-kumar393" 
            target="_blank" 
            rel="noreferrer" 
            className="view-more-btn"
          >
            View More on GitHub <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;