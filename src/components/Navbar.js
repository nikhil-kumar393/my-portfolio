import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = (e) => {
    e.preventDefault();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar-header">
      <div className="navbar-container">
        {/* Clickable Brand Identity */}
        <a href="#home" className="brand-logo" onClick={scrollToTop}>
          <span className="logo-text">NIKHIL KUMAR</span>
        </a>

        {/* 3-Line Hamburger Icon Container */}
        <button 
          className={`hamburger ${isOpen ? "active" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Action Links Menu */}
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#about" className="menu-item" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="menu-item" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            {/* Kept static class name; CSS handles the desktop-vs-mobile transformation */}
            <a href="#contact" className="contact-btn" onClick={handleLinkClick}>
              Contact Me ✉
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;