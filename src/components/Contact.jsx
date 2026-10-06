import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, MapPin, CheckCircle, Copy } from './Icons';
import './Contact.css';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const emailPlaceholder = 'avicare04@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailPlaceholder);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Build Something <span className="gradient-text">Together</span></h2>
          <p className="section-subtitle">
            Open for internships, software developer roles, AI/ML research collaborations, and networking.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info-card glass-card">
            <h3 className="info-card-title">Contact Information</h3>
            <p className="info-card-subtitle">
              Feel free to connect through my official social profiles or reach out directly via email.
            </p>

            <div className="contact-details-grid">
              {/* Email Box */}
              <div className="detail-item">
                <div className="detail-icon-box purple">
                  <Mail size={20} />
                </div>
                <div className="detail-text-box">
                  <span className="detail-label">Email Address</span>
                  <div className="email-copy-wrap">
                    <a href={`mailto:${emailPlaceholder}`} className="detail-value-link">
                      {emailPlaceholder}
                    </a>
                    <button 
                      className="copy-btn" 
                      onClick={handleCopyEmail}
                      title="Copy Email"
                    >
                      {copiedEmail ? <CheckCircle size={15} className="copied-check" /> : <Copy size={15} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* LinkedIn Link */}
              <div className="detail-item">
                <div className="detail-icon-box blue">
                  <Linkedin size={20} />
                </div>
                <div className="detail-text-box">
                  <span className="detail-label">LinkedIn Profile</span>
                  <a
                    href="https://www.linkedin.com/in/abhinash-singh-98a067406/"
                    target="_blank"
                    rel="noreferrer"
                    className="detail-value-link"
                  >
                    linkedin.com/in/abhinash-singh-98a067406
                  </a>
                </div>
              </div>

              {/* GitHub Link */}
              <div className="detail-item">
                <div className="detail-icon-box dark">
                  <Github size={20} />
                </div>
                <div className="detail-text-box">
                  <span className="detail-label">GitHub Workspace</span>
                  <a
                    href="https://github.com/abhinashbyte04"
                    target="_blank"
                    rel="noreferrer"
                    className="detail-value-link"
                  >
                    github.com/abhinashbyte04
                  </a>
                </div>
              </div>

              {/* Instagram Link */}
              <div className="detail-item">
                <div className="detail-icon-box pink">
                  <Instagram size={20} />
                </div>
                <div className="detail-text-box">
                  <span className="detail-label">Instagram Profile</span>
                  <a
                    href="https://www.instagram.com/abhinashsingh04/"
                    target="_blank"
                    rel="noreferrer"
                    className="detail-value-link"
                  >
                    instagram.com/abhinashsingh04
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="detail-item full-width">
                <div className="detail-icon-box cyan">
                  <MapPin size={20} />
                </div>
                <div className="detail-text-box">
                  <span className="detail-label">Current Location</span>
                  <span className="detail-value-text">
                    Sahyadri Campus, Mangaluru, Karnataka, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
