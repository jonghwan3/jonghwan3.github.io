import React from "react";
import "./AboutBox.scss"; // Import SCSS file

const AboutBox = () => {
  return (
    <div id="about" className="item-container">
        <h1>About</h1>
        <div className="about-box">
            <div className="about">
                <p>Hello! I am Jonghwan Park, Software Developer and AI Researcher.</p>
                <p>
                I have 2+ years of experience in REST APIs and full-stack development. 
                Also, I have 2+ years of AI research in distributed learning, generative modeling, and LLMs. 
                </p>
                <p>
                Specifically, I maintained a platform with 300K+ daily users and published 5 ML papers, including 3 as the first author.
                </p>
                <p>
                I am currently developing an AI chatbot at a startup.
                </p>
            </div>
        </div>
    </div>
  );
};
export default AboutBox;
