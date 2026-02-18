import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.jpeg";
import "./Home.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

 

  return (
    <div className="home">
      {/* Hero Section */}
      <section className={`hero ${isVisible ? "visible" : ""}`}>
        <div className="hero-content">
          <div className="hero-text">
            <span className="greeting">Hi there, I'm</span>
            <h1 className="name">Muhammad Usman</h1>
            <h2 className="title">
              <span className="typed-text">
                Full-Stack Developer | Flutter | MERN | AI/ML Enthusiast
              </span>
            </h2>
            <p className="description">
              Transforming complex problems into seamless digital solutions. I
              specialize in building robust full-stack applications with the
              MERN stack and cross-platform mobile apps with Flutter, while
              exploring the frontiers of machine and deep learning to create
              intelligent, future-ready systems.
            </p>
            <div className="cta-buttons">
              <Link to="/projects" className="btn btn-primary">
                <span>View My Work</span>
                <span className="btn-icon">→</span>
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <span>Get In Touch</span>
                <span className="btn-icon">✉️</span>
              </Link>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/usmansyedcoder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <div className="social-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path
                      fill="currentColor"
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/muhammad-usman-islamian"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <div className="social-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path
                      fill="currentColor"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com/@Muhammad_usmane"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <div className="social-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path
                      fill="currentColor"
                      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="hero-image">
            <div className="image-container">
              <img
                src={profileImage}
                alt="Muhammad Usman"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tech Stack</h2>
            <p className="section-subtitle">Technologies I work with</p>
            <div className="section-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dot"></div>
              <div className="decoration-line"></div>
            </div>
          </div>

          <div className="tech-stack-container">
            {/* MERN Stack Highlight */}
            <div className="mern-stack-highlight">
              <div className="mern-title">
                <span className="mern-badge">MERN Stack</span>
                <span className="mern-expertise">Expert Level</span>
              </div>
              <div className="mern-grid">
                <div className="mern-card mongo-card">
                  <div className="mern-icon">🍃</div>
                  <div className="mern-info">
                    <h3>MongoDB</h3>
                    <div className="skill-level">
                      <div className="level-bar">
                        <div
                          className="level-progress"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="level-text">90%</span>
                    </div>
                  </div>
                </div>

                <div className="mern-card express-card">
                  <div className="mern-icon">⚡</div>
                  <div className="mern-info">
                    <h3>Express.js</h3>
                    <div className="skill-level">
                      <div className="level-bar">
                        <div
                          className="level-progress"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                      <span className="level-text">85%</span>
                    </div>
                  </div>
                </div>

                <div className="mern-card react-card">
                  <div className="mern-icon">⚛️</div>
                  <div className="mern-info">
                    <h3>React</h3>
                    <div className="skill-level">
                      <div className="level-bar">
                        <div
                          className="level-progress"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                      <span className="level-text">95%</span>
                    </div>
                  </div>
                </div>

                <div className="mern-card node-card">
                  <div className="mern-icon">🟢</div>
                  <div className="mern-info">
                    <h3>Node.js</h3>
                    <div className="skill-level">
                      <div className="level-bar">
                        <div
                          className="level-progress"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="level-text">90%</span>
                    </div>
                  </div>
                </div>

                <div className="mern-card firebase-card">
                  <div className="mern-icon">🔥</div>
                  <div className="mern-info">
                    <h3>Firebase</h3>
                    <div className="skill-level">
                      <div className="level-bar">
                        <div
                          className="level-progress"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                      <span className="level-text">88%</span>
                    </div>
                  </div>
                </div>

                <div className="mern-card vite-card">
                  <div className="mern-icon">⚡</div>
                  <div className="mern-info">
                    <h3>Vite</h3>
                    <div className="skill-level">
                      <div className="level-bar">
                        <div
                          className="level-progress"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                      <span className="level-text">92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Technologies */}
            <div className="other-tech-section">
              <h3 className="other-tech-title">Other Technologies</h3>
              <div className="tech-bubble-grid">
                <div
                  className="tech-bubble"
                  style={{ "--tech-color": "#02569B" }}
                >
                  <div className="bubble-icon">📱</div>
                  <span className="bubble-text">Flutter</span>
                  <div className="bubble-glow"></div>
                </div>

                <div
                  className="tech-bubble"
                  style={{ "--tech-color": "#0175C2" }}
                >
                  <div className="bubble-icon">🎯</div>
                  <span className="bubble-text">Dart</span>
                  <div className="bubble-glow"></div>
                </div>

                <div
                  className="tech-bubble"
                  style={{ "--tech-color": "#3776AB" }}
                >
                  <div className="bubble-icon">🐍</div>
                  <span className="bubble-text">Python</span>
                  <div className="bubble-glow"></div>
                </div>

                <div
                  className="tech-bubble"
                  style={{ "--tech-color": "#F7DF1E" }}
                >
                  <div className="bubble-icon">📜</div>
                  <span className="bubble-text">JavaScript</span>
                  <div className="bubble-glow"></div>
                </div>

                <div
                  className="tech-bubble"
                  style={{ "--tech-color": "#E34F26" }}
                >
                  <div className="bubble-icon">🌐</div>
                  <span className="bubble-text">HTML5</span>
                  <div className="bubble-glow"></div>
                </div>

                <div
                  className="tech-bubble"
                  style={{ "--tech-color": "#1572B6" }}
                >
                  <div className="bubble-icon">🎨</div>
                  <span className="bubble-text">CSS3</span>
                  <div className="bubble-glow"></div>
                </div>

                <div
                  className="tech-bubble"
                  style={{ "--tech-color": "#339933" }}
                >
                  <div className="bubble-icon">📊</div>
                  <span className="bubble-text">MySQL</span>
                  <div className="bubble-glow"></div>
                </div>

                <div
                  className="tech-bubble"
                  style={{ "--tech-color": "#FF6F00" }}
                >
                  <div className="bubble-icon">🧠</div>
                  <span className="bubble-text">TensorFlow</span>
                  <div className="bubble-glow"></div>
                </div>

                <div
                  className="tech-bubble"
                  style={{ "--tech-color": "#FCC624" }}
                >
                  <div className="bubble-icon">🔥</div>
                  <span className="bubble-text">PyTorch</span>
                  <div className="bubble-glow"></div>
                </div>

                <div
                  className="tech-bubble"
                  style={{ "--tech-color": "#43A047" }}
                >
                  <div className="bubble-icon">🤖</div>
                  <span className="bubble-text">Scikit-learn</span>
                  <div className="bubble-glow"></div>
                </div>

                <div
                  className="tech-bubble"
                  style={{ "--tech-color": "#E34F26" }}
                >
                  <div className="bubble-icon">📊</div>
                  <span className="bubble-text">Pandas</span>
                  <div className="bubble-glow"></div>
                </div>

                <div
                  className="tech-bubble"
                  style={{ "--tech-color": "#150458" }}
                >
                  <div className="bubble-icon">🔢</div>
                  <span className="bubble-text">NumPy</span>
                  <div className="bubble-glow"></div>
                </div>

                <div
                  className="tech-bubble"
                  style={{ "--tech-color": "#3776AB" }}
                >
                  <div className="bubble-icon">📈</div>
                  <span className="bubble-text">Matplotlib</span>
                  <div className="bubble-glow"></div>
                </div>

                <div
                  className="tech-bubble"
                  style={{ "--tech-color": "#FF6F00" }}
                >
                  <div className="bubble-icon">🗣️</div>
                  <span className="bubble-text">NLP</span>
                  <div className="bubble-glow"></div>
                </div>

                <div
                  className="tech-bubble"
                  style={{ "--tech-color": "#4285F4" }}
                >
                  <div className="bubble-icon">👁️</div>
                  <span className="bubble-text">OpenCV</span>
                  <div className="bubble-glow"></div>
                </div>

                <div
                  className="tech-bubble"
                  style={{ "--tech-color": "#FF6F00" }}
                >
                  <div className="bubble-icon">🤖</div>
                  <span className="bubble-text">Keras</span>
                  <div className="bubble-glow"></div>
                </div>

                <div
                  className="tech-bubble"
                  style={{ "--tech-color": "#0175C2" }}
                >
                  <div className="bubble-icon">📱</div>
                  <span className="bubble-text">FlutterFlow</span>
                  <div className="bubble-glow"></div>
                </div>
              </div>
            </div>

            {/* AI & Machine Learning Section */}
            {/* AI & Machine Learning Section */}
            <div className="ai-ml-section">
              <div className="ai-ml-header">
                <h3 className="ai-ml-title">
                  <span className="ai-icon">🧠</span>
                  AI & Machine Learning
                  <span className="ai-icon">🤖</span>
                </h3>
                <p className="ai-ml-subtitle">
                  Exploring the frontiers of artificial intelligence to build
                  smarter applications
                </p>
              </div>

              <div className="ai-ml-grid">
                {/* Machine Learning Card */}
                <div className="ai-card ml-card">
                  <div className="ai-card-inner">
                    <div className="ai-card-front">
                      <div className="ai-icon-large">🤖</div>
                      <h4>Machine Learning</h4>
                      <p>
                        Building intelligent systems that learn and improve from
                        data
                      </p>
                    </div>
                    <div className="ai-card-back">
                      <h5>ML Expertise</h5>
                      <ul className="ai-features">
                        <li>Supervised Learning</li>
                        <li>Unsupervised Learning</li>
                        <li>Regression & Classification</li>
                        <li>Model Deployment</li>
                      </ul>
                      <div className="ai-tech-tags">
                        <span>Scikit-learn</span>
                        <span>TensorFlow</span>
                        <span>Python</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deep Learning Card */}
                <div className="ai-card dl-card">
                  <div className="ai-card-inner">
                    <div className="ai-card-front">
                      <div className="ai-icon-large">🧠</div>
                      <h4>Deep Learning</h4>
                      <p>Neural networks for complex pattern recognition</p>
                    </div>
                    <div className="ai-card-back">
                      <h5>Deep Learning Stack</h5>
                      <ul className="ai-features">
                        <li>Neural Networks</li>
                        <li>CNN & RNN</li>
                        <li>Transformers</li>
                        <li>GANs</li>
                      </ul>
                      <div className="ai-tech-tags">
                        <span>PyTorch</span>
                        <span>TensorFlow</span>
                        <span>Keras</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* NEW: AI-Powered Web Development Card */}
                <div className="ai-card web-ai-card">
                  <div className="ai-card-inner">
                    <div className="ai-card-front">
                      <div className="ai-icon-large">🌐</div>
                      <h4>AI-Powered Web Dev</h4>
                      <p>
                        Intelligent web applications with integrated AI
                        capabilities
                      </p>
                    </div>
                    <div className="ai-card-back">
                      <h5>AI Web Solutions</h5>
                      <ul className="ai-features">
                        <li>Smart Chatbots & Assistants</li>
                        <li>AI-Powered Search</li>
                        <li>Personalized Content</li>
                        <li>Real-time Analytics</li>
                      </ul>
                      <div className="ai-tech-tags">
                        <span>TensorFlow.js</span>
                        <span>OpenAI API</span>
                        <span>LangChain</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* NEW: Web Applications with ML Card */}
                <div className="ai-card webapp-ml-card">
                  <div className="ai-card-inner">
                    <div className="ai-card-front">
                      <div className="ai-icon-large">⚛️</div>
                      <h4>Web Apps with ML</h4>
                      <p>
                        Full-stack applications powered by machine learning
                        models
                      </p>
                    </div>
                    <div className="ai-card-back">
                      <h5>ML-Integrated Apps</h5>
                      <ul className="ai-features">
                        <li>MERN + ML Integration</li>
                        <li>Real-time Predictions</li>
                        <li>Data Visualization</li>
                        <li>Model APIs & Endpoints</li>
                      </ul>
                      <div className="ai-tech-tags">
                        <span>MERN Stack</span>
                        <span>Flask API</span>
                        <span>FastAPI</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Flutter Development Card */}
                <div className="ai-card flutter-ai-card">
                  <div className="ai-card-inner">
                    <div className="ai-card-front">
                      <div className="ai-icon-large">📱</div>
                      <h4>Flutter & Dart</h4>
                      <p>
                        Cross-platform mobile development with AI integration
                      </p>
                    </div>
                    <div className="ai-card-back">
                      <h5>Flutter Expertise</h5>
                      <ul className="ai-features">
                        <li>iOS & Android Apps</li>
                        <li>Custom Widgets</li>
                        <li>State Management</li>
                        <li>AI/ML Integration</li>
                      </ul>
                      <div className="ai-tech-tags">
                        <span>Flutter</span>
                        <span>Dart</span>
                        <span>Firebase</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Applications Card */}
                <div className="ai-card applications-card">
                  <div className="ai-card-inner">
                    <div className="ai-card-front">
                      <div className="ai-icon-large">🚀</div>
                      <h4>AI Applications</h4>
                      <p>Real-world AI solutions for modern problems</p>
                    </div>
                    <div className="ai-card-back">
                      <h5>Applications</h5>
                      <ul className="ai-features">
                        <li>Computer Vision</li>
                        <li>NLP Applications</li>
                        <li>Predictive Analytics</li>
                        <li>Recommendation Systems</li>
                      </ul>
                      <div className="ai-tech-tags">
                        <span>OpenCV</span>
                        <span>NLTK</span>
                        <span>Hugging Face</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Stats */}
              <div className="ai-stats">
                <div className="ai-stat-item">
                  <div className="ai-stat-number">10+</div>
                  <div className="ai-stat-label">AI/ML Projects</div>
                </div>
                <div className="ai-stat-item">
                  <div className="ai-stat-number">5+</div>
                  <div className="ai-stat-label">Deep Learning Models</div>
                </div>
                <div className="ai-stat-item">
                  <div className="ai-stat-number">3+</div>
                  <div className="ai-stat-label">Flutter Apps</div>
                </div>
                <div className="ai-stat-item">
                  <div className="ai-stat-number">∞</div>
                  <div className="ai-stat-label">Learning Always</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What I Do</h2>
            <p className="section-subtitle">
              Services I offer to bring your ideas to life
            </p>
            <div className="section-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dot"></div>
              <div className="decoration-line"></div>
            </div>
          </div>

          <div className="services-showcase">
            {/* Main Services Grid */}
            <div className="services-grid">
              {/* Web Development */}
              <div className="service-card web-dev-card">
                <div className="service-card-inner">
                  <div className="service-card-front">
                    <div className="service-icon-wrapper">
                      <div className="service-icon">💻</div>
                      <div className="icon-glow"></div>
                    </div>
                    <h3>Web Development</h3>
                    <p className="service-description">
                      Modern, responsive web applications with cutting-edge
                      technologies
                    </p>
                  </div>
                  <div className="service-card-back">
                    <div className="service-details">
                      <h4>Web Development</h4>
                      <div className="features-container">
                        <ul className="service-features">
                          <li>React & Next.js Applications</li>
                          <li>Responsive Design</li>
                          <li>Progressive Web Apps</li>
                          <li>Performance Optimization</li>
                        </ul>
                      </div>
                      <div className="tech-tags">
                        <span>React</span>
                        <span>Next.js</span>
                        <span>TypeScript</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
              </div>

              {/* Flutter Development */}
              <div className="service-card flutter-card">
                <div className="service-card-inner">
                  <div className="service-card-front">
                    <div className="service-icon-wrapper">
                      <div className="service-icon">📱</div>
                      <div className="icon-glow"></div>
                    </div>
                    <h3>Flutter Development</h3>
                    <p className="service-description">
                      Cross-platform mobile apps with beautiful UI and native
                      performance
                    </p>
                  </div>
                  <div className="service-card-back">
                    <div className="service-details">
                      <h4>Flutter & Dart</h4>
                      <ul className="service-features">
                        <li>iOS & Android Apps</li>
                        <li>Custom Animations</li>
                        <li>State Management</li>
                        <li>Firebase Integration</li>
                      </ul>
                      <div className="tech-tags">
                        <span>Flutter</span>
                        <span>Dart</span>
                        <span>Firebase</span>
                        <span>REST API</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
              </div>

              {/* Backend Development */}
              <div className="service-card backend-card">
                <div className="service-card-inner">
                  <div className="service-card-front">
                    <div className="service-icon-wrapper">
                      <div className="service-icon">⚙️</div>
                      <div className="icon-glow"></div>
                    </div>
                    <h3>Backend Development</h3>
                    <p className="service-description">
                      Robust server-side solutions and APIs
                    </p>
                  </div>
                  <div className="service-card-back">
                    <div className="service-details">
                      <h4>Backend Development</h4>
                      <div className="features-container">
                        <ul className="service-features">
                          <li>RESTful APIs</li>
                          <li>GraphQL Services</li>
                          <li>Microservices</li>
                          <li>Authentication</li>
                        </ul>
                      </div>
                      <div className="tech-tags">
                        <span>Node.js</span>
                        <span>Express</span>
                        <span>MongoDB</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
              </div>

              {/* Machine Learning */}
              <div className="service-card ml-service-card">
                <div className="service-card-inner">
                  <div className="service-card-front">
                    <div className="service-icon-wrapper">
                      <div className="service-icon">🤖</div>
                      <div className="icon-glow"></div>
                    </div>
                    <h3>Machine Learning</h3>
                    <p className="service-description">
                      Intelligent systems that learn and adapt from data
                    </p>
                  </div>
                  <div className="service-card-back">
                    <div className="service-details">
                      <h4>ML Solutions</h4>
                      <ul className="service-features">
                        <li>Predictive Models</li>
                        <li>Data Analysis</li>
                        <li>Pattern Recognition</li>
                        <li>Model Training</li>
                      </ul>
                      <div className="tech-tags">
                        <span>Python</span>
                        <span>TensorFlow</span>
                        <span>Scikit-learn</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
              </div>

              {/* Database Management */}
              <div className="service-card database-card">
                <div className="service-card-inner">
                  <div className="service-card-front">
                    <div className="service-icon-wrapper">
                      <div className="service-icon">🗄️</div>
                      <div className="icon-glow"></div>
                    </div>
                    <h3>Database Management</h3>
                    <p className="service-description">
                      Efficient data solutions and optimization
                    </p>
                  </div>
                  <div className="service-card-back">
                    <div className="service-details">
                      <h4>Database Management</h4>
                      <div className="features-container">
                        <ul className="service-features">
                          <li>Database Design</li>
                          <li>Query Optimization</li>
                          <li>Data Modeling</li>
                          <li>Migration & Backup</li>
                        </ul>
                      </div>
                      <div className="tech-tags">
                        <span>MongoDB</span>
                        <span>MySQL</span>
                        <span>PostgreSQL</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
              </div>

              {/* Deep Learning */}
              <div className="service-card dl-service-card">
                <div className="service-card-inner">
                  <div className="service-card-front">
                    <div className="service-icon-wrapper">
                      <div className="service-icon">🧠</div>
                      <div className="icon-glow"></div>
                    </div>
                    <h3>Deep Learning</h3>
                    <p className="service-description">
                      Neural networks for complex problem solving
                    </p>
                  </div>
                  <div className="service-card-back">
                    <div className="service-details">
                      <h4>Deep Learning</h4>
                      <ul className="service-features">
                        <li>Computer Vision</li>
                        <li>NLP Solutions</li>
                        <li>Neural Networks</li>
                        <li>Model Optimization</li>
                      </ul>
                      <div className="tech-tags">
                        <span>PyTorch</span>
                        <span>TensorFlow</span>
                        <span>Keras</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
              </div>
            </div>

            {/* Services Stats */}
            <div className="services-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's Work Together</h2>
            <p>
              Have a project in mind? Let's create something amazing together!
            </p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
