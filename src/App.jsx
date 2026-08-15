import React, { useState } from 'react';
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
          <div className="modal-content inquiry-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="inquiry-modal-header">
              <div className="brand-logo">
                <span className="brand-text">COGNORA</span>
              </div>
              <button className="close-modal-btn" onClick={handleCloseInquiry}>
                <X size={20} />
              </button>
            </div>
            <ContactForm prefillData={prefillData} isModal={true} onClose={handleCloseInquiry} />
          </div>
        </div>
      )}

      <style>{`
        .inquiry-modal-dialog {
          max-width: 960px;
          width: 94%;
          margin: auto;
          padding: 0;
          overflow: hidden;
        }

        .inquiry-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 32px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-light);
        }
      `}</style>
    </div>
  );
}
