import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Layout, 
  Database, 
  Wrench, 
  CheckCircle2
} from './Icons';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Programming Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'datascience', label: 'Data Science' },
    { id: 'tools', label: 'Tools & IDEs' }
  ];

  const skillGroups = [
    {
      categoryId: 'programming',
      categoryName: 'Programming Languages',
      icon: <Terminal size={22} className="cat-icon-purple" />,
      skills: [
        { name: 'Python', icon: '🐍', tag: 'Primary Language', desc: 'Data structures, AI/ML models, Scripting, Automation' },
        { name: 'C', icon: '⚡', tag: 'Core Fundamentals', desc: 'Memory management, Pointers, Algorithms' },
        { name: 'JavaScript', icon: '🟨', tag: 'Web Logic', desc: 'ES6+, Asynchronous JS, DOM manipulation' }
      ]
    },
    {
      categoryId: 'frontend',
      categoryName: 'Frontend Development',
      icon: <Layout size={22} className="cat-icon-cyan" />,
      skills: [
        { name: 'HTML5', icon: '🌐', tag: 'Markup', desc: 'Semantic HTML, Web Accessibility, SEO best practices' },
        { name: 'CSS3', icon: '🎨', tag: 'Styling', desc: 'Flexbox, Grid, Glassmorphism, Animations, Dark themes' },
        { name: 'React', icon: '⚛️', tag: 'Framework', desc: 'Component architecture, Hooks, State management' }
      ]
    },
    {
      categoryId: 'datascience',
      categoryName: 'Data Science & AI/ML',
      icon: <Database size={22} className="cat-icon-pink" />,
      skills: [
        { name: 'NumPy', icon: '🔢', tag: 'Numerical Computing', desc: 'Array operations, Vectorization, Matrix computation' },
        { name: 'Pandas', icon: '🐼', tag: 'Data Wrangling', desc: 'Dataframes, Cleaning, Analysis, Feature extraction' },
        { name: 'SQL', icon: '🗄️', tag: 'Relational DB', desc: 'Database querying, Joins, Aggregation, Schema design' }
      ]
    },
    {
      categoryId: 'tools',
      categoryName: 'Developer Tools & Environments',
      icon: <Wrench size={22} className="cat-icon-yellow" />,
      skills: [
        { name: 'Git', icon: '🌿', tag: 'Version Control', desc: 'Branching, Merging, Commits, Version history' },
        { name: 'GitHub', icon: '🐙', tag: 'Collaboration', desc: 'Repositories, Pull requests, Open source, Actions' },
        { name: 'VS Code', icon: '💻', tag: 'IDE', desc: 'Extensions, Debugging, Terminal integration' }
      ]
    }
  ];

  const filteredGroups = activeTab === 'all' 
    ? skillGroups 
    : skillGroups.filter(g => g.categoryId === activeTab);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={14} />
            <span>Tech Toolkit</span>
          </div>
          <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">
            A breakdown of my technical stack across programming, frontend engineering, data science, and modern tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`skill-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-group-container">
          {filteredGroups.map((group) => (
            <div key={group.categoryId} className="skill-category-card glass-card">
              <div className="category-header">
                <div className="category-icon-box">{group.icon}</div>
                <h3 className="category-title">{group.categoryName}</h3>
              </div>

              <div className="skills-grid">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-badge-card">
                    <div className="skill-top">
                      <span className="skill-emoji">{skill.icon}</span>
                      <div className="skill-name-wrap">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-tag">{skill.tag}</span>
                      </div>
                    </div>
                    <p className="skill-desc">{skill.desc}</p>
                    <div className="skill-footer">
                      <CheckCircle2 size={14} className="check-icon" />
                      <span>Proficient Concept</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
