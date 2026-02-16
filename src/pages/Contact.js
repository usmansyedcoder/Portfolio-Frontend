import React, { useState } from "react";
import { submitContact } from "../api/api";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await submitContact(formData);
      setStatus({
        type: "success",
        message:
          response.data.message ||
          "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Error sending message. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "usmansyed.peshawar@gmail.com",
      link: "mailto:usmansyed.peshawar@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+92 313 979 4347",
      link: "tel:+923139794347",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Peshawar, Pakistan",
      link: "https://maps.app.goo.gl/BxqrgcF5irHkXUGx8",
    },
    {
      icon: "💼",
      title: "Freelance",
      value: "Available",
      link: "https://www.fiverr.com/muhammad_usmanu/buying?source=avatar_menu_profile",
      status: "available",
    },
  ];

  return (
    <div className="contact-page">
      {/* Background Elements */}
      <div className="contact-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <div className="contact-badge">
            <span className="badge-icon">💬</span>
            <span className="badge-text">Let's Talk</span>
          </div>
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life. I'm always excited to hear about new
            opportunities.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="info-card">
              <h3 className="info-title">Contact Information</h3>
              <p className="info-description">
                Feel free to reach out through any of these channels. I
                typically respond within 24 hours.
              </p>

              <div className="contact-methods">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className={`contact-method ${item.status || ""}`}
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      item.link.startsWith("http") ? "noopener noreferrer" : ""
                    }
                  >
                    <div className="method-icon">{item.icon}</div>
                    <div className="method-content">
                      <div className="method-title">{item.title}</div>
                      <div className="method-value">{item.value}</div>
                    </div>
                    {item.status === "available" && (
                      <div className="availability-dot"></div>
                    )}
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="social-links">
                <h4 className="social-title">Follow Me</h4>
                <div className="social-icons">
                  <a
                    href="https://github.com/usmansyedcoder"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path
                        fill="currentColor"
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/muhammad-usman-islamian"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path
                        fill="currentColor"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/@Muhammad_usmane"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path
                        fill="currentColor"
                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="advanced-contact-form">
              <div className="form-header">
                <h3>Send Message</h3>
                <p>
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>
              </div>

              <div className="form-grid">
                <div
                  className={`form-group ${activeField === "name" ? "active" : ""}`}
                >
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    required
                    disabled={isSubmitting}
                  />
                  <div className="input-glow"></div>
                </div>

                <div
                  className={`form-group ${activeField === "email" ? "active" : ""}`}
                >
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    required
                    disabled={isSubmitting}
                  />
                  <div className="input-glow"></div>
                </div>

                <div
                  className={`form-group full-width ${activeField === "subject" ? "active" : ""}`}
                >
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus("subject")}
                    onBlur={handleBlur}
                    required
                    disabled={isSubmitting}
                  />
                  <div className="input-glow"></div>
                </div>

                <div
                  className={`form-group full-width ${activeField === "message" ? "active" : ""}`}
                >
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    rows="6"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                  <div className="input-glow"></div>
                </div>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                disabled={isSubmitting}
              >
                <span className="btn-text">
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </span>
                <span className="btn-icon">{isSubmitting ? "⏳" : "🚀"}</span>
                <div className="btn-shine"></div>
              </button>

              {status.message && (
                <div className={`status-message ${status.type}`}>
                  <div className="status-icon">
                    {status.type === "success" ? "✅" : "❌"}
                  </div>
                  <div className="status-text">{status.message}</div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
