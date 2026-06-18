import React from "react";
import "./Footer.css";

const Footer = () => {
  // Vector icons to match your projects layout language
  const footerIcons = {
    github: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
    email: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
    linkedin: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    kaggle: (
      <svg width="15" height="15" viewBox="0 0 32 32" fill="currentColor">
        <path d="M17.4 2.5c-.5 0-.9.4-.9.9v10.8L8.3 5.4c-.3-.3-.8-.3-1.1 0l-1.9 1.9c-.3.3-.3.8 0 1.1l7.8 7.8-8 10.3c-.3.4-.2.9.2 1.2l2.1 1.6c.4.3.9.2 1.2-.2L16.5 19v9.6c0 .5.4.9.9.9h2.7c.5 0 .9-.4.9-.9V14.6l7.7 8.3c.3.3.8.4 1.1.1l2.1-1.8c.4-.3.4-.9.1-1.2L23.4 13l8.1-7.8c.4-.3.4-.9.1-1.2l-2-1.9c-.4-.3-.9-.3-1.2.1L21 10.1V3.4c0-.5-.4-.9-.9-.9h-2.7z"/>
      </svg>
    )
  };

  return (
    <footer className="footer-bar">
      <div className="footer-container">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Nikhil Kumar Battula. All rights reserved.
        </p>
        <div className="footer-socials">
          <a href="https://github.com/nikhil-kumar393" target="_blank" rel="noreferrer" className="footer-link">
            {footerIcons.github} <span>GitHub</span>
          </a>
          
          <a href="https://www.linkedin.com/in/nikhil3945" target="_blank" rel="noreferrer" className="footer-link">
            {footerIcons.linkedin} <span>LinkedIn</span>
          </a>
          <a href="https://www.kaggle.com/nikhilraj393" target="_blank" rel="noreferrer" className="footer-link">
            {footerIcons.kaggle} <span>Kaggle</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;