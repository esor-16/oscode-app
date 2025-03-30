import React from "react";
import "./TeamSection.css"; // Import the CSS file

const TeamSection = () => {
  const teamMembers = [
    { name: "Rakshita", image: "/rakshita.jpg" },
    { name: "Yuktha G" ,image: "/yukta.jpg" },
    { name: "Priya T" ,image: "/priya.jpg" },
    { name: "PavanTeja", image: "/teja.jpg" },
    { name: "Vaishnavi S", image: "/vaishnavi.jpg" },
    { name: "Greeshma", image: "/greeshama.jpg" },
    { name: "Rashmika R", image: "/rashmika.jpg" },
  ];

  return (
    <section id="team" className="team-section">
      <h2>Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-avatar">
              <img src={`${member.image}`} alt={`${member.name}`} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;