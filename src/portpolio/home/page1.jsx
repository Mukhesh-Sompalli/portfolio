import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './page1.css'; 
import linkedinLogo from '../Footer/linkedin.jpg';
import instagramLogo from '../Footer/instagram.jpg';
import githubLogo from '../Footer/github.png';
import Profile from './Kumar.jpg'; 

const Page1 = () => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    };

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach((link) => link.addEventListener('click', handleScroll));

    return () => {
      navLinks.forEach((link) => link.removeEventListener('click', handleScroll));
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* No content in Navbar here */}
        </header>

        <section id="home" className="profile-section">
          <div className="profile-picture">
            <img src={Profile} alt="Sompalli Mukhesh Kumar" />
          </div>
          <h1 className="name-heading">
            I'm <span className="highlight">Sompalli Mukhesh Kumar</span>,
          </h1>
          <h2 className="title-heading">Frontend Developer</h2>

          <div className="social-icons1">
            <a href="https://www.linkedin.com/in/mukhesh-sompalli-7889ab264" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn" className="social-icon" width="50px" />
            </a>
            <a href="https://www.instagram.com/mukesh_sompalli_/" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" className="social-icon" width="38px" style={{ borderRadius: '20px' }} />
            </a>
            <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="GitHub" className="social-icon" width="38px" style={{ borderRadius: '20px' }} />
            </a>
          </div>

          <div className="buttons">
            <button className="connect-button" onClick={() => window.location.href = "mailto:mukheshsompalli02@gmail.com"}>
              Email
            </button>
            <a href="https://drive.google.com/file/d/1gKsfUqM0hQstNwPtsayzlcgZQx5hNNVG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className="resume-button">My Resume</button>
            </a>
          </div>
        </section>
      </div>
    </Router>
  );
};

export default Page1;
