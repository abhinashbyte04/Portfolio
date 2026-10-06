import React, { useState, useEffect } from 'react';
import BackgroundParticles from './components/BackgroundParticles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-root">
      {/* Dynamic Background Network Particles */}
      <BackgroundParticles />

      {/* Fixed Navbar */}
      <Navbar 
        activeSection={activeSection} 
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenResumeModal={() => setIsResumeModalOpen(true)} 
        />
        <About />
        <Skills />
        <Projects 
          onSelectProject={(project) => setSelectedProject(project)} 
        />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {isResumeModalOpen && (
        <ResumeModal 
          onClose={() => setIsResumeModalOpen(false)} 
        />
      )}
    </div>
  );
}

export default App;
