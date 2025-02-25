import React from "react";
import { useEffect, useRef } from "react";
import "./SkillBox.scss"; // Import SCSS file

const FullStack = () => {
    const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.5 } // Video should be at least 50% visible to play
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  return (
    <div id="fullstack" className="item-container">
        <h1>Full stack</h1>
        <div className="skills-box">
            <div className="skill-box">
                <video ref={videoRef} loop muted className="skill-video">
                    <source src="fullstack.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h2>SnapSell: A Smart Online Marketplace</h2>
                <h3>
                🚀 A smarter way to buy and sell! This web app, like Facebook Marketplace, 
                streamlines the selling process with AI-powered image recognition - 
                automatically generating item details so sellers can create listings effortlessly. 📸 🔍 ✨
                </h3>
                <h4>
                  React, Typescript, Go, Python, GraphQL, PostgreSQL, FastAPI, Open AI, Docker
                </h4>
                <button className="primary-button" onClick={() => window.location.href = "https://github.com/jonghwan3/marketplace"}>Learn more</button>
            </div>
        </div>
    </div>
  );
};
export default FullStack;
