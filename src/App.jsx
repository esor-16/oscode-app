import React from "react";
import "./App.css";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import Blogs from "./components/Blogs";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";



const OSCodeNMIT = () => {
  return (
    <div>
      <Header />
      <main>
        <AboutSection />
        <TeamSection />
        <Blogs />
        <ContactSection />
      </main>
      
    </div>
  );
};

export default OSCodeNMIT;

