import React from "react";
import "./AboutBox.scss"; // Import SCSS file

const AboutBox = () => {
  return (
    <div id="about" className="item-container">
        <h1>About</h1>
        <div className="about-box">
            <div className="about">
                <p>Hello! I am Jonghwan Park. Software Developer and an AI Researcher.</p>
                <p>
                I have over 2 years of experience working as a software developer, 
                as well as over 2 years of AI research experience.
                </p>
                <p>
                These days, I am developing an AI chatbot at a startup.
                </p>
            </div>
        </div>
    </div>
  );
};
export default AboutBox;
