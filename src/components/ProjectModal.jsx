import React from 'react';
import { X, Github, ExternalLink, CheckCircle2 } from './Icons';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="project-modal glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Header Bar */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-category">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div className="modal-media">
            <img src={project.image} alt={project.title} className="modal-img" />
          </div>

          <div className="modal-details">
            <h3 className="details-heading">Project Overview</h3>
            <p className="details-text">{project.longDesc}</p>

            {/* Key Features */}
            {project.keyFeatures && (
              <div className="features-section">
                <h4 className="features-heading">Key Features & Highlights</h4>
                <ul className="features-list">
                  {project.keyFeatures.map((feature, fIdx) => (
                    <li key={fIdx} className="feature-item">
                      <CheckCircle2 size={16} className="feature-check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div className="tech-stack-section">
              <h4 className="features-heading">Technologies Used</h4>
              <div className="modal-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="modal-tag-item">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <Github size={18} />
            <span>View Source Code</span>
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <ExternalLink size={18} />
              <span>Launch Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
