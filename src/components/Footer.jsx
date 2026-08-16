import React from 'react';
import { ArrowUp, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container">
        {/* Main Footer Row */}
        <div className="footer-top-grid">
          {/* Brand & Value Statement */}
          <div className="footer-brand-col">
            <a href="#" className="footer-logo">
              <span className="brand-text">COGNORA</span>
            </a>
            <p className="footer-tagline">
              "We build digital experiences and AI systems that help businesses grow."
            </p>
            <div className="timezone-row">
              <span className="tz-item">Hyderabad (IST • UTC+5:30)</span>
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#work">Selected Work</a></li>
              <li><a href="#problems">Problems We Solve</a></li>
              <li><a href="#process">Our Process</a></li>
            </ul>
          </div>

          {/* Nav Links Column 2 */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Capabilities</h4>
            <ul className="footer-links">
              <li><a href="#services">Business Websites</a></li>
              <li><a href="#services">Website Redesigns</a></li>
              <li><a href="#services">AI Automation &amp; Agents</a></li>
              <li><a href="#services">AI Website Assistants</a></li>
              <li><a href="#services">UI/UX &amp; Design Systems</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Back to Top */}
          <div className="footer-action-col">
            <button onClick={scrollToTop} className="back-top-btn">
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>

            <div className="social-links-row">
              <a href="#" className="social-icon-btn" aria-label="Twitter"><Twitter size={16} /></a>
              <a href="#" className="social-icon-btn" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" className="social-icon-btn" aria-label="GitHub"><Github size={16} /></a>
              <a href="mailto:hello@cognorastudio.com" className="social-icon-btn" aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom-bar">
          <span className="copyright-text">
            © {new Date().getFullYear()} COGNORA. All rights reserved.
          </span>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Engagement</a>
            <span>•</span>
            <a href="#">AI Ethics &amp; Security</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-container {
          background-color: var(--bg-dark);
          color: var(--text-inverse);
          padding: 56px 0 32px 0;
        }

        @media (min-width: 768px) {
          .footer-container {
            padding: 80px 0 40px 0;
          }
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          margin-bottom: 40px;
        }

        @media (min-width: 576px) {
          .footer-top-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }

        @media (min-width: 992px) {
          .footer-top-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 40px;
            margin-bottom: 60px;
          }
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.125rem;
          color: #ffffff;
          margin-bottom: 12px;
        }

        @media (min-width: 768px) {
          .footer-logo {
            font-size: 1.25rem;
            margin-bottom: 16px;
          }
        }

        .footer-tagline {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1rem;
          color: var(--text-inverse-muted);
          line-height: 1.45;
          margin-bottom: 20px;
          max-width: 380px;
        }

        @media (min-width: 768px) {
          .footer-tagline {
            font-size: 1.125rem;
            margin-bottom: 24px;
          }
        }

        .timezone-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px;
          font-size: 0.6875rem;
          font-family: var(--font-display);
          color: var(--text-inverse-muted);
        }

        .footer-col-title {
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ffffff;
          margin-bottom: 14px;
        }

        @media (min-width: 768px) {
          .footer-col-title {
            font-size: 0.8125rem;
            margin-bottom: 20px;
          }
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links a {
          font-size: 0.8125rem;
          color: var(--text-inverse-muted);
          transition: color var(--transition-fast);
        }

        .footer-links a:hover {
          color: #ffffff;
        }

        .footer-action-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .back-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .back-top-btn:hover {
          background: #ffffff;
          color: #0a0a0c;
        }

        .social-links-row {
          display: flex;
          gap: 10px;
        }

        .social-icon-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: background var(--transition-fast);
        }

        .social-icon-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .footer-container .divider {
          background-color: rgba(255, 255, 255, 0.12);
        }

        .footer-bottom-bar {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 24px;
          font-size: 0.75rem;
          color: var(--text-inverse-muted);
        }

        @media (min-width: 768px) {
          .footer-bottom-bar {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding-top: 32px;
            font-size: 0.8125rem;
          }
        }

        .legal-links {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
        }

        .legal-links a {
          color: var(--text-inverse-muted);
          transition: color var(--transition-fast);
        }

        .legal-links a:hover {
          color: #ffffff;
        }
      `}</style>
    </footer>
  );
}
