import { useState } from 'react';
import './PortfolioApp.css';

export default function PortfolioApp() {
  const [activeTab, setActiveTab] = useState('about');

  const projects = [
    { name: 'E-Commerce App', desc: 'Full stack marketplace platform', color: '#FF6B6B' },
    { name: 'Social Network', desc: 'Real-time chat and social features', color: '#4ECDC4' },
    { name: 'AI Dashboard', desc: 'Analytics dashboard with charts', color: '#45B7D1' },
    { name: 'Mobile App', desc: 'Cross-platform mobile application', color: '#FFA502' },
  ];

  const skills = ['React', 'JavaScript', 'CSS3', 'Node.js', 'MongoDB', 'Firebase', 'Git', 'UI/UX'];

  return (
    <div className="portfolio-container">
      <div className="portfolio-card">
        <div className="portfolio-header">
          <div className="avatar">💼</div>
          <h2>John Developer</h2>
          <p>Full Stack Developer & UI Designer</p>
        </div>

        <div className="portfolio-tabs">
          <button className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>
            About
          </button>
          <button className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>
            Projects
          </button>
          <button className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>
            Skills
          </button>
        </div>

        <div className="portfolio-content">
          {activeTab === 'about' && (
            <div className="content-section">
              <h3>About Me</h3>
              <p>I'm a passionate developer with 5+ years of experience building beautiful and functional web applications. I love creating intuitive user interfaces and solving complex problems.</p>
              <div className="social-links">
                <button>Twitter</button>
                <button>GitHub</button>
                <button>LinkedIn</button>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="projects-grid">
              {projects.map((project, i) => (
                <div key={i} className="project-card" style={{ borderTopColor: project.color }}>
                  <h4>{project.name}</h4>
                  <p>{project.desc}</p>
                  <button>View Project →</button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <div key={i} className="skill-tag">{skill}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
