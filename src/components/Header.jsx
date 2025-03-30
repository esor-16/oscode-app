import React, { useEffect, useState } from "react";
import "./Header.css"; // Import the CSS file
import logo from '/nmit.jpg'; // Import your logo image

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav">
        <ul>
          <li><a href="#header" aria-label="Header">Home</a></li>
          <li><a href="#about" aria-label="About Us section">About Us</a></li>
          <li><a href="#team" aria-label="Team section">Team</a></li>
          <li><a href="#blogs" aria-label="Blogs section">Blogs</a></li>
          <li><a href="#contact" aria-label="Contact Us section">Contact Us</a></li>
        </ul>
      </nav>
      <img src={logo} alt="OSCode Logo" className="header-logo" />
      <div className="header-content">
        <div className="header-text">
          <h1>OSCode NMIT</h1>
          <p>The Open Source Club of NMIT</p>
        </div>
      </div>
    </header>
  );
};

export default Header;