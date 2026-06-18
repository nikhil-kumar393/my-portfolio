import React, { useState } from "react";
import "./About.css";

const About = () => {
    const [activeTab, setActiveTab] = useState("education");

    const renderContent = () => {
        switch (activeTab) {
            case "education":
                return (
                    <div className="tab-content">
                        <div className="section-header">
                            <h3>🎓 Education</h3>
                        </div>
                        
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <h4>Master of Computer Applications (MCA)</h4>
                                <p className="college">Siddhartha Institute of Technology & Sciences</p>
                                <div className="edu-details">
                                    <span>📅 2024 - 2026</span>
                                    <span className="badge badge-ongoing">📊 CGPA: OnGoing</span>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <h4>Bachelor of Science (BSc - MPCS)</h4>
                                <p className="college">Omega Degree College</p>
                                <div className="edu-details">
                                    <span>📅 2020 - 2023</span>
                                    <span className="badge">📊 CGPA: 7.75</span>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <h4>Intermediate (MPC)</h4>
                                <p className="college">Narayana Junior College</p>
                                <div className="edu-details">
                                    <span>📅 2018 - 2020</span>
                                    <span className="badge">📊 CGPA: 7.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "experience":
                return (
                    <div className="tab-content">
                        <div className="section-header">
                            <h3>💼 Experience</h3>
                        </div>
                        <div className="exp-role-title">
                            <h4>Full Stack Developer Intern</h4>
                            <span className="company-tag">@ Fraylon Technologies</span>
                        </div>
                        <ul className="styled-list">
                            <li><strong>Full-Stack Development:</strong> Engineered and maintained web application features utilizing the MERN stack.</li>
                            <li><strong>Agile Collaboration:</strong> Delivered a functional solution under tight deadlines for a company hackathon, contributing to design, APIs, and testing.</li>
                            <li><strong>Modern Backend Tooling:</strong> Expanded technical skills in a team environment using NestJS, TypeScript, and PostgreSQL. Built APIs using NestJS & TypeScript.</li>
                        </ul>
                    </div>
                );

            case "skills":
                return (
                    <div className="tab-content">
                        <div className="section-header">
                            <h3>🧠 Technical Skills</h3>
                        </div>
                        
                        <div className="skills-container">
                            <div className="skill-group">
                                <h5>Languages</h5>
                                <div className="tags">
                                    {["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"].map(s => <span key={s} className="tag">{s}</span>)}
                                </div>
                            </div>
                            <div className="skill-group">
                                <h5>Frameworks & Libraries</h5>
                                <div className="tags">
                                    {["React.js", "Node.js", "Express.js", "FastAPI", "NestJS"].map(s => <span key={s} className="tag tag-accent">{s}</span>)}
                                </div>
                            </div>
                            <div className="skill-group">
                                <h5>Databases</h5>
                                <div className="tags">
                                    {["MongoDB", "PostgreSQL", "SQLite" , "MySQL"].map(s => <span key={s} className="tag">{s}</span>)}
                                </div>
                            </div>
                            <div className="skill-group">
                                <h5>AI & Machine Learning</h5>
                                <div className="tags">
                                    {["LLMs", "LangChain", "Hugging Face", "Pinecone", "Scikit-Learn", "Deep Learning"].map(s => <span key={s} className="tag tag-ai">{s}</span>)}
                                </div>
                            </div>
                            <div className="skill-group">
                                <h5>Tools</h5>
                                <div className="tags">
                                    {["Git", "GitHub", "VS Code", "Postman", "Playwright", "Co-Pilot"].map(s => <span key={s} className="tag">{s}</span>)}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "certifications":
                return (
                    <div className="tab-content">
                        <div className="section-header">
                            <h3>🏅 Certifications</h3>
                        </div>
                        <div className="cert-grid">
                            {[
                                { title: "Full Stack Developer Intern", org: "Fraylon Technologies", url: "https://drive.google.com/file/d/1IfDzTJq8x7Kr6pyrWtd8zycgh91cYejA/view?usp=drivesdk" },
                                { title: "Node JS", org: "Nxtwave Disruptive Technologies", url: "https://certificates.ccbp.in/intensive/node-js?id=EMNZJYSROU" },
                                { title: "JavaScript Essentials", org: "Nxtwave Disruptive Technologies", url: "https://certificates.ccbp.in/intensive/javascript-essentials?id=BSUHJVVZPP" },
                                { title: "Python Foundations", org: "Nxtwave Disruptive Technologies", url: "https://certificates.ccbp.in/intensive/programming-foundations?id=WYXBNGYCCC" },
                                { title: "Developer Foundations", org: "Nxtwave Disruptive Technologies", url: "https://certificates.ccbp.in/intensive/developer-foundations?id=JOKBZCVKQF" },
                                { title: "Responsive Web Design (Flexbox)", org: "Nxtwave Disruptive Technologies", url: "https://certificates.ccbp.in/intensive/flexbox?id=EZWSMVPZMB" },
                            ].map((cert, index) => (
                                <div className="cert-card" key={index}>
                                    <h4>{cert.title}</h4>
                                    <p>{cert.org}</p>
                                    <a href={cert.url} target="_blank" rel="noreferrer" className="cert-link">
                                        Verify Certificate ↗
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case "training":
                return (
                    <div className="tab-content">
                        <div className="section-header">
                            <h3>📚 Training</h3>
                        </div>
                        <ul className="styled-list">
                            <li><strong>MERN Stack Trainee</strong> – Nxtwave Disruptive Technologies</li>
                            <li><strong>AI/ML Trainee</strong> – mldl.study</li>
                        </ul>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <h2 className="section-title">About Me</h2>

                {/* Tabs */}
                <div className="tabs-wrapper">
                    {["education", "experience", "skills", "certifications", "training"].map((tab) => (
                        <button
                            key={tab}
                            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Dynamic Display Panel */}
                <div className="display-panel">
                    {renderContent()}
                </div>
            </div>
        </section>
    );
};

export default About;