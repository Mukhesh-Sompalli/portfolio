import React from 'react';
import './footer.css';
import linkedinLogo from "./linkedin.jpg";
import instagramLogo from "./instagram.jpg";
import githubLogo from "./github.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Horizontal Rule */}
      <hr className="horizontal-rule top-rule" />

      <div className="footer-content">
        <div className="logo-subscription">
          <div className="logo">
            <span className="logo-text">Mukhesh</span>
            <p className="description">A passionate frontend developer</p>
            <div className="social-icons">
              <a href="https://linkedin.com/in/mukhesh-sompalli-7889ab264" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn" className="social-icon" width="50px" />
              </a>
              <a href="https://www.instagram.com/mukesh_sompalli_/" target="_blank" rel="noopener noreferrer">
                <img src={instagramLogo} alt="Instagram" className="social-icon" width="38px" style={{borderRadius:"20px", marginLeft:"2px"}} />
              </a>
              <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub" className="social-icon" width="38px" style={{borderRadius:"20px", marginLeft:"4px"}} />
              </a>
            </div>
          </div>
          <div className="subscription">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 ALL rights reserved.</p>
          <div className="footer-links">
            <a href="/terms">Terms of Services</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/connect">Connect with me</a>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Rule */}
      <hr className="horizontal-rule bottom-rule" />
    </footer>
  );
};

export default Footer;
