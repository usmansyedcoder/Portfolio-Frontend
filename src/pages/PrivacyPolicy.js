import { Link } from "react-router-dom";
import "./LegalPages.css";

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <header className="legal-header">
          <Link to="/" className="back-home">
            ← Back to Home
          </Link>
          <h1>Privacy Policy</h1>
          <p className="last-updated">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        <div className="legal-content">
          <section className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you:
            </p>
            <ul>
              <li>Contact us through our contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Use our services or express interest in collaboration</li>
            </ul>
            <p>
              This may include your name, email address, and any messages you
              send us.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer support</li>
              <li>
                Send you updates about our services (if you've subscribed)
              </li>
              <li>Improve our website and user experience</li>
              <li>Communicate with you about potential collaborations</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to:</p>
            <ul>
              <li>Analyze website traffic and user behavior</li>
              <li>Remember your preferences and settings</li>
              <li>Improve website performance and security</li>
            </ul>
            <p>
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. Data Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share information only:
            </p>
            <ul>
              <li>When required by law or legal process</li>
              <li>To protect our rights or the safety of others</li>
              <li>
                With service providers who assist in website operations (under
                strict confidentiality agreements)
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration, or
              disclosure. However, no internet transmission is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>7. Third-Party Links</h2>
            <p>
              Our website may contain links to external sites. We are not
              responsible for the privacy practices or content of these external
              sites.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the "Last Updated" date.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <div className="contact-info">
              <p>
                <strong>Email:</strong> usmansyed.peshawar@gmail.com
              </p>
              <p>
                <strong>Location:</strong> Peshawar, Pakistan
              </p>
            </div>
          </section>
        </div>

        <footer className="legal-footer">
          <p>Thank you for trusting us with your information.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
