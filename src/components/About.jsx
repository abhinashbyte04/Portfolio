import React from 'react';
import { User, Cpu, Code, GraduationCap, Compass } from './Icons';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap size={22} className="card-icon-purple" />,
      title: 'AI & ML Major',
      description: 'Sahyadri College of Engg. & Management'
    },
    {
      icon: <Cpu size={22} className="card-icon-cyan" />,
      title: 'Artificial Intelligence',
      description: 'ML algorithms, Data analytics & Model building'
    },
    {
      icon: <Code size={22} className="card-icon-pink" />,
      title: 'Software Development',
      description: 'Clean code architecture & Modern UI engineering'
    },
    {
      icon: <Compass size={22} className="card-icon-yellow" />,
      title: 'Problem Solver',
      description: 'Continuous learner turning ideas into solutions'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>Discover My Journey</span>
          </div>
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <p className="section-subtitle">
            Passionate about merging software craftsmanship with cutting-edge artificial intelligence.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Image with Glass Frame */}
          <div className="about-visual">
            <div className="about-image-wrapper">
              <img
                src="/assets/images/about_profile.jpg"
                alt="Abhinash Singh Coding"
                className="about-img"
              />
              <div className="about-img-overlay" />
              
              <div className="experience-badge">
                <div className="exp-number">B.E.</div>
                <div className="exp-label">AI & ML Student</div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Highlight Cards */}
          <div className="about-content">
            <div className="about-text-card glass-card">
              <h3 className="about-heading">
                Engineering Student & Tech Explorer
              </h3>

              <p className="about-paragraph">
                I'm an Artificial Intelligence and Machine Learning engineering student at Sahyadri College of Engineering and Management. I enjoy exploring new technologies, developing projects, and continuously improving my programming skills.
              </p>

              <p className="about-paragraph">
                My interests include software development, artificial intelligence, machine learning, and building practical solutions to real-world problems.
              </p>

              <p className="about-paragraph">
                I'm always eager to learn, collaborate, and turn ideas into meaningful projects.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-card glass-card">
                  <div className="highlight-icon">{item.icon}</div>
                  <div className="highlight-info">
                    <h4 className="highlight-title">{item.title}</h4>
                    <p className="highlight-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
