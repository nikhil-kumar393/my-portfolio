import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <header className="hero-section" id="home">
      {/* Background ambient lighting overlay */}
      <div className="hero-glow-effect"></div>

      <div className="hero-content">
        {/* Modern Spotlight Indicator */}
        <div className="spotlight-badge">
          <span className="pulse-dot"></span>
          <span>Open to Full-Time Roles</span>
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Nikhil Kumar</span> 👋
        </h1>

        <h2 className="hero-subtitle">AI Enthusiast & Full Stack Engineer</h2>

        <p className="hero-description">
          Over recent years, I have channeled my passion into crafting smooth frontend architectures, 
          tackling complex backend challenges, and integrating intelligent AI/ML features to create 
          smart, user-friendly digital products.
        </p>

        <div className="hero-action-group">
          <a href="#projects" className="hero-btn btn-primary">
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/YOUR_COPIED_DRIVE_FILE_ID_HERE/view?usp=sharing"
            className="hero-btn btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>

          <a href="#contact" className="hero-link-btn">
            Contact Me <span>→</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;