import React, { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    frontend: [
      { name: "React.js", level: 95, icon: "⚛️", color: "#61DAFB" },
      { name: "JavaScript (ES6+)", level: 92, icon: "📜", color: "#F7DF1E" },
      { name: "HTML5 & CSS3", level: 95, icon: "🎨", color: "#E34F26" },
      { name: "Tailwind CSS", level: 90, icon: "💨", color: "#38B2AC" },
      { name: "Bootstrap", level: 88, icon: "🅱️", color: "#7952B3" },
    ],
    backend: [
      { name: "Node.js", level: 90, icon: "🟢", color: "#339933" },
      { name: "Express.js", level: 88, icon: "⚡", color: "#000000" },
      { name: "MongoDB", level: 90, icon: "🍃", color: "#47A248" },
      { name: "REST APIs", level: 92, icon: "🔌", color: "#FF6B6B" },
      { name: "Authentication", level: 85, icon: "🔐", color: "#FFD166" },
    ],
    tools: [
      { name: "Git & GitHub", level: 95, icon: "📦", color: "#F05032" },
      { name: "VS Code", level: 98, icon: "💻", color: "#007ACC" },
      { name: "Postman", level: 90, icon: "📬", color: "#FF6C37" },
      { name: "Vercel/Netlify", level: 85, icon: "🚀", color: "#000000" },
    ],
  };

  const timeline = [
    {
      year: "2023 - Present",
      title: "Full Stack Developer",
      company: "Freelance",
      description:
        "Building modern web applications using MERN stack. Working with clients worldwide to deliver high-quality solutions.",
      icon: "💼",
      type: "experience",
    },
    {
      year: "July 2024 - Dec 2024",
      title: "Web Developer",
      company: "Software Synergy Solutions & Club Islamia College Peshawar",
      description:
        "Developed and maintained multiple web applications. Collaborated with design and backend teams.",
      icon: "🚀",
      type: "experience",
    },
    {
      year: "2021 - 2025",
      title: "Bachelor in Computer Science",
      company: "Islamia College Peshawar, Pakistan",
      description:
        "Focused on software engineering, web development, and database management.",
      icon: "🎓",
      type: "education",
    },
    {
      year: "2019 - 2021",
      title: "Intermediate (F.Sc)",
      company: "Islamia College Peshawar, Pakistan",
      description: "Studied Intermediate with A1 Grade. Marks: 976/1100",
      icon: "🎓",
      type: "education",
    },
    {
      year: "2017 - 2019",
      title: "Matric (Science)",
      company: "Islamia Collegiate School Peshawar, Pakistan",
      description: "Studied Matric (Science) with A1 Grade. Marks: 940/1100",
      icon: "🎓",
      type: "education",
    },
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed", icon: "🚀", delay: "0.1s" },
    { number: "30+", label: "Happy Clients", icon: "😊", delay: "0.2s" },
    { number: "3+", label: "Years Experience", icon: "📅", delay: "0.3s" },
    { number: "15+", label: "Technologies", icon: "⚡", delay: "0.4s" },
  ];

  const interests = [
    {
      icon: "💻",
      title: "Open Source",
      description: "Contributing to community projects",
    },
    { icon: "📚", title: "Learning", description: "Always exploring new tech" },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating beautiful interfaces",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Building future solutions",
    },
  ];

  return (
    <div className={`about ${isVisible ? "visible" : ""}`}>
      {/* Animated Background */}
      <div className="animated-background"></div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="profile-container">
              <div className="profile-wrapper">
                <div className="profile-gradient">
                  <img
                    src={require("./profile.jpeg")}
                    alt="Muhammad Usman"
                    className="profile-img"
                    onError={(e) => {
                      e.target.src =
                        "https://ui-avatars.com/api/?name=Muhammad+Usman&size=400&background=00d4ff&color=fff&bold=true&font-size=0.4";
                    }}
                  />
                </div>
                <div className="profile-badge">
                  <div className="badge-dot"></div>
                  <span>Available for work</span>
                </div>
              </div>
            </div>

            <div className="hero-text">
              <div className="text-wrapper">
                <h4 className="greeting">Hello, I'm</h4>
                <h1 className="name">
                  Muhammad <span>Usman</span>
                </h1>
                <div className="typewriter">
                  <span className="role">Full Stack MERN Developer</span>
                </div>
                <p className="bio">
                  I transform complex problems into simple, beautiful, and
                  intuitive designs. With 3+ years of experience in MERN stack
                  development, I create scalable web applications that deliver
                  exceptional user experiences.
                </p>
                <div className="hero-actions">
                  <a
                    href="/Muhammad-Usman-Resume.pdf"
                    download
                    className="btn btn-primary"
                  >
                    <span>Download CV</span>
                    <span className="icon">📥</span>
                  </a>
                  <a href="/contact" className="btn btn-outline">
                    <span>Let's Connect</span>
                    <span className="icon">👋</span>
                  </a>
                </div>
                <div className="social-links">
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                  <a href="mailto:your.email@example.com">Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="stat-card"
                style={{ animationDelay: item.delay }}
              >
                <div className="stat-icon">{item.icon}</div>
                <h3 className="stat-number">{item.number}</h3>
                <p className="stat-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>

          <div className="skill-filters">
            <button
              className={`filter-btn ${activeSkill === "all" ? "active" : ""}`}
              onClick={() => setActiveSkill("all")}
            >
              All Skills
            </button>
            <button
              className={`filter-btn ${activeSkill === "frontend" ? "active" : ""}`}
              onClick={() => setActiveSkill("frontend")}
            >
              Frontend
            </button>
            <button
              className={`filter-btn ${activeSkill === "backend" ? "active" : ""}`}
              onClick={() => setActiveSkill("backend")}
            >
              Backend
            </button>
            <button
              className={`filter-btn ${activeSkill === "tools" ? "active" : ""}`}
              onClick={() => setActiveSkill("tools")}
            >
              Tools
            </button>
          </div>

          <div className="skills-container">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className={`skill-category ${activeSkill === "all" || activeSkill === category ? "visible" : "hidden"}`}
              >
                <h3 className="category-title">
                  {category === "frontend"
                    ? "🎨 Frontend"
                    : category === "backend"
                      ? "⚙️ Backend"
                      : "🛠️ Tools"}
                </h3>
                <div className="skills-grid">
                  {skillList.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <div className="skill-header">
                        <span
                          className="skill-icon"
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </span>
                        <h4 className="skill-name">{skill.name}</h4>
                      </div>
                      <div className="skill-progress">
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{
                              width: `${skill.level}%`,
                              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                            }}
                          ></div>
                        </div>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Journey</h2>
            <p className="section-subtitle">
              Education & Professional Experience
            </p>
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className={`timeline-item ${item.type}`}>
                <div className="timeline-marker">
                  <div className="marker-icon">{item.icon}</div>
                  <div className="marker-line"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-year">{item.year}</span>
                    <span className={`timeline-badge ${item.type}`}>
                      {item.type === "experience" ? "Experience" : "Education"}
                    </span>
                  </div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <h4 className="timeline-company">{item.company}</h4>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="interests-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Beyond Coding</h2>
            <p className="section-subtitle">What I enjoy doing</p>
          </div>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div key={index} className="interest-card">
                <div className="interest-icon">{interest.icon}</div>
                <h3 className="interest-title">{interest.title}</h3>
                <p className="interest-description">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Let's Build Something Amazing Together!
            </h2>
            <p className="cta-subtitle">
              I'm currently available for freelance work and full-time
              opportunities.
            </p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-primary btn-large">
                <span>Start a Project</span>
                <span className="icon">🚀</span>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="btn btn-outline btn-large"
              >
                <span>Say Hello</span>
                <span className="icon">👋</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
