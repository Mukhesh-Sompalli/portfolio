import React from 'react';
import './aboutUs.css'; 
import Image from "./mukesh.jpg"; // Import the image correctly

const AboutMe = () => {
  return (
    <div className="about-me">
      <h1>ABOUT ME</h1>
      <div className="profile-container">
        <img src={Image} alt="Profile" className="profile-image" /> {/* Corrected */}
        <div className="profile-details">
          <p>
            I am a passionate and motivated Frontend Developer seeking an opportunity to start my professional career. My foundation in web development technologies like HTML, CSS, JavaScript, and React.js equips me to create intuitive and responsive user interfaces that enhance user experiences.
          </p>
          <p>
            Throughout my academic journey and personal projects, I have developed skills in building dynamic web applications and problem-solving. I am currently seeking a job where I can contribute my knowledge, continuously learn new technologies, and grow as a developer in a collaborative environment.
          </p>
          <div className="skills">
            <div className="skill">
              <span>HTML & CSS</span>
              <div className="skill-bar html-css"></div>
            </div>
            <div className="skill">
              <span>React JS</span>
              <div className="skill-bar react-js"></div>
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <div className="skill-bar javascript"></div>
            </div>
            <div className="skill">
              <span>SQL</span>
              <div className="skill-bar sql"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
