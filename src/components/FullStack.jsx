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
    <div id="skills" className="item-container">
        <h1>Full stack</h1>
        <div className="skills-box">
            <div className="skill-box">
                <h2>Online marketplace</h2>
                <video ref={videoRef} loop muted className="skill-video">
                    <source src="fullstack.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h3>
                    Developed a full stack application.
                    <br></br>
                    Skills: React, Typescript, Go, Python, GraphQL, PostgreSQL
                </h3>
            </div>
        </div>
    </div>
  );
};
export default FullStack;
