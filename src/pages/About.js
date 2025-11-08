import React, { useEffect, useState } from 'react';
import './About.css';


const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    frontend: [
      { name: 'React.js', level: 95, icon: '⚛️' },
      { name: 'JavaScript (ES6+)', level: 92, icon: '📜' },
      { name: 'HTML5 & CSS3', level: 95, icon: '🎨' },
      { name: 'Redux', level: 85, icon: '🔄' },
      { name: 'Tailwind CSS', level: 90, icon: '💨' },
      { name: 'Bootstrap', level: 88, icon: '🅱️' }
    ],
    backend: [
      { name: 'Node.js', level: 90, icon: '🟢' },
      { name: 'Express.js', level: 88, icon: '⚡' },
      { name: 'MongoDB', level: 90, icon: '🍃' },
      { name: 'REST APIs', level: 92, icon: '🔌' },
      { name: 'Authentication', level: 85, icon: '🔐' },
      { name: 'Socket.io', level: 80, icon: '📡' }
    ],
    tools: [
      { name: 'Git & GitHub', level: 95, icon: '📦' },
      { name: 'VS Code', level: 98, icon: '💻' },
      { name: 'Postman', level: 90, icon: '📬' },
      { name: 'Docker', level: 75, icon: '🐳' },
      { name: 'AWS', level: 70, icon: '☁️' },
      { name: 'Vercel/Netlify', level: 85, icon: '🚀' }
    ]
  };

  const timeline = [
    {
      year: '2023 - Present',
      title: 'Full Stack Developer',
      company: 'Freelance',
      description: 'Building modern web applications using MERN stack. Working with clients worldwide to deliver high-quality solutions.',
      icon: '💼'
    },
    {
      year: 'July 2024 - Dec 2024',
      title: 'Web Developer',
      company: 'Software Synergy Solutions & Club Islamia College Peshawar.',
      description: 'Developed and maintained multiple web applications. Collaborated with design and backend teams.',
      icon: '🚀'
    },
    {
      year: '2021 - 2025',
      title: 'Bachelor in Computer Science',
      company: 'Islamia College Peshawar, Pakistan',
      description: 'Focused on software engineering, web development, and database management.',
      icon: '🎓'
    },
    {
      year: '2019 - 2021',
      title: 'Intermediate (F.Sc)',
      company: 'Islamia College Peshawar, Pakistan',
      description: 'Studied Intermediate with A1 Grade. Marks : 976/1100',
      icon: '🎓'
    },
    {
      year: '2017 - 2019',
      title: 'Matric (Science)',
      company: 'Islamia Collegiate School Peshawar, Pakistan',
      description: 'Studied Matric (Science) with A1 Grade. Marks 940/1100.',
      icon: '🎓'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Projects Completed', icon: '🏆' },
    { number: '30+', label: 'Happy Clients', icon: '😊' },
    { number: '3+', label: 'Years Experience', icon: '📅' },
    { number: '15+', label: 'Technologies', icon: '⚙️' }
  ];

  return (
    <div className={`about ${isVisible ? 'visible' : ''}`}>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="profile-section">
            <div className="profile-image-wrapper">
              <img
                src={require('./profile.jpeg')}
                alt="Muhammad Usman"
                className="profile-image"
                onError={(e) => {
                  e.target.src = 'https://ui-avatars.com/api/?name=Muhammad+Usman&size=400&background=00d4ff&color=fff&bold=true&font-size=0.4';
                }}
              />
              <div className="profile-ring"></div>
              <div className="profile-ring-2"></div>
            </div>
            <div className="status-badge">
              <span className="status-dot"></span>
              Available for work
            </div>
          </div>

          <div className="about-intro">
            <h1>Hi, I'm Muhammad Usman</h1>
            <p className="role">Full Stack MERN Developer</p>
            <p className="bio">
              I'm a passionate developer specializing in creating modern, responsive web applications.
              With expertise in MongoDB, Express.js, React, and Node.js, I transform ideas into
              elegant digital solutions that solve real-world problems.
            </p>
            <p className="bio">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
            <div className="about-cta">
              <a href="/Muhammad-Usman-Resume.pdf" download className="btn btn-primary">
                <span>Download CV</span>
                <span>📥</span>
              </a>
              <a href="/contact" className="btn btn-secondary">
                <span>Hire Me</span>
                <span>💼</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="achievement-icon">{achievement.icon}</div>
              <h3 className="achievement-number">{achievement.number}</h3>
              <p className="achievement-label">{achievement.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-detailed-section">
        <div className="section-header">
          <h2>Technical Skills</h2>
          <p>Technologies and tools I work with</p>
        </div>

        <div className="skills-categories">
          <div className="skill-category">
            <div className="category-header">
              <h3>🎨 Frontend Development</h3>
            </div>
            <div className="skills-list">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="skill-item" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-container">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <h3>⚙️ Backend Development</h3>
            </div>
            <div className="skills-list">
              {skills.backend.map((skill, index) => (
                <div key={index} className="skill-item" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-container">
                    <div
                      className="skill-bar-fill backend"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <h3>🛠️ Tools & Others</h3>
            </div>
            <div className="skills-list">
              {skills.tools.map((skill, index) => (
                <div key={index} className="skill-item" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-container">
                    <div
                      className="skill-bar-fill tools"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="section-header">
          <h2>My Journey</h2>
          <p>Education & Experience</p>
        </div>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-icon">{item.icon}</div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="cta-content">
          <h2>Interested in working together?</h2>
          <p>I'm always open to discussing new projects and opportunities.</p>
          <a href="/contact" className="btn btn-large">Let's Talk</a>
        </div>
      </section>
    </div>
  );
};

export default About;
