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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/logo2.jpg" alt="Logo" className="logo" />
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
            <button className="hire-btn">Hire Me</button>
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
          <button className="mobile-hire-btn">Hire Me</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;