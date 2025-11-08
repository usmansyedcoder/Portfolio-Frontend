import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.jpeg'; // Import your image
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'MongoDB', icon: '🍃', level: 90 },
    { name: 'Express.js', icon: '⚡', level: 85 },
    { name: 'React', icon: '⚛️', level: 95 },
    { name: 'Node.js', icon: '🟢', level: 90 },
    { name: 'JavaScript', icon: '📜', level: 92 },
    { name: 'HTML', icon: '☠', level: 95 },
    { name: 'CSS', icon: '🎨', level: 95 },
    { name: 'Dart', icon: '🐦', level: 95 },
  ];

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Building responsive and modern web applications using latest technologies'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with great user experience'
    },
    {
      icon: '⚙️',
      title: 'API Development',
      description: 'Developing robust RESTful APIs and backend systems'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Ensuring perfect display across all devices and screen sizes'
    },
    {
      icon: '📱',
      title: 'Flutter App Development',
      description: 'Building beautiful and high-performance mobile applications for iOS and Android'
    },
    {
      icon: '📱',
      title: 'Web Application Development',
      description: 'Building beautiful and high-performance web applications using the latest technologies'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className={`hero ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <div className="hero-text">
            <span className="greeting">👋 Hello, I'm</span>
            <h1 className="name">Muhammad Usman</h1>
            <h2 className="title">Full Stack MERN Developer</h2>
            <p className="description">
              I craft elegant digital experiences that solve real-world problems. 
              Passionate about building scalable web applications with clean code 
              and modern technologies.
            </p>
            <div className="cta-buttons">
              <Link to="/projects" className="btn btn-primary">
                <span>View My Work</span>
                <span className="btn-icon">→</span>
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <span>Get In Touch</span>
                <span className="btn-icon">✉</span>
              </Link>
            </div>
            <div className="social-links">
              <a href="https://github.com/usmansyedcoder" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/muhammad-usman-islamian" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com/@Muhammad_usmane" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Updated Hero Image Section with Profile Picture */}
          <div className="hero-image">
            <div className="image-wrapper">
              {/* Profile Picture */}
              <img 
                src={profileImage} 
                alt="Muhammad Usman" 
                className="profile-picture"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.src = 'https://ui-avatars.com/api/?name=Muhammad+Usman&size=400&background=00d4ff&color=fff&bold=true&font-size=0.4';
                }}
              />
              {/* Animated MERN Icons */}
              <div className="floating-icon icon-1">
                <span className="tech-icon">⚛️</span>
                <span className="tech-label">React</span>
              </div>
              <div className="floating-icon icon-2">
                <span className="tech-icon">🍃</span>
                <span className="tech-label">MongoDB</span>
              </div>
              <div className="floating-icon icon-3">
                <span className="tech-icon">⚡</span>
                <span className="tech-label">Express</span>
              </div>
              <div className="floating-icon icon-4">
                <span className="tech-icon">🟢</span>
                <span className="tech-label">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="section-header">
          <h2>Tech Stack</h2>
          <p>Technologies I work with</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2>What I Do</h2>
          <p>Services I offer to bring your ideas to life</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? Let's create something amazing together!</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
