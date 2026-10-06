import React from 'react';
import { GraduationCap, MapPin, BookOpen, ChevronRight } from './Icons';
import './Education.css';

const Education = () => {
  const educationHistory = [
    {
      degree: 'Bachelor of Engineering (B.E.)',
      field: 'Artificial Intelligence and Machine Learning',
      institution: 'Sahyadri College of Engineering and Management',
      location: 'Mangaluru, Karnataka, India',
      status: 'Current Undergrad Program',
      icon: <GraduationCap size={24} className="timeline-icon-purple" />,
      highlights: [
        'Specializing in Artificial Intelligence, Deep Learning, and Machine Learning algorithms',
        'Coursework: Data Structures & Algorithms, Object Oriented Programming, DBMS, Operating Systems',
        'Active participant in technical hackathons, AI workshops, and coding challenges',
        'Hands-on project work in Python development and Intelligent Systems'
      ]
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">My <span className="gradient-text">Education</span></h2>
          <p className="section-subtitle">
            Solid foundation in engineering principles, artificial intelligence, and software craftsmanship.
          </p>
        </div>

        <div className="education-timeline-container">
          <div className="timeline-line" />

          {educationHistory.map((edu, index) => (
            <div key={index} className="timeline-item">
              {/* Timeline Marker Node */}
              <div className="timeline-node">
                <div className="node-pulse" />
                <div className="node-icon-wrapper">
                  {edu.icon}
                </div>
              </div>

              {/* Card content */}
              <div className="timeline-content glass-card">
                <div className="timeline-card-header">
                  <div className="degree-title-wrap">
                    <span className="status-badge">{edu.status}</span>
                    <h3 className="degree-title">{edu.degree}</h3>
                    <h4 className="field-title">{edu.field}</h4>
                  </div>
                </div>

                <div className="institution-info">
                  <div className="info-pill">
                    <BookOpen size={16} className="pill-icon" />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="info-pill">
                    <MapPin size={16} className="pill-icon" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div className="highlights-divider" />

                <div className="coursework-highlights">
                  <h5 className="highlights-heading">Key Academic Focus & Highlights:</h5>
                  <ul className="highlights-list">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="highlight-item">
                        <ChevronRight size={16} className="item-arrow" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
