import React, { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState("all");
  const [activeTab, setActiveTab] = useState("experience");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    frontend: [
      { name: "React.js", level: 95, icon: "⚛️", color: "#61DAFB" },
      { name: "JavaScript (ES6+)", level: 92, icon: "📜", color: "#F7DF1E" },
      { name: "Dart", level: 85, icon: "🎯", color: "#0175C2" },
      { name: "HTML5 & CSS3", level: 95, icon: "🎨", color: "#E34F26" },
      { name: "Tailwind CSS", level: 90, icon: "💨", color: "#38B2AC" },
      { name: "Bootstrap", level: 88, icon: "🅱️", color: "#7952B3" },
      { name: "TypeScript", level: 85, icon: "🔷", color: "#3178C6" },
    ],
    backend: [
      { name: "Node.js", level: 90, icon: "🟢", color: "#339933" },
      { name: "Express.js", level: 88, icon: "⚡", color: "#000000" },
      { name: "MongoDB", level: 90, icon: "🍃", color: "#47A248" },
      { name: "Firebase", level: 90, icon: "🔥", color: "#FFA000" },
      { name: "REST APIs", level: 92, icon: "🔌", color: "#FF6B6B" },
      { name: "Authentication", level: 85, icon: "🔐", color: "#FFD166" },
      { name: "PostgreSQL", level: 80, icon: "🐘", color: "#336791" },
    ],
    aiML: [
      { name: "Machine Learning", level: 88, icon: "🤖", color: "#FF6F00" },
      { name: "Deep Learning", level: 85, icon: "🧠", color: "#9C27B0" },
      { name: "TensorFlow", level: 82, icon: "🔷", color: "#FF6F00" },
      { name: "PyTorch", level: 80, icon: "🔥", color: "#EE4C2C" },
      { name: "Computer Vision", level: 83, icon: "👁️", color: "#4285F4" },
      { name: "NLP", level: 80, icon: "🗣️", color: "#00ACC1" },
      { name: "Scikit-learn", level: 85, icon: "📊", color: "#43A047" },
      { name: "Pandas/NumPy", level: 87, icon: "📈", color: "#150458" },
      { name: "OpenCV", level: 82, icon: "📷", color: "#5C3EE8" },
      { name: "Hugging Face", level: 78, icon: "🤗", color: "#FFD21E" },
    ],
    mobile: [
      { name: "Flutter", level: 88, icon: "📱", color: "#02569B" },
      { name: "Dart", level: 85, icon: "🎯", color: "#0175C2" },
      { name: "FlutterFlow", level: 80, icon: "💧", color: "#42A5F5" },
    ],
    tools: [
      { name: "Kaggle", level: 85, icon: "📊", color: "#20BEFF" },
      { name: "Google Colab", level: 88, icon: "🧠", color: "#F9AB00" },
      { name: "Jupyter Notebooks", level: 87, icon: "📓", color: "#F37626" },
      { name: "Git & GitHub", level: 95, icon: "📦", color: "#F05032" },
      { name: "VS Code", level: 98, icon: "💻", color: "#007ACC" },
      { name: "Postman", level: 90, icon: "📬", color: "#FF6C37" },
      { name: "Vercel/Netlify", level: 85, icon: "🚀", color: "#000000" },
    ],
  };

  const timeline = [
    {
      year: "2023 - Present",
      title: "Full Stack Developer & AI Explorer",
      company: "Freelance",
      description:
        "Building modern web applications using MERN stack and integrating AI/ML solutions. Working with clients worldwide to deliver high-quality, intelligent applications. Developing Flutter mobile apps with AI capabilities.",
      icon: "🚀",
      type: "experience",
      tags: ["MERN", "AI/ML", "Flutter"],
    },
    {
      year: "July 2024 - Dec 2024",
      title: "Web Developer",
      company: "Software Synergy Solutions & Club Islamia College Peshawar",
      description:
        "Developed and maintained multiple web applications. Collaborated with design and backend teams. Implemented responsive designs and optimized performance.",
      icon: "💻",
      type: "experience",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      year: "2023 - Present",
      title: "AI/ML Researcher",
      company: "Self-Directed Learning",
      description:
        "Exploring machine learning algorithms, deep learning architectures, and computer vision. Building projects with TensorFlow, PyTorch, and implementing NLP solutions.",
      icon: "🤖",
      type: "experience",
      tags: ["TensorFlow", "PyTorch", "Computer Vision"],
    },
    {
      year: "2022 - Present",
      title: "Flutter Developer",
      company: "Personal Projects",
      description:
        "Developing cross-platform mobile applications with Flutter and Dart. Integrating Firebase, REST APIs, and exploring AI-powered mobile solutions.",
      icon: "📱",
      type: "experience",
      tags: ["Flutter", "Dart", "Firebase"],
    },
    {
      year: "2021 - 2025",
      title: "Bachelor in Computer Science",
      company: "Islamia College Peshawar, Pakistan",
      description:
        "Focused on software engineering, web development, database management, and artificial intelligence. CGPA: 3.8/4.0",
      icon: "🎓",
      type: "education",
      tags: ["CS Fundamentals", "AI/ML", "Web Dev"],
    },
    {
      year: "2019 - 2021",
      title: "Intermediate (F.Sc)",
      company: "Islamia College Peshawar, Pakistan",
      description: "Studied Intermediate with A1 Grade. Marks: 976/1100",
      icon: "📚",
      type: "education",
      tags: ["Pre-Engineering"],
    },
    {
      year: "2017 - 2019",
      title: "Matric (Science)",
      company: "Islamia Collegiate School Peshawar, Pakistan",
      description: "Studied Matric (Science) with A1 Grade. Marks: 940/1100",
      icon: "🔬",
      type: "education",
      tags: ["Science"],
    },
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed", icon: "🚀", delay: "0.1s" },
    { number: "30+", label: "Happy Clients", icon: "😊", delay: "0.2s" },
    { number: "15+", label: "AI/ML Projects", icon: "🤖", delay: "0.3s" },
    { number: "5+", label: "Flutter Apps", icon: "📱", delay: "0.4s" },
    { number: "3+", label: "Years Experience", icon: "📅", delay: "0.5s" },
    { number: "20+", label: "Technologies", icon: "⚡", delay: "0.6s" },
  ];

  const interests = [
    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description: "Exploring neural networks and building intelligent systems",
    },
    {
      icon: "📱",
      title: "Flutter Development",
      description: "Creating beautiful cross-platform mobile apps",
    },
    {
      icon: "🧠",
      title: "Deep Learning",
      description: "Diving into CNNs, RNNs, and Transformers",
    },
    {
      icon: "👁️",
      title: "Computer Vision",
      description: "Building systems that can see and understand",
    },
    {
      icon: "🗣️",
      title: "NLP",
      description: "Teaching machines to understand human language",
    },
    {
      icon: "💻",
      title: "Open Source",
      description: "Contributing to community projects",
    },
  ];

  const aiExpertise = [
    {
      title: "Machine Learning",
      description:
        "Supervised & Unsupervised Learning, Regression, Classification",
      icon: "🤖",
      color: "#FF6F00",
    },
    {
      title: "Deep Learning",
      description: "Neural Networks, CNNs, RNNs, Transformers, GANs",
      icon: "🧠",
      color: "#9C27B0",
    },
    {
      title: "Computer Vision",
      description: "Image Classification, Object Detection, Face Recognition",
      icon: "👁️",
      color: "#4285F4",
    },
    {
      title: "NLP",
      description: "Text Analysis, Sentiment Analysis, Language Models",
      icon: "🗣️",
      color: "#00ACC1",
    },
    {
      title: "Flutter AI Integration",
      description: "Mobile apps with on-device ML, TensorFlow Lite",
      icon: "📱",
      color: "#02569B",
    },
    {
      title: "MLOps",
      description: "Model Deployment, API Integration, Model Monitoring",
      icon: "🚀",
      color: "#FF6B6B",
    },
  ];

  return (
    <div className={`about ${isVisible ? "visible" : ""}`}>
      {/* Animated Background */}
      <div className="animated-background">
        <div className="gradient-sphere"></div>
        <div className="gradient-sphere-2"></div>
        <div className="gradient-sphere-3"></div>
      </div>

      {/* Hero Section */}
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
                  <span>Available for AI/ML & Flutter Projects</span>
                </div>
                {/* Tech floating icons removed - cleaner profile image */}
              </div>
            </div>

            <div className="hero-text">
              <div className="text-wrapper">
                <h4 className="greeting">Hello, I'm</h4>
                <h1 className="name">
                  Muhammad <span>Usman</span>
                </h1>
                <div className="typewriter">
                  <span className="role">
                    Full Stack Developer | Flutter | AI/ML Explorer
                  </span>
                </div>
                <p className="bio">
                  Every line of code tells a story. I craft narratives through
                  the MERN stack and Flutter, turning complex requirements into
                  seamless digital experiences. With 3+ years of building
                  production-ready applications and exploring AI/ML, I'm now
                  pushing boundaries at the intersection of web development,
                  mobile apps, and machine learning.
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
                  <a
                    href="https://linkedin.com/in/muhammad-usman-islamian"
                    className="btn btn-outline"
                  >
                    <span>Let's Connect</span>
                    <span className="icon">👋</span>
                  </a>
                </div>
                <div className="social-links">
                  <a
                    href="https://github.com/usmansyedcoder"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="social-icon">📦</span>
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/muhammad-usman-islamian"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="social-icon">🔗</span>
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/@Muhammad_usmane"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="social-icon">🐦</span>
                    Twitter
                  </a>
                  <a href="mailto:usmansyed.peshawar@gmail.com">
                    <span className="social-icon">📧</span>
                    Email
                  </a>
                  <a
                    href="https://kaggle.com/muhammadusman"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="social-icon">📊</span>
                    Kaggle
                  </a>
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

      {/* AI/ML Expertise Highlight Section */}
      <section className="ai-expertise-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="ai-icon">🤖</span> AI & ML Expertise
              <span className="ai-icon">🧠</span>
            </h2>
            <p className="section-subtitle">
              Exploring the frontiers of artificial intelligence
            </p>
          </div>

          <div className="ai-expertise-grid">
            {aiExpertise.map((item, index) => (
              <div
                key={index}
                className="ai-expertise-card"
                style={{ "--card-color": item.color }}
              >
                <div className="expertise-icon">{item.icon}</div>
                <h3 className="expertise-title">{item.title}</h3>
                <p className="expertise-description">{item.description}</p>
                <div className="expertise-glow"></div>
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
              className={`filter-btn ${activeSkill === "aiML" ? "active" : ""}`}
              onClick={() => setActiveSkill("aiML")}
            >
              AI/ML
            </button>
            <button
              className={`filter-btn ${activeSkill === "mobile" ? "active" : ""}`}
              onClick={() => setActiveSkill("mobile")}
            >
              Mobile
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
                    ? "🎨 Frontend Development"
                    : category === "backend"
                      ? "⚙️ Backend Development"
                      : category === "aiML"
                        ? "🤖 AI & Machine Learning"
                        : category === "mobile"
                          ? "📱 Mobile Development"
                          : "🛠️ Tools & Technologies"}
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

      {/* Timeline Section with Tabs */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Journey</h2>
            <p className="section-subtitle">
              Education & Professional Experience
            </p>
          </div>

          <div className="timeline-tabs">
            <button
              className={`tab-btn ${activeTab === "experience" ? "active" : ""}`}
              onClick={() => setActiveTab("experience")}
            >
              <span className="tab-icon">💼</span>
              Experience
            </button>
            <button
              className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
              onClick={() => setActiveTab("education")}
            >
              <span className="tab-icon">🎓</span>
              Education
            </button>
          </div>

          <div className="timeline">
            {timeline
              .filter((item) => item.type === activeTab)
              .map((item, index) => (
                <div key={index} className={`timeline-item ${item.type}`}>
                  <div className="timeline-marker">
                    <div className="marker-icon">{item.icon}</div>
                    <div className="marker-line"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <span className="timeline-year">{item.year}</span>
                      <span className={`timeline-badge ${item.type}`}>
                        {item.type === "experience"
                          ? "Experience"
                          : "Education"}
                      </span>
                    </div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <h4 className="timeline-company">{item.company}</h4>
                    <p className="timeline-description">{item.description}</p>
                    {item.tags && (
                      <div className="timeline-tags">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="timeline-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
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
            <p className="section-subtitle">What I'm passionate about</p>
          </div>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div key={index} className="interest-card">
                <div className="interest-icon">{interest.icon}</div>
                <h3 className="interest-title">{interest.title}</h3>
                <p className="interest-description">{interest.description}</p>
                <div className="interest-glow"></div>
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
              I'm currently available for AI/ML projects, Flutter development,
              and full-stack opportunities.
            </p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-primary btn-large">
                <span>Start a Project</span>
                <span className="icon">🚀</span>
              </a>
              <a
                href="mailto:usmansyed.peshawar@gmail.com"
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
