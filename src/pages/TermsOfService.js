import { Link } from "react-router-dom";
import "./LegalPages.css";

const TermsOfService = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <header className="legal-header">
          <Link to="/" className="back-home">
            ← Back to Home
          </Link>
          <h1>Terms of Service</h1>
          <p className="last-updated">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        <div className="legal-content">
          <section className="policy-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this portfolio website, you accept and
              agree to be bound by the terms and provisions of this agreement.
              If you do not agree to these terms, please do not use this
              website.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily view the materials and
              information on this portfolio website for personal, non-commercial
              transitory viewing only. This is the grant of a license, not a
              transfer of title.
            </p>
            <p>Under this license you may not:</p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>
                Attempt to decompile or reverse engineer any software contained
                on the website
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transfer the materials to another person or "mirror" the
                materials on any other server
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Intellectual Property</h2>
            <p>
              All content, including but not limited to text, images, graphics,
              logos, and code, is the property of Muhammad Usman and is
              protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. User Responsibilities</h2>
            <p>When using this website, you agree to:</p>
            <ul>
              <li>Provide accurate information when contacting us</li>
              <li>Not use the website for any unlawful purpose</li>
              <li>
                Not attempt to gain unauthorized access to any part of the
                website
              </li>
              <li>Not interfere with the proper working of the website</li>
              <li>Respect all intellectual property rights</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>5. Disclaimer</h2>
            <p>
              The materials on this website are provided "as is". Muhammad Usman
              makes no warranties, expressed or implied, and hereby disclaims
              and negates all other warranties including, without limitation,
              implied warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property
              or other violation of rights.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Limitations</h2>
            <p>
              In no event shall Muhammad Usman or its suppliers be liable for
              any damages (including, without limitation, damages for loss of
              data or profit, or due to business interruption) arising out of
              the use or inability to use the materials on this website.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. Accuracy of Materials</h2>
            <p>
              The materials appearing on this website could include technical,
              typographical, or photographic errors. Muhammad Usman does not
              warrant that any of the materials on its website are accurate,
              complete, or current.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. Links to Other Websites</h2>
            <p>
              This website may contain links to third-party websites. These
              links are provided for your convenience only. We have no control
              over the content of these sites and accept no responsibility for
              them or for any loss or damage that may arise from your use of
              them.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. Modifications</h2>
            <p>
              Muhammad Usman may revise these terms of service at any time
              without notice. By using this website you are agreeing to be bound
              by the then current version of these terms of service.
            </p>
          </section>

          <section className="policy-section">
            <h2>10. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of Pakistan and you irrevocably submit to
              the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="policy-section">
            <h2>11. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please
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
          <p>Thank you for visiting my portfolio website.</p>
        </footer>
      </div>
    </div>
  );
};

export default TermsOfService;
