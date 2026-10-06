import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Send } from './Icons';
import './Navbar.css';

const Navbar = ({ activeSection, onOpenContactModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <a 
          href="#home" 
          className="navbar-logo" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
        >
          <div className="logo-icon">
            <Code2 size={22} className="logo-symbol" />
          </div>
          <span className="logo-text">
            Abhinash
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                >
                  {link.label}
                  {activeSection === link.id && <span className="active-dot" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="navbar-actions">
          <button
            className="btn btn-primary nav-cta-btn"
            onClick={() => scrollToSection('contact')}
          >
            <span>Let's Talk</span>
            <Send size={16} />
          </button>

          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.id} className="mobile-nav-item">
                <a
                  href={`#${link.id}`}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mobile-nav-item" style={{ marginTop: '1.5rem' }}>
              <button
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToSection('contact');
                }}
              >
                <span>Let's Talk</span>
                <Send size={16} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
