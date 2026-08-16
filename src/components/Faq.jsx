import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How does Cognora differ from a typical freelancer or digital agency?',
      a: 'We operate as a high-velocity boutique studio. Unlike traditional agencies that pass work to junior designers or rely on bloated WordPress templates, every project is engineered directly by senior founders using bespoke React architecture and custom-trained AI systems.'
    },
    {
      q: 'What is your typical project delivery timeline?',
      a: 'Standard digital flagships take 3 to 6 weeks from kick-off to launch. Complex enterprise applications with custom AI agent vector ingestion typically require 6 to 10 weeks.'
    },
    {
      q: 'Who owns the intellectual property and code base after launch?',
      a: 'You do — 100%. Upon final payment, full ownership of all Figma design assets, React source code, CMS configurations, and AI agent prompts is transferred entirely to your organization with zero recurring agency license lock-ins.'
    },
    {
      q: 'Is our proprietary business data safe when training an AI Website Assistant?',
      a: 'Absolutely. We build privacy-first AI pipelines using dedicated, encrypted vector storage and enterprise API endpoints where your data is never used for public model training.'
    },
    {
      q: 'Do you provide ongoing support and maintenance post-launch?',
      a: 'Yes. We offer optional retainer agreements covering monthly AI model fine-tuning, performance monitoring, feature additions, and 24/7 emergency uptime response.'
    },
    {
      q: 'Can we manage and update content ourselves without touching code?',
      a: 'Yes. We integrate modern headless CMS solutions (e.g. Sanity, Strapi, or Contentful) so your internal team can publish blog posts, update case studies, or modify copy effortlessly without developer assistance.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="faq-grid">
          {/* Header Left */}
          <div className="faq-header fade-up">
            <div className="section-tag">
              <span className="dot"></span>
              <span>Got Questions?</span>
            </div>
            <h2 className="section-title">
              Frequently asked <span className="editorial">questions.</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to know about our engineering process, intellectual property rights, and AI security.
            </p>
          </div>

          {/* Accordion Right */}
          <div className="faq-accordion-wrapper fade-up delay-2">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`faq-item ${isOpen ? 'open' : ''}`}
                >
                  <div 
                    className="faq-question-bar"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="faq-question-text">{faq.q}</h3>
                    <div className="faq-toggle-icon">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </div>

                  {isOpen && (
                    <div className="faq-answer-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .faq-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }

        @media (min-width: 992px) {
          .faq-grid {
            grid-template-columns: 0.9fr 1.1fr;
            gap: 64px;
          }
        }

        .faq-accordion-wrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color var(--transition-fast);
        }

        .faq-item:hover {
          border-color: var(--border-strong);
        }

        .faq-item.open {
          border-color: var(--border-strong);
          box-shadow: 0 8px 24px var(--accent-shadow);
        }

        .faq-question-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 28px;
          cursor: pointer;
          user-select: none;
          gap: 16px;
        }

        .faq-question-text {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
        }

        .faq-toggle-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          flex-shrink: 0;
        }

        .faq-item.open .faq-toggle-icon {
          background: var(--bg-dark);
          color: #ffffff;
        }

        .faq-answer-body {
          padding: 0 28px 24px 28px;
          border-top: 1px solid var(--border-light);
          padding-top: 18px;
          animation: fadeIn 0.3s ease;
        }

        .faq-answer-body p {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
      `}</style>
    </section>
  );
}
