import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Lock, Clock, AlertTriangle, Loader2, RotateCcw, Copy, Check } from 'lucide-react';
import { useProjectInquiry } from '../hooks/useProjectInquiry';
import { EnquiryFormData } from '../types/inquiry';

interface ContactFormProps {
  prefillData?: any;
  isModal?: boolean;
  onClose?: () => void;
}

export default function ContactForm({ prefillData, isModal, onClose }: ContactFormProps) {
  const {
    isSubmitting,
    isSubmitted,
    error,
    referenceId,
    validationErrors,
    submitInquiry,
    resetForm,
    clearError,
  } = useProjectInquiry();

  // Controlled form state
  const [selectedCapabilities, setSelectedCapabilities] = useState<string[]>([
    'Premium Business Website'
  ]);
  const [selectedBudget, setSelectedBudget] = useState<string>('₹75,000 - ₹1.25L');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    details: ''
  });

  const [copiedRef, setCopiedRef] = useState(false);

  // Handle prefill data passed from Interactive Estimator or Pricing cards
  useEffect(() => {
    if (prefillData) {
      if (prefillData.serviceType) {
        setFormData(prev => ({
          ...prev,
          details: prev.details || `[Estimator Scope: ${prefillData.serviceType}]`
        }));
      }
      if (prefillData.estimatedBudget) {
        setSelectedBudget(prefillData.estimatedBudget);
      }
    }
  }, [prefillData]);

  const capabilityOptions = [
    { id: 'web', label: 'Premium Business Website' },
    { id: 'redesign', label: 'Website Redesign' },
    { id: 'ai-agents', label: 'AI Automation & Agents' },
    { id: 'ai-assistant', label: 'AI Website Assistant' },
    { id: 'ui-ux', label: 'UI/UX & Design Systems' }
  ];

  const budgetOptions = [
    '₹35,000 - ₹60,000',
    '₹75,000 - ₹1.25L',
    '₹1.25L - ₹2.5L',
    'Custom Quote'
  ];

  const toggleCapability = (label: string) => {
    if (selectedCapabilities.includes(label)) {
      if (selectedCapabilities.length > 1) {
        setSelectedCapabilities(selectedCapabilities.filter(c => c !== label));
      }
    } else {
      setSelectedCapabilities([...selectedCapabilities, label]);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload: EnquiryFormData = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      website: formData.website,
      capabilities: selectedCapabilities,
      budget: selectedBudget,
      project_details: formData.details
    };

    await submitInquiry(payload);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      website: '',
      details: ''
    });
    setSelectedCapabilities(['Premium Business Website']);
    setSelectedBudget('₹75,000 - ₹1.25L');
    resetForm();
  };

  const handleCopyReference = () => {
    if (referenceId) {
      navigator.clipboard.writeText(referenceId);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  return (
    <section id="contact" className={`section contact-section ${isModal ? 'is-modal' : ''}`}>
      <div className="container">
        <div className="contact-card-wrapper fade-up">
          <div className="contact-grid">
            {/* Left Column: Value Proposition & Contact Info */}
            <div className="contact-info-col">
              <div className="section-tag">
                <span className="dot"></span>
                <span>Initiate Consultation</span>
              </div>

              <h2 className="contact-title">
                Let’s build something <span className="editorial">extraordinary together.</span>
              </h2>

              <p className="contact-desc">
                Tell us about your brand vision, growth goals, or AI automation requirements. We respond to all inquiries within 24 hours with a preliminary scope outline.
              </p>

              <div className="contact-perks-list">
                <div className="perk-item">
                  <Clock size={18} className="perk-icon" />
                  <div>
                    <strong>24-Hour Response Guaranteed</strong>
                    <p>Direct founder review of every submission.</p>
                  </div>
                </div>
                <div className="perk-item">
                  <Lock size={18} className="perk-icon" />
                  <div>
                    <strong>100% NDA Protection</strong>
                    <p>Your business idea &amp; data stay strictly private.</p>
                  </div>
                </div>
              </div>

              <div className="direct-contact-box">
                <span className="direct-label">Direct Email Inquiry:</span>
                <a href="mailto:hello@cognorastudio.com" className="direct-email">hello@cognorastudio.com</a>
                <span className="location-tag">Hyderabad, India</span>
              </div>
            </div>

            {/* Right Column: Form / Success Confirmation / Error Toast */}
            <div className="contact-form-col">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  /* =========================================================
                     APPLE-STYLE ELEGANT SUCCESS CONFIRMATION CARD
                     ========================================================= */
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.96, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="apple-success-card"
                  >
                    <div className="success-check-badge">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 15 }}
                      >
                        <CheckCircle2 size={44} strokeWidth={1.75} />
                      </motion.div>
                    </div>

                    <h3 className="apple-success-title">Inquiry Received</h3>
                    
                    <p className="apple-success-text">
                      Thanks for reaching out. We’ve received your project enquiry and will review it personally. You’ll hear from us within 24 hours.
                    </p>

                    {/* Reference Tracking ID */}
                    {referenceId && (
                      <div className="reference-pill-box">
                        <span className="ref-label">TRACKING REFERENCE:</span>
                        <div className="ref-code-wrapper">
                          <code className="ref-code">{referenceId}</code>
                          <button
                            type="button"
                            onClick={handleCopyReference}
                            className="copy-ref-btn"
                            title="Copy Reference ID"
                            aria-label="Copy tracking reference ID"
                          >
                            {copiedRef ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="apple-success-actions">
                      <button 
                        type="button"
                        onClick={handleReset}
                        className="btn btn-secondary w-full"
                      >
                        <span>Submit Another Inquiry</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (onClose) {
                            onClose();
                          } else {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                        className="btn btn-primary w-full"
                      >
                        <span>Back to Home</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* =========================================================
                     PROJECT INQUIRY FORM (CONTROLLED & ACCESSIBLE)
                     ========================================================= */
                  <motion.form
                    key="inquiry-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="inquiry-form"
                    noValidate
                  >
                    {/* Error Toast Notification Banner */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="error-toast-banner"
                        role="alert"
                      >
                        <div className="toast-content">
                          <AlertTriangle size={18} className="toast-icon" />
                          <div className="toast-text">
                            <strong>We couldn't submit your enquiry.</strong>
                            <p>{error}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={clearError}
                          className="toast-retry-btn"
                          aria-label="Dismiss error"
                        >
                          <RotateCcw size={14} />
                          <span>Retry</span>
                        </button>
                      </motion.div>
                    )}

                    {/* Step 1: Capabilities Selector */}
                    <div className="form-group">
                      <label className="form-label" id="label-capabilities">
                        1. What capabilities do you require? *
                      </label>
                      <div 
                        className="tags-flex-wrap"
                        role="group"
                        aria-labelledby="label-capabilities"
                      >
                        {capabilityOptions.map(opt => {
                          const isSelected = selectedCapabilities.includes(opt.label);
                          return (
                            <button
                              type="button"
                              key={opt.id}
                              className={`tag-choice-btn ${isSelected ? 'selected' : ''}`}
                              onClick={() => toggleCapability(opt.label)}
                              aria-pressed={isSelected}
                            >
                              <span>{opt.label}</span>
                            </button>
                          );
                        })}
                      </div>
                      {validationErrors.capabilities && (
                        <span className="inline-field-error" role="alert">
                          {validationErrors.capabilities}
                        </span>
                      )}
                    </div>

                    {/* Step 2: Budget Range */}
                    <div className="form-group">
                      <label className="form-label" id="label-budget">
                        2. Estimated Budget Range *
                      </label>
                      <div 
                        className="radio-grid-row"
                        role="radiogroup"
                        aria-labelledby="label-budget"
                      >
                        {budgetOptions.map((b, i) => (
                          <button
                            type="button"
                            key={i}
                            className={`radio-choice-btn ${selectedBudget === b ? 'selected' : ''}`}
                            onClick={() => setSelectedBudget(b)}
                            role="radio"
                            aria-checked={selectedBudget === b}
                          >
                            <span>{b}</span>
                          </button>
                        ))}
                      </div>
                      {validationErrors.budget && (
                        <span className="inline-field-error" role="alert">
                          {validationErrors.budget}
                        </span>
                      )}
                    </div>

                    {/* Step 3: Text Inputs */}
                    <div className="inputs-dual-grid">
                      <div className="form-group">
                        <label className="form-label" htmlFor="input-name">
                          Your Name *
                        </label>
                        <input 
                          id="input-name"
                          type="text" 
                          required 
                          aria-required="true"
                          aria-invalid={!!validationErrors.name}
                          aria-describedby={validationErrors.name ? 'err-name' : undefined}
                          placeholder="e.g. Sarah Jenkins"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          disabled={isSubmitting}
                          className={validationErrors.name ? 'has-error' : ''}
                        />
                        {validationErrors.name && (
                          <span id="err-name" className="inline-field-error" role="alert">
                            {validationErrors.name}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="input-email">
                          Work Email *
                        </label>
                        <input 
                          id="input-email"
                          type="email" 
                          required 
                          aria-required="true"
                          aria-invalid={!!validationErrors.email}
                          aria-describedby={validationErrors.email ? 'err-email' : undefined}
                          placeholder="sarah@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          disabled={isSubmitting}
                          className={validationErrors.email ? 'has-error' : ''}
                        />
                        {validationErrors.email && (
                          <span id="err-email" className="inline-field-error" role="alert">
                            {validationErrors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="inputs-dual-grid">
                      <div className="form-group">
                        <label className="form-label" htmlFor="input-company">
                          Company Name
                        </label>
                        <input 
                          id="input-company"
                          type="text" 
                          placeholder="e.g. Acme Corp"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="input-website">
                          Current Website URL (optional)
                        </label>
                        <input 
                          id="input-website"
                          type="url" 
                          placeholder="https://company.com"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="input-details">
                        Project Details &amp; Objectives *
                      </label>
                      <textarea 
                        id="input-details"
                        rows={3}
                        required
                        aria-required="true"
                        aria-invalid={!!validationErrors.project_details}
                        aria-describedby={validationErrors.project_details ? 'err-details' : undefined}
                        placeholder="Tell us about your project goals, current challenges, or desired AI features..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        disabled={isSubmitting}
                        className={validationErrors.project_details ? 'has-error' : ''}
                      ></textarea>
                      {validationErrors.project_details && (
                        <span id="err-details" className="inline-field-error" role="alert">
                          {validationErrors.project_details}
                        </span>
                      )}
                    </div>

                    {/* Submit Button with Spinner & Anti-duplicate lock */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn btn-primary btn-lg w-full submit-lead-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="spinner-icon" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Inquiry</span>
                          <ArrowUpRight size={18} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-primary);
          border-top: 1px solid var(--border-light);
        }

        .contact-card-wrapper {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 20px 60px var(--accent-shadow);
        }

        @media (min-width: 768px) {
          .contact-card-wrapper {
            border-radius: var(--radius-lg);
          }
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
        }

        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr;
          }
        }

        .contact-info-col {
          padding: 24px 16px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        @media (min-width: 768px) {
          .contact-info-col {
            padding: 48px;
          }
        }

        @media (min-width: 992px) {
          .contact-info-col {
            border-bottom: none;
            border-right: 1px solid var(--border-light);
          }
        }

        .contact-title {
          font-family: var(--font-display);
          font-size: 1.625rem;
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: -0.03em;
          margin-bottom: 14px;
        }

        @media (min-width: 768px) {
          .contact-title {
            font-size: 2.25rem;
            margin-bottom: 20px;
          }
        }

        .contact-desc {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 24px;
        }

        @media (min-width: 768px) {
          .contact-desc {
            font-size: 1.0625rem;
            margin-bottom: 32px;
          }
        }

        .contact-perks-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 28px;
        }

        .perk-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .perk-icon {
          color: var(--text-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .perk-item strong {
          font-family: var(--font-display);
          font-size: 0.8125rem;
          color: var(--text-primary);
          display: block;
        }

        .perk-item p {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .direct-contact-box {
          border-top: 1px solid var(--border-light);
          padding-top: 18px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .direct-label {
          font-size: 0.6875rem;
          font-family: var(--font-display);
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .direct-email {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          text-decoration: underline;
        }

        @media (min-width: 768px) {
          .direct-email {
            font-size: 1.125rem;
          }
        }

        .location-tag {
          font-size: 0.6875rem;
          color: var(--text-secondary);
        }

        /* Form Col */
        .contact-form-col {
          padding: 24px 16px;
          background: var(--bg-primary);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .contact-form-col {
            padding: 48px;
          }
        }

        .inquiry-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        @media (min-width: 768px) {
          .inquiry-form {
            gap: 22px;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .tags-flex-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tag-choice-btn {
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 6px 12px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          transition: all var(--transition-fast);
          cursor: pointer;
        }

        .tag-choice-btn.selected {
          background: var(--bg-dark);
          color: var(--text-inverse);
          border-color: var(--bg-dark);
        }

        .radio-grid-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px;
        }

        @media (min-width: 576px) {
          .radio-grid-row {
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
          }
        }

        .radio-choice-btn {
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 8px 10px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 46px;
          line-height: 1.3;
          transition: all var(--transition-fast);
          cursor: pointer;
        }

        .radio-choice-btn.selected {
          background: var(--bg-dark);
          color: var(--text-inverse);
          border-color: var(--bg-dark);
        }

        .inputs-dual-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        @media (min-width: 576px) {
          .inputs-dual-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
        }

        .form-group input, .form-group textarea {
          width: 100%;
          padding: 12px 14px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          font-size: 0.8125rem;
          color: var(--text-primary);
          outline: none;
          transition: all var(--transition-fast);
        }

        .form-group input.has-error, .form-group textarea.has-error {
          border-color: #ef4444;
          background: #fff5f5;
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--border-strong);
          background: #ffffff;
        }

        .inline-field-error {
          font-size: 0.75rem;
          color: #dc2626;
          font-family: var(--font-display);
          font-weight: 600;
          margin-top: 2px;
        }

        .spinner-icon {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .submit-lead-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Error Toast Banner */
        .error-toast-banner {
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: var(--radius-md);
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 4px;
        }

        .toast-content {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .toast-icon {
          color: #dc2626;
          flex-shrink: 0;
        }

        .toast-text strong {
          font-family: var(--font-display);
          font-size: 0.8125rem;
          color: #991b1b;
          display: block;
        }

        .toast-text p {
          font-size: 0.75rem;
          color: #b91c1c;
          margin: 0;
        }

        .toast-retry-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          background: #dc2626;
          color: #ffffff;
          border-radius: var(--radius-sm);
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 600;
          transition: background var(--transition-fast);
        }

        .toast-retry-btn:hover {
          background: #b91c1c;
        }

        /* =========================================================
           APPLE-STYLE CONFIRMATION CARD STYLES
           ========================================================= */
        .apple-success-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 24px 16px;
          background: var(--bg-primary);
        }

        @media (min-width: 768px) {
          .apple-success-card {
            padding: 36px 24px;
          }
        }

        .success-check-badge {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #000000;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
        }

        .apple-success-title {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin-bottom: 10px;
        }

        .apple-success-text {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 440px;
          margin-bottom: 24px;
        }

        .reference-pill-box {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 12px 18px;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          margin-bottom: 28px;
          width: 100%;
          max-width: 360px;
        }

        .ref-label {
          font-family: var(--font-display);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }

        .ref-code-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ref-code {
          font-family: monospace;
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: 0.05em;
        }

        .copy-ref-btn {
          padding: 4px;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .copy-ref-btn:hover {
          color: var(--text-primary);
        }

        .copied-icon {
          color: #10b981;
        }

        .apple-success-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
          max-width: 360px;
        }

        /* Modal Specific Overrides */
        .contact-section.is-modal {
          padding: 0;
          border-top: none;
          background: transparent;
        }

        .contact-section.is-modal .contact-card-wrapper {
          border: none;
          box-shadow: none;
          border-radius: 0;
        }

        .contact-section.is-modal .contact-form-col {
          padding-bottom: 36px;
        }
      `}</style>
    </section>
  );
}
