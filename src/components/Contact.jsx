import React from "react";
import "./Contact.scss"; 
const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0, // Ensure it stays in the background
  };
  
  const center = {
    lat: 34.0522, // Los Angeles Latitude
    lng: -118.2437, // Los Angeles Longitude
  };
const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h1>Contact me</h1>
      <div className="contacts-box">
        <div className="contact-box">

            <h2>Email</h2>
            <h3><a href="mailto:jonghwan@usc.edu">jonghwan@usc.edu</a></h3>

            <h2>LinkedIn</h2>
            <h3><a href="http://www.linkedin.com/in/jonghwan3">http://www.linkedin.com/in/jonghwan3</a></h3>
        </div>
      </div>
    </div>
  );
};
export default Contact;
