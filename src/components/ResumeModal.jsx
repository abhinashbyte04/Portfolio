import React from 'react';
import { X, Download, Printer, FileText } from './Icons';
import confetti from '../utils/confetti';
import './ResumeModal.css';

const ResumeModal = ({ onClose }) => {
  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });

    // Generate a downloadable text resume file or print view
    const resumeText = `
ABHINASH SINGH
Aspiring Software Developer & AI/ML Engineer
Location: Sahyadri College of Engineering and Management, Mangaluru, Karnataka
Email: avicare04@gmail.com | LinkedIn: linkedin.com/in/abhinash-singh-98a067406 | GitHub: github.com/abhinashbyte04

SUMMARY
Passionate Artificial Intelligence and Machine Learning engineering student with strong skills in Python, algorithm design, software development, data science, and modern web technologies. Committed to building practical, innovative tech solutions.

EDUCATION
Bachelor of Engineering (B.E.) in Artificial Intelligence and Machine Learning
Sahyadri College of Engineering and Management, Karnataka, India

TECHNICAL SKILLS
- Programming Languages: Python, C, JavaScript
- Frontend & Web: HTML5, CSS3, React, JavaScript
- Databases & Cloud: Firebase, SQL, Firestore
- Developer Tools: Git, GitHub, VS Code

KEY PROJECTS
1. GreenSphere (Python, Firebase, HTML5, CSS3, JavaScript)
   - Smart Segregation and Decentralized Composting system for market wet waste.

2. Calculator (JavaScript, HTML5, CSS3)
   - Interactive digital calculator application with responsive UI layout.

3. Weather App (JavaScript, Weather API, HTML5, CSS3)
   - Real-time weather forecasting application fetching atmospheric data.
`.trim();

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Abhinash_Singh_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="resume-modal glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="resume-modal-header">
          <div className="resume-title-group">
            <FileText size={20} className="resume-icon" />
            <h2>Abhinash Singh — Professional Curriculum Vitae</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Body Container */}
        <div className="resume-modal-body">
          <div className="resume-document">
            <div className="doc-header">
              <h1 className="doc-name">Abhinash Singh</h1>
              <p className="doc-title">Aspiring Software Developer | AI/ML Engineer</p>
              <p className="doc-contact">
                Sahyadri College of Engineering and Management, Karnataka <br />
                Email: avicare04@gmail.com | GitHub: github.com/abhinashbyte04
              </p>
            </div>

            <div className="doc-section">
              <h3 className="doc-section-heading">Professional Objective</h3>
              <p className="doc-text">
                Artificial Intelligence and Machine Learning engineering student passionate about software development, machine learning algorithms, and crafting scalable digital applications to solve real-world challenges.
              </p>
            </div>

            <div className="doc-section">
              <h3 className="doc-section-heading">Education</h3>
              <div className="doc-item">
                <div className="doc-item-title">Bachelor of Engineering (B.E.) — AI & Machine Learning</div>
                <div className="doc-item-sub">Sahyadri College of Engineering and Management, Karnataka</div>
              </div>
            </div>

            <div className="doc-section">
              <h3 className="doc-section-heading">Technical Skills</h3>
              <ul className="doc-skills-list">
                <li><strong>Languages:</strong> Python, C, JavaScript</li>
                <li><strong>Frontend & Web:</strong> HTML5, CSS3, React, JavaScript</li>
                <li><strong>Data Science & DB:</strong> Firebase, SQL, Firestore</li>
                <li><strong>Developer Tools:</strong> Git, GitHub, VS Code</li>
              </ul>
            </div>

            <div className="doc-section">
              <h3 className="doc-section-heading">Featured Projects</h3>
              <div className="doc-item">
                <div className="doc-item-title">1. GreenSphere</div>
                <div className="doc-item-desc">Smart Segregation and Decentralized Composting system for market wet waste.</div>
              </div>
              <div className="doc-item">
                <div className="doc-item-title">2. Calculator</div>
                <div className="doc-item-desc">Interactive digital calculator application built with JavaScript, HTML, and CSS.</div>
              </div>
              <div className="doc-item">
                <div className="doc-item-title">3. Weather App</div>
                <div className="doc-item-desc">Real-time weather forecasting application leveraging OpenWeather API.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="resume-modal-footer">
          <button className="btn btn-secondary" onClick={handlePrint}>
            <Printer size={18} />
            <span>Print View</span>
          </button>

          <button className="btn btn-primary" onClick={handleDownload}>
            <Download size={18} />
            <span>Download Resume (.TXT / PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
