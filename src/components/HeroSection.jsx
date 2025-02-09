import React from "react";
import { useState } from "react";
import "./HeroSection.scss";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="hero">
      <nav className="hero__nav">
        <ul>
          <li><a href="#summary">SUMMARY</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#experience">EXPERIENCE</a></li>
          <li><a href="#research">RESEARCH</a></li>
          <li><a href="#education">EDUCATION</a></li>
          <li><a href="#references">REFERENCES</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        {!isOpen && (
        <button className="menu-btn" onClick={() => setIsOpen(true)}>☰</button>
        )}
      </nav>
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={() => setIsOpen(false)}>✖</span>
        <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#research">RESEARCH</a></li>
          <li><a href="#experience">EXPERIENCE</a></li>
          <li><a href="#education">EDUCATION</a></li>
          <li><a href="#references">REFERENCES</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
      <div className="hero__content">
        <img src="profile.jpg" alt="Jonghwan" className="hero__image" />
        <h1 className="hero__name">Jonghwan Park</h1>
        <p className="hero__title">SOFTWARE DEVELOPER | AI RESEARCHER</p>
        <div className="hero__buttons">
          <button className="hero__btn" onClick={() => window.open("resume.pdf", "_blank")}>Download Resume</button>
          {/* <a href="#" className="hero__btn">Download AI Research Summary</a> */}
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
