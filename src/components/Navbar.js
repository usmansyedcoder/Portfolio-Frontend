import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  // Email functionality
  const handleHireMe = () => {
    const email = "2021-icp-0780@icp.edu.pk";
    const subject = "Hiring Inquiry - Portfolio";
    const body = "Hi Muhammad Usman,\n\nI came across your portfolio and I'm interested in discussing a potential opportunity with you.\n\nBest regards,";
    
    // Open default email client
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/logo.jpg" alt="Logo" className="logo" />
          <span className="logo-text">MU</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                className={location.pathname === item.path ? "active" : ""}
              >
                {item.label}
                <span className="nav-hover-effect"></span>
              </Link>
            </li>
          ))}
          <li>
            <button className="hire-btn" onClick={handleHireMe}>
              Hire Me
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className={`hamburger ${isOpen ? "active" : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="mobile-menu-content">
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={`mobile-nav-item ${location.pathname === item.path ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button className="mobile-hire-btn" onClick={handleHireMe}>
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;