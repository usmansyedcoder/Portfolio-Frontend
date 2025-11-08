import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../api/api';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const getProjects = async () => {
      try {
        const { data } = await fetchProjects();
        setProjects(data);
        setFilteredProjects(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError('Failed to load projects from GitHub.');
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.language?.toLowerCase() === filter.toLowerCase()
      );
      setFilteredProjects(filtered);
    }
  }, [filter, projects]);

  const languages = ['all', ...new Set(projects.map(p => p.language).filter(Boolean))];

  if (loading) {
    return (
      <div className="projects-page">
        <div className="loading-container">
          <div className="spinner-large"></div>
          <p>Loading amazing projects from GitHub...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="projects-page">
        <div className="error-container">
          <div className="error-icon">❌</div>
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="projects-page">
        <div className="empty-container">
          <div className="empty-icon">📂</div>
          <h2>No Projects Yet</h2>
          <p>Push some awesome projects to GitHub to see them here!</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`projects-page ${isVisible ? 'visible' : ''}`}>
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="projects-hero-content">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            Automatically synced from GitHub • {projects.length} Projects
          </p>
          <div className="hero-decoration">
            <div className="decoration-circle"></div>
            <div className="decoration-circle-2"></div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="filter-container">
          <h3>Filter by Technology</h3>
          <div className="filter-buttons">
            {languages.map((lang, index) => (
              <button
                key={index}
                className={`filter-btn ${filter === lang ? 'active' : ''}`}
                onClick={() => setFilter(lang)}
              >
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card-modern"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header with Gradient */}
              <div className={`project-header-modern gradient-${index % 5}`}>
                <div className="project-icon-large">📁</div>
                <div className="project-header-overlay">
                  <div className="project-quick-stats">
                    <span className="quick-stat">⭐ {project.stars}</span>
                    <span className="quick-stat">🔱 {project.forks}</span>
                  </div>
                </div>
              </div>
              
              {/* Project Body */}
              <div className="project-body-modern">
                <h3 className="project-title-modern">{project.title}</h3>
                <p className="project-description-modern">{project.description}</p>
                
                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="tech-stack-modern">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="tech-badge-modern">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-badge-modern more">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                )}
                
                {/* Project Stats */}
                <div className="project-stats-modern">
                  {project.language && (
                    <div className="stat-item">
                      <span className="stat-icon">💻</span>
                      <span className="stat-text">{project.language}</span>
                    </div>
                  )}
                  <div className="stat-item">
                    <span className="stat-icon">⭐</span>
                    <span className="stat-text">{project.stars} stars</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-icon">🔱</span>
                    <span className="stat-text">{project.forks} forks</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="project-actions-modern">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-btn primary"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    View Code
                  </a>
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="action-btn secondary"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.42-3.58-8-8-8zm.5 12.5v-2h-1v2h-2v-1h2v-2h1v2h2v1h-2zm0-5v-2h-1v2h1zm-3-1h1v1h-1v-1zm5 0h1v1h-1v-1z"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
