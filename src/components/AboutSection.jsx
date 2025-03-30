import React from "react";
import "./AboutSection.css"; 

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <h2>About Us</h2>
      <div className="about-content">
        <div className="about-image"></div> {}
        <div className="about-text">
          <p>OScode is a student-led open-source club at NMIT, fostering learning, collaboration, and innovation.</p>
          <p>We help students explore open-source contributions, work on real-world projects, and prepare for platforms like Google Summer of Code (GSoC).</p>
          <p>Our community brings like-minded developers together to learn, build, and grow through hands-on experience.</p>
          <p>Whether you're a beginner or an experienced coder, OScode provides the perfect space to enhance your skills and advance your career.</p>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <h3>Collaboration</h3>
          <p>Work with peers on exciting open-source projects and learn from each other.</p>
        </div>
        <div className="card">
          <h3>Innovation</h3>
          <p>Bring your ideas to life and contribute to cutting-edge technologies.</p>
        </div>
        <div className="card">
          <h3>Growth</h3>
          <p>Enhance your skills and prepare for a successful career in tech.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;