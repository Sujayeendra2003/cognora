import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SelectedWork from './components/SelectedWork';
import ProblemsWeSolve from './components/ProblemsWeSolve';
import Process from './components/Process';
import Pricing from './components/Pricing';
import AiAssistantDemo from './components/AiAssistantDemo';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { X } from 'lucide-react';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [prefillData, setPrefillData] = useState(null);

  // Lock background page scrolling on modal open, restore on close
  useEffect(() => {
    if (inquiryModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [inquiryModalOpen]);

  const handleOpenInquiry = (data = null) => {
    if (data) {
      setPrefillData(data);
    }
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
    setPrefillData(null);
  };

  return (
    <div className="app-root">
      {/* Navigation Bar */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* 1. Hero Section */}
      <Hero onOpenInquiry={() => handleOpenInquiry()} />

      {/* 2. Services Section */}
      <Services onOpenInquiry={() => handleOpenInquiry()} />

      {/* 3. Selected Work / Case Studies Section */}
      <SelectedWork onOpenInquiry={() => handleOpenInquiry()} />

      {/* 4. Problems We Solve */}
      <ProblemsWeSolve onOpenInquiry={() => handleOpenInquiry()} />

      {/* 5. Our Process */}
      <Process />

      {/* 6. Pricing & Interactive Estimator */}
      <Pricing onOpenInquiryWithData={(data) => handleOpenInquiry(data)} />

      {/* 8. Live AI Assistant Interactive Demo */}
      <AiAssistantDemo onOpenInquiry={() => handleOpenInquiry()} />

      {/* 9. FAQ Section */}
      <Faq />

      {/* 10. Contact / Project Inquiry Form Section */}
      <ContactForm prefillData={prefillData} />

      {/* 11. Minimalist Footer */}
      <Footer />

      {/* Project Inquiry Modal Overlay */}
      {inquiryModalOpen && (
        <div className="modal-overlay" onClick={handleCloseInquiry}>
          <div 
            className="modal-content inquiry-modal-dialog" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="inquiry-modal-title"
          >
            <div className="inquiry-modal-header">
              <div className="brand-logo" id="inquiry-modal-title">
                <span className="brand-text">COGNORA</span>
              </div>
              <button 
                className="close-modal-btn" 
                onClick={handleCloseInquiry}
                aria-label="Close consultation modal"
              >
                <X size={20} />
              </button>
            </div>
            <ContactForm prefillData={prefillData} isModal={true} onClose={handleCloseInquiry} />
          </div>
        </div>
      )}

      <style>{`
        /* Block Modal Container */
        .inquiry-modal-dialog {
          width: min(92vw, 960px);
          margin: 24px auto;
          padding: 0;
          background: var(--bg-primary);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-strong);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.3);
          display: block;
        }

        /* Sticky Pinned Header */
        .inquiry-modal-header {
          position: sticky;
          top: 0;
          z-index: 20;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .inquiry-modal-header {
            padding: 20px 32px;
          }
        }
      `}</style>
    </div>
  );
}
