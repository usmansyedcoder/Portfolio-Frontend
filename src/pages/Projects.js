import React, { useState, useEffect } from "react";
import { fetchProjects } from "../api/api";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const getProjects = async () => {
      try {
        const { data } = await fetchProjects();

        // Enhance projects with AI/ML and Flutter categories
        const enhancedData = data.map((project) => {
          // Add category based on language or technologies
          let category = "web";
          let projectType = [];

          if (project.language?.toLowerCase() === "python") {
            if (
              project.description?.toLowerCase().includes("machine learning") ||
              project.description?.toLowerCase().includes("deep learning") ||
              project.description?.toLowerCase().includes("ai")
            ) {
              category = "ai-ml";
              projectType.push("AI/ML");
            }
          }

          if (
            project.language?.toLowerCase() === "dart" ||
            project.name?.toLowerCase().includes("flutter")
          ) {
            category = "flutter";
            projectType.push("Flutter");
          }

          if (
            project.description?.toLowerCase().includes("tensorflow") ||
            project.description?.toLowerCase().includes("pytorch")
          ) {
            category = "deep-learning";
            projectType.push("Deep Learning");
          }

          if (
            project.description?.toLowerCase().includes("computer vision") ||
            project.description?.toLowerCase().includes("opencv")
          ) {
            category = "computer-vision";
            projectType.push("Computer Vision");
          }

          if (
            project.description?.toLowerCase().includes("nlp") ||
            project.description?.toLowerCase().includes("natural language")
          ) {
            category = "nlp";
            projectType.push("NLP");
          }

          return {
            ...project,
            category,
            projectType:
              projectType.length > 0 ? projectType : ["Web Development"],
          };
        });

        setProjects(enhancedData);
        setFilteredProjects(enhancedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects from GitHub.");
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projects);
    } else if (filter === "ai-ml") {
      const filtered = projects.filter(
        (project) =>
          project.category === "ai-ml" ||
          project.category === "deep-learning" ||
          project.category === "computer-vision" ||
          project.category === "nlp" ||
          project.projectType?.includes("AI/ML") ||
          project.projectType?.includes("Deep Learning"),
      );
      setFilteredProjects(filtered);
    } else if (filter === "flutter") {
      const filtered = projects.filter(
        (project) =>
          project.category === "flutter" ||
          project.language?.toLowerCase() === "dart" ||
          project.projectType?.includes("Flutter"),
      );
      setFilteredProjects(filtered);
    } else if (filter === "deep-learning") {
      const filtered = projects.filter(
        (project) =>
          project.category === "deep-learning" ||
          project.projectType?.includes("Deep Learning"),
      );
      setFilteredProjects(filtered);
    } else {
      const filtered = projects.filter(
        (project) => project.language?.toLowerCase() === filter.toLowerCase(),
      );
      setFilteredProjects(filtered);
    }
  }, [filter, projects]);

  const languages = [
    "all",
    "ai-ml",
    "flutter",
    "deep-learning",
    ...new Set(projects.map((p) => p.language).filter(Boolean)),
  ];

  // Get appropriate icon based on project type
  const getProjectIcon = (project, index) => {
    const language = project.language?.toLowerCase();
    const category = project.category;
    const projectType = project.projectType || [];

    if (category === "flutter" || language?.includes("dart")) {
      return (
        <div className="tech-icon-wrapper flutter">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.314 18.338L10.976 22 4 15.024 6.5 12.5 14.314 18.338zM20.207 6.5L14.5 12.207 10.476 8.182 13.293 5.365 20.207 6.5z" />
          </svg>
        </div>
      );
    } else if (category === "ai-ml" || projectType.includes("AI/ML")) {
      return (
        <div className="tech-icon-wrapper ai-ml">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
          </svg>
        </div>
      );
    } else if (
      category === "deep-learning" ||
      projectType.includes("Deep Learning")
    ) {
      return (
        <div className="tech-icon-wrapper deep-learning">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16v-2l-8-5V3.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </div>
      );
    } else if (category === "computer-vision" || language?.includes("opencv")) {
      return (
        <div className="tech-icon-wrapper computer-vision">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
          </svg>
        </div>
      );
    } else if (category === "nlp") {
      return (
        <div className="tech-icon-wrapper nlp">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z" />
          </svg>
        </div>
      );
    } else if (language?.includes("javascript") || language?.includes("js")) {
      return (
        <div className="tech-icon-wrapper js">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.337-.404-.482-.586-.621-.378-.27-.93-.42-1.42-.42-.825.0-1.47.345-1.875.885-.596.78-.675 1.965-.195 2.895.375.69 1.05 1.14 2.46 1.62.705.24 1.125.525 1.305.9.27.57.075 1.305-.435 1.68-.375.27-.885.405-1.755.405-1.185 0-1.815-.27-2.385-.885l-1.38 1.47c.45.45 1.035.81 1.755 1.125 1.005.39 2.055.57 3.12.57 1.8 0 3.15-.42 4.065-1.26.9-.825 1.26-2.01 1.065-3.315zM8.309 5.49c-.18.33-.345.69-.48 1.08-.135.39-.24.81-.315 1.26-.075.45-.12.915-.135 1.41-.015.48-.015.975 0 1.485.015.51.045 1.02.09 1.53.045.51.105 1.005.18 1.485.075.48.18.93.315 1.35.135.42.3.795.495 1.125.195.33.435.615.72.855.285.24.63.435 1.035.585.405.15.885.225 1.44.225.57 0 1.065-.105 1.485-.315.42-.21.765-.495 1.035-.855.27-.36.465-.78.585-1.26.12-.48.18-1.005.18-1.575h-3.015v-1.815h4.905v.945c0 1.005-.18 1.905-.54 2.7-.36.795-.885 1.47-1.575 2.025-.69.555-1.53.975-2.52 1.26-.99.285-2.115.42-3.375.405-1.245-.015-2.34-.18-3.285-.525-.945-.345-1.71-.825-2.295-1.44-.585-.615-1.005-1.35-1.26-2.205-.255-.855-.375-1.815-.36-2.88.015-1.065.18-2.115.495-3.15.315-1.035.795-1.995 1.44-2.88.645-.885 1.47-1.62 2.475-2.205 1.005-.585 2.205-1.005 3.6-1.26 1.395-.255 2.97-.3 4.725-.135 1.755.165 3.345.57 4.77 1.215 1.425.645 2.58 1.53 3.465 2.655l-2.025 1.755c-.675-.825-1.485-1.455-2.43-1.89-.945-.435-2.025-.66-3.24-.675-1.215-.015-2.25.18-3.105.585-.855.405-1.515.975-1.98 1.71z" />
          </svg>
        </div>
      );
    } else if (language?.includes("python")) {
      return (
        <div className="tech-icon-wrapper python">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </div>
      );
    } else {
      return (
        <div className="tech-icon-wrapper default">
          <svg className="tech-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" />
          </svg>
        </div>
      );
    }
  };

  // Get filter button label
  const getFilterLabel = (filter) => {
    switch (filter) {
      case "ai-ml":
        return "AI/ML";
      case "flutter":
        return "Flutter/Dart";
      case "deep-learning":
        return "Deep Learning";
      default:
        return filter.charAt(0).toUpperCase() + filter.slice(1);
    }
  };

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
    <div className={`projects-page ${isVisible ? "visible" : ""}`}>
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
                className={`filter-btn ${filter === lang ? "active" : ""} ${lang === "ai-ml" ? "ai-filter" : ""} ${lang === "flutter" ? "flutter-filter" : ""} ${lang === "deep-learning" ? "dl-filter" : ""}`}
                onClick={() => setFilter(lang)}
              >
                {getFilterLabel(lang)}
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
              className={`project-card-modern ${project.category}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div
                className={`project-header-modern gradient-${index % 5} ${project.category}`}
              >
                <div className="project-icon-container">
                  {getProjectIcon(project, index)}
                </div>
                {project.projectType && (
                  <div className="project-type-badge">
                    {project.projectType[0]}
                  </div>
                )}
              </div>

              {/* Project Body */}
              <div className="project-body-modern">
                <div className="project-header-clean">
                  <h3 className="project-title-modern">{project.title}</h3>
                  {project.language && (
                    <span className="language-badge">{project.language}</span>
                  )}
                </div>

                <p className="project-description-modern">
                  {project.description || "No description available"}
                </p>

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="tech-stack-modern">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="tech-badge-modern">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-badge-modern more">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="project-actions-modern">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn primary"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
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
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.42-3.58-8-8-8zm.5 12.5v-2h-1v2h-2v-1h2v-2h1v2h2v1h-2zm0-5v-2h-1v2h1zm-3-1h1v1h-1v-1zm5 0h1v1h-1v-1z" />
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
