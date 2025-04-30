import React from "react";
import { useEffect, useRef } from "react";
import "./SkillBox.scss"; // Import SCSS file

const FrontEnd = () => {
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
    <div id="frontend" className="item-container">
            <h1>Frontend</h1>
            <div className="skills-box">
                <div className="skill-box">
                    <video ref={videoRef} loop muted className="skill-video">
                        <source src="frontend.mov" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2>AI-Powered Learning Management System (LMS)</h2>
                    <h3>📘 "An AI-powered LMS is a smart, all-in-one platform that transforms the learning experience. 
                        Educators can easily create and manage content, while AI helps personalize lessons, answer questions, and track student progress in real time. 
                        Learners get instant support, tailored feedback, and flexible access to resources—anytime, anywhere. 
                        Whether in schools, universities, or corporate training, this intelligent system keeps learning engaging, efficient, and effective." 🤖🎓</h3>
                    <h4>React, SCSS, and Tailwind CSS</h4>
                    <button className="primary-button" onClick={() => window.location.href = "https://coursistant.com"}>Learn more</button>
                </div>
            </div>
    </div>
  );
};
export default FrontEnd;
