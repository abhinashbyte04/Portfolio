import React from 'react';
import { FolderGit2, Github, ExternalLink, Info } from './Icons';
import './Projects.css';

const Projects = ({ onSelectProject }) => {
  const projects = [
    {
      id: 'greensphere',
      title: 'GreenSphere',
      category: 'Smart Waste & Sustainability',
      badge: 'Featured GitHub Project',
      image: '/assets/images/greensphere_project.jpg',
      shortDesc: 'A Smart Segregation and Decentralized Composting system for market wet waste.',
      longDesc: 'GreenSphere is a Smart Segregation and Decentralized Composting system tailored for market wet waste. Built with Python, HTML, CSS, JavaScript, and Firebase database integration, it enables efficient waste management, real-time monitoring, and sustainable composting operations.',
      tags: ['Python', 'Firebase', 'HTML5', 'CSS3', 'JavaScript'],
      githubUrl: 'https://github.com/abhinashbyte04/GreenSphere',
      demoUrl: null,
      keyFeatures: [
        'Automated wet waste sorting and smart segregation workflow',
        'Decentralized composting monitoring with Firebase cloud sync',
        'Python-powered backend data management and API endpoints',
        'Interactive web portal for tracking waste reduction & compost metrics'
      ]
    },
    {
      id: 'calculator',
      title: 'Calculator',
      category: 'Web Application',
      badge: 'Utility Web App',
      image: '/assets/images/calculator_project.jpg',
      shortDesc: 'An interactive digital calculator application designed to perform arithmetic calculations.',
      longDesc: 'A responsive web calculator built with clean frontend technologies. Provides accurate arithmetic calculation features, key press input support, error handling, and a sleek user-friendly UI layout.',
      tags: ['JavaScript', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com/abhinashbyte04/Calculator',
      demoUrl: null,
      keyFeatures: [
        'Instant arithmetic expression evaluation with clear display',
        'Support for basic and scientific mathematical operations',
        'Responsive glassmorphic UI matching modern design aesthetics',
        'Keyboard shortcuts and click event handling for smooth usage'
      ]
    },
    {
      id: 'weather-app',
      title: 'Weather App',
      category: 'Web Application',
      badge: 'Real-Time API App',
      image: '/assets/images/weather_project.jpg',
      shortDesc: 'A real-time weather forecasting application built using JavaScript, HTML, and CSS.',
      longDesc: 'Weather App is a lightweight frontend application that communicates with live weather APIs to provide real-time atmospheric data including temperature, humidity, wind speed, and weather condition forecasts for searched locations.',
      tags: ['JavaScript', 'Weather API', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com/abhinashbyte04/weather_app_JS',
      demoUrl: null,
      keyFeatures: [
        'Real-time weather data fetching via asynchronous OpenWeather API calls',
        'Dynamic search for global locations and cities',
        'Displays temperature, humidity, wind conditions, and weather condition icons',
        'Clean responsive interface crafted with HTML5 & modern CSS3'
      ]
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Creations</span>
          </div>
          <h2 className="section-title">Projects & <span className="gradient-text">Showcase</span></h2>
          <p className="section-subtitle">
            Highlighting practical applications of artificial intelligence, software engineering, and modern web development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              {/* Project Card Media */}
              <div className="project-media">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-badge">{project.badge}</div>
                <div className="project-overlay">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => onSelectProject(project)}
                  >
                    <Info size={15} />
                    <span>View Details</span>
                  </button>
                </div>
              </div>

              {/* Project Card Info */}
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-description">{project.shortDesc}</p>

                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag-item">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-secondary project-btn"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-outline project-btn"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
