import React from "react";
import "./SkillBox.scss"; // Import SCSS file

const SkillBox = () => {
  return (
    <div id="skills" className="item-container">
        <h1>Full stack</h1>
        <div className="skills-box">
            <div className="skill-box">
                <h2>Online marketplace</h2>
                <video autoPlay loop muted className="skill-video">
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
        <h1>Frontend</h1>
            <div className="skills-box">
                <div className="skill-box">
                    <h2>Full stack</h2>
                    <video autoPlay loop muted className="skill-video">
                        <source src="frontend.mov" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h3>
                        Skills: React, Typescript, Go, Python, GraphQL, PostgreSQL
                        <br></br>
                        Developed a product introduction homepage.
                    </h3>
                </div>
            </div>
    </div>
  );
};
export default SkillBox;
