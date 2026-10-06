import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Download, ArrowRight, Sparkles, Terminal } from './Icons';
import './Hero.css';

const Hero = ({ onOpenResumeModal }) => {
  const titles = [
    'AI/ML Enthusiast',
    'Python Developer',
    'Frontend Developer',
    'Problem Solver'
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(90);

        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, typingSpeed]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section section">
      {/* Glow effects */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      <div className="container hero-container">
        {/* Left Column: Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} className="badge-sparkle" />
            <span>Open for Software & AI/ML Opportunities</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-hero">Abhinash Singh</span>
          </h1>

          <h2 className="hero-subtitle">
            Aspiring Software Developer <span className="text-divider">|</span> AIML Engineer
          </h2>

          {/* Animated Cycling Text */}
          <div className="typing-container">
            <Terminal size={20} className="typing-icon" />
            <span className="typing-static">I am a </span>
            <span className="typing-dynamic">{displayText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-quote">
            "I'm passionate about building innovative solutions through technology, programming, and artificial intelligence."
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={scrollToProjects}>
              <span>Explore My Work</span>
              <ArrowRight size={18} />
            </button>

            <button className="btn btn-secondary" onClick={onOpenResumeModal}>
              <Download size={18} />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Social Icons */}
          <div className="hero-socials">
            <span className="socials-label">Connect with me:</span>
            <div className="social-links">
              <a
                href="https://github.com/abhinashbyte04"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinash-singh-98a067406/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/abhinashsingh04/"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Instagram Profile"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Profile Visual */}
        <div className="hero-visual">
          <div className="avatar-frame">
            <div className="avatar-glow-ring" />
            <div className="avatar-image-container">
              <img
                src="/assets/images/hero_profile.jpg"
                alt="Abhinash Singh Profile"
                className="hero-avatar-img"
              />
            </div>

            {/* Floating Info Badges */}
            <div className="floating-badge badge-top-right animate-float">
              <div className="badge-icon purple">🧠</div>
              <div className="badge-text">
                <span className="badge-title">AI & ML Focus</span>
                <span className="badge-sub">Sahyadri SCEM</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left animate-float" style={{ animationDelay: '-2s' }}>
              <div className="badge-icon blue">⚡</div>
              <div className="badge-text">
                <span className="badge-title">Python & Web</span>
                <span className="badge-sub">Algorithmic Dev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
