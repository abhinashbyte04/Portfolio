import React from 'react';
import { Code2, Github, Linkedin, Instagram, ArrowUp } from './Icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <a 
              href="#home" 
              className="footer-logo"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
            >
              <div className="logo-icon">
                <Code2 size={22} />
              </div>
              <span className="logo-text">Abhinash</span>
            </a>
            <p className="footer-tagline">
              Passionate software developer & AI/ML engineering student dedicated to crafting innovative digital solutions and intelligent algorithms.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
              </li>
              <li>
                <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="footer-social-col">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social-icons">
              <a
                href="https://github.com/abhinashbyte04"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinash-singh-98a067406/"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/abhinashsingh04/"
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
            <p className="footer-location">
              Sahyadri SCEM, Mangaluru, KA, India
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} <strong>Abhinash Singh</strong>. All Rights Reserved. Built with React & Modern Glassmorphic CSS.
          </p>

          {/* Back To Top Button */}
          <button
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
