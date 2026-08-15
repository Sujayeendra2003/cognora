import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenInquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Selected Work', href: '#work' },
    { label: 'Problems We Solve', href: '#problems' },
    { label: 'Our Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'AI Assistant', href: '#ai-demo' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo */}
          <a href="#" className="brand-logo">
            <span className="brand-text">COGNORA</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="nav-actions">
            <button onClick={onOpenInquiry} className="btn btn-primary nav-cta">
              <span>Start a Project</span>
              <span className="btn-icon-wrapper">
                <ArrowUpRight size={16} />
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="mobile-menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="brand-logo">
            <span className="brand-text">COGNORA</span>
          </div>
          <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <div className="mobile-drawer-links">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-item"
            >
              <span className="item-num">0{idx + 1}</span>
              <span className="item-label">{link.label}</span>
            </a>
          ))}
        </div>
        <div className="mobile-drawer-footer">
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }} 
            className="btn btn-primary w-full"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--nav-height);
          z-index: 900;
          background-color: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid transparent;
          transition: all var(--transition-normal);
        }

        .navbar-header.scrolled {
          background-color: rgba(255, 255, 255, 0.95);
          border-bottom-color: var(--border-light);
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.125rem;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }

        .brand-symbol {
          font-weight: 800;
          letter-spacing: -0.1em;
          color: #000000;
        }

        .brand-subtext {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          margin-left: 2px;
        }

        .desktop-nav {
          display: none;
          align-items: center;
          gap: 28px;
        }

        @media (min-width: 992px) {
          .desktop-nav {
            display: flex;
          }
        }

        .nav-link {
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1.5px;
          background-color: var(--text-primary);
          transition: width var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .status-badge {
          display: none;
          align-items: center;
          gap: 8px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-family: var(--font-display);
          font-weight: 600;
          color: var(--text-secondary);
        }

        @media (min-width: 768px) {
          .status-badge {
            display: flex;
          }
        }

        .nav-cta {
          padding: 8px 16px;
          font-size: 0.8125rem;
          width: auto !important;
          white-space: nowrap !important;
          min-height: 38px;
          flex-shrink: 0;
        }

        @media (max-width: 576px) {
          .nav-cta {
            display: none;
          }
          .brand-subtext {
            display: none;
          }
        }

        .mobile-menu-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          color: var(--text-primary);
          flex-shrink: 0;
        }

        @media (min-width: 992px) {
          .mobile-menu-toggle {
            display: none;
          }
        }

        /* Mobile Drawer */
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--bg-primary);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          padding: 24px;
          transform: translateY(-100%);
          transition: transform 0.4s var(--ease-out);
        }

        .mobile-nav-drawer.open {
          transform: translateY(0);
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-light);
        }

        .mobile-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 32px 0;
          flex: 1;
        }

        .mobile-nav-item {
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .mobile-nav-item .item-num {
          font-size: 0.875rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .mobile-drawer-footer {
          padding-top: 24px;
          border-top: 1px solid var(--border-light);
        }

        .w-full {
          width: 100%;
        }
      `}</style>
    </>
  );
}
