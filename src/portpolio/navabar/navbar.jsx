import React, { useState, useEffect } from 'react';
import './navbar.css'; 
import Page1 from '../home/page1';
import AboutMe from '../aboutus/aboutUs';
// import MainApp from '../services/mainPath';
import Portfolio from '../portpoli/portpoli';
import Services from '../services/services';
import ContactForm from '../contact/contact';
import Footer from '../Footer/foter';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Smooth scrolling function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // Adjust offset for navbar
        behavior: "smooth",
      });
    }
    setActiveSection(id);
    setIsOpen(false); // Close menu after clicking
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"];
      let currentSection = "home"; 

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
    
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <span>Sompalli Mukhesh Kumar</span>
        </div>

       
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </button>

        
        <ul className={`nav-links ${isOpen ? 'open' : 'closed'}`}>
          <li>
            <a 
              href="#home" 
              className={activeSection === "home" ? "active" : ""}
              onClick={() => scrollToSection("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeSection === "about" ? "active" : ""}
              onClick={() => scrollToSection("about")}
            >
              About Me
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className={activeSection === "services" ? "active" : ""}
              onClick={() => scrollToSection("services")}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#portfolio" 
              className={activeSection === "portfolio" ? "active" : ""}
              onClick={() => scrollToSection("portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === "contact" ? "active" : ""}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content Sections */}
      <main>
        <section id="home">
          <Page1 />
        </section>
        
        <section id="about">
          <AboutMe />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <section id="contact">
          <ContactForm />
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Navbar;
