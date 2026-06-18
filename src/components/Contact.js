import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // Tracks: "", "submitting", "success", "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    
    const FORMSPREE_ID = "xqeooqar"; 

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Resets form values
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">Have a project in mind or an open role? Let's connect.</p>

        {status === "success" ? (
          /* Modern visual success verification screen card */
          <div className="success-card">
            <div className="success-icon">✓</div>
            <h3>Message Sent!</h3>
            <p>Thank you, Nikhil will get back to you shortly.</p>
            <button className="reset-btn" onClick={() => setStatus("")}>
              Send another message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={status === "submitting"}
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={status === "submitting"}
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                disabled={status === "submitting"}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your opportunity..."
              ></textarea>
            </div>

            {status === "error" && (
              <p className="error-message">❌ Something went wrong. Please try again.</p>
            )}

            <button type="submit" className="submit-form-btn" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending..." : "Send Message"} <span>→</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;