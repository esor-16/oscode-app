import React, { useState } from "react";
import "./ContactSection.css"; // Import the CSS file

const ContactSection = () => {
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmationVisible(true);
    setTimeout(() => {
      setConfirmationVisible(false);
    }, 3000);
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <div className="contact-details">
          
          <p>Email: oscode.com</p>
          <div className="svg-icons">
            <a href="https://www.linkedin.com/company/oscode-nmit" target="_blank" rel="noopener noreferrer">
              <img src="/link.svg" alt="linkedin" className="contact-icon" />
            </a>
            <a href="https://www.instagram.com/oscode_nmit/" target="_blank" rel="noopener noreferrer">
              <img src="/in.svg" alt="insta" className="contact-icon" />
            </a>
          </div>
        </div>
        <form id="contactForm" onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required /><br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required /><br />

          <label htmlFor="message">Message:</label><br />
          <textarea id="message" name="message" required></textarea><br />

          <input type="submit" value="Submit" />
          <div className="made-by">
            <p>Made by esor<br />
              Email: eswarachut16@gmail.com
            </p>
          </div>
        </form>
      </div>
      {confirmationVisible && (
        <p id="confirmationMessage" className="confirmationMessage" style={{ color: 'green' }}>
          Thank you for contacting us!
        </p>
      )}
    </section>
  );
};

export default ContactSection;