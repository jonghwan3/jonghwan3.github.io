import React from "react";
import "./SkillBox.scss"; // Import SCSS file

const SkillBox = () => {
  return (
    <div id="skills" className="item-container">
        <h1>Skills</h1>
        <div className="skill-box">
            <h2>Frontend</h2>
            <video autoPlay loop muted className="skill-video">
                <source src="frontend.mov" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h2>Backend</h2>
            <video autoPlay loop muted className="skill-video">
                <source src="frontend.mov" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  );
};
export default SkillBox;
