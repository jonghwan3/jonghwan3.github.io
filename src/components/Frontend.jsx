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
    <div id="frontend" className="item-container">
        <h1><br></br></h1>
            <div className="skills-box">
                <div className="skill-box">
                    <video ref={videoRef} loop muted className="skill-video">
                        <source src="frontend.mov" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h2>Coursistant: AI-Chatbot for eduacation</h2>
                    <h3>🚀 "Coursistant is your AI-powered academic companion, revolutionizing the way students and experts engage with knowledge. 
                      Designed for specialized fields, it provides a dynamic, customizable Q&A environment that keeps learning interactive and research cutting-edge. 
                      Educators can effortlessly update content, ensuring accurate, real-time responses. Whether in the classroom or deep into research, 
                      Coursistant is the essential tool for seamless, intelligent learning." 📚 ✨</h3>
                    <h4>REACT, CSS, FLASK, FAST API, SPRING BOOT, HADOOP, LANGCHAIN, LlamaIndex, MySQL</h4>
                    <button className="primary-button" onClick={() => window.location.href = "https://coursistant.com"}>Learn more</button>
                </div>
            </div>
    </div>
  );
};
export default FullStack;
