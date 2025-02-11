import React from "react";
import { useState, useEffect, useRef } from "react";
import "./HeroSection.scss";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTall, setIsTall] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerWidth < 400 ? 300 : 450; // Adjust for small screens
      setIsTall(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="hero">
      <nav className={`hero__nav ${isTall ? "tall-navbar" : ""}`}>
        <ul>
          <li><a href="#summary">SUMMARY</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#fullstack">FULL STACK</a></li>
          <li><a href="#frontend">FRONTEND</a></li>
          <li><a href="#mobile">MOBILE</a></li>
          <li><a href="#research">RESEARCH</a></li>
          <li><a href="#education">EDUCATION</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        <div className={`menu-container ${isOpen ? "open" : ""}`}>
          <button className={`menu-btn ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="bar top"></div>
            <div className="bar middle"></div>
            <div className="bar bottom"></div>
          </button>
          <nav className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="menu-item"><a href="#about">ABOUT</a></div>
            <div className="menu-item"><a href="#fullstack">FULL STACK</a></div>
            <div className="menu-item"><a href="#frontend">FRONTEND</a></div>
            <div className="menu-item"><a href="#mobile">MOBILE</a></div>
            <div className="menu-item"><a href="#research">RESEARCH</a></div>
            <div className="menu-item"><a href="#education">EDUCATION</a></div>
            <div className="menu-item"><a href="#contact">CONTACT</a></div>
          </nav>
        </div>
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
