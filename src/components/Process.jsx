import React, { useState } from 'react';
import { Search, Compass, Palette, Code, Rocket, Check } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discovery & AI Strategy',
      duration: 'Week 1',
      icon: Search,
      summary: 'Deep-dive into your growth metrics, brand positioning, and operational bottlenecks to define exact project scope and AI capabilities.',
      details: [
        'Stakeholder alignment & ROI mapping',
        'Competitor & UX benchmarking',
        'AI Assistant domain knowledge scoping',
        'Technical architecture roadmap'
      ]
    },
    {
      num: '02',
      title: 'Architecture & UX Blueprint',
      duration: 'Week 2',
      icon: Compass,
      summary: 'Crafting the structural foundation, conversion funnels, and wireframes to ensure seamless visitor navigation before writing visual UI.',
      details: [
        'Information architecture & sitemap',
        'High-converting wireframes',
        'User flow & inquiry wizard mapping',
        'AI conversation flow diagram'
      ]
    },
    {
      num: '03',
      title: 'Bespoke Design & Tokens',
      duration: 'Weeks 3-4',
      icon: Palette,
      summary: 'Translating wireframes into stark, modern monochromatic visual interfaces with generous whitespace and high-end editorial typography.',
      details: [
        'Monochromatic design system tokens',
        'Figma high-fidelity interactive mockups',
        'Micro-interaction & transition specs',
        'Responsive layout across 5 breakpoints'
      ]
    },
    {
      num: '04',
      title: 'Engineering & AI Integration',
      duration: 'Weeks 5-6',
      icon: Code,
      summary: 'Transforming designs into sub-second React code, fine-tuning vector embeddings, and integrating custom AI assistants and webhooks.',
      details: [
        'Clean React / Vite frontend build',
        'AI Agent vector knowledge ingestion',
        'Lead intake & CRM integration',
        'Security guardrails & fallback logic'
      ]
    },
    {
      num: '05',
      title: 'Optimization & Launch',
      duration: 'Week 7',
      icon: Rocket,
      summary: 'Comprehensive Lighthouse performance tuning, cross-browser testing, domain launch, and handover documentation.',
      details: [
        'Core Web Vitals sub-second optimization',
        'SEO & OpenGraph metadata setup',
        'Zero-downtime DNS deployment',
        'Client dashboard & AI training handover'
      ]
    }
  ];

  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="process-header fade-up">
          <div className="section-tag">
            <span className="dot"></span>
            <span>Methodology</span>
          </div>
          <h2 className="section-title">
            Our structured <span className="editorial">5-step execution process.</span>
          </h2>
          <p className="section-subtitle">
            A battle-tested agile timeline designed for total transparency, rapid iteration, and predictable delivery without scope creep.
          </p>
        </div>

        {/* Process Steps Cards */}
        <div className="process-timeline-grid fade-up delay-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;

            return (
              <div 
                key={index} 
                className={`process-card ${isActive ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="card-step-top">
                  <span className="step-num">{step.num}</span>
                  <span className="step-duration">{step.duration}</span>
                </div>

                <div className="step-icon-wrapper">
                  <Icon size={22} />
                </div>

                <h3 className="step-title">{step.title}</h3>
                <p className="step-summary">{step.summary}</p>

                <div className="step-details-box">
                  <span className="details-header">Key Deliverables:</span>
                  <ul className="step-checklist">
                    {step.details.map((item, i) => (
                      <li key={i}>
                        <Check size={14} className="check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .process-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
        }

        .process-header {
          margin-bottom: 56px;
        }

        .process-timeline-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 768px) {
          .process-timeline-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1200px) {
          .process-timeline-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        .process-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          cursor: pointer;
          transition: all var(--transition-normal);
          position: relative;
        }

        .process-card:hover {
          border-color: var(--border-strong);
          transform: translateY(-4px);
        }

        .process-card.active {
          border-color: var(--border-strong);
          box-shadow: 0 12px 32px var(--accent-shadow);
        }

        .card-step-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .step-num {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .step-duration {
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 600;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          color: var(--text-secondary);
        }

        .step-icon-wrapper {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
        }

        .step-title {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .step-summary {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
          flex: 1;
        }

        .step-details-box {
          border-top: 1px solid var(--border-light);
          padding-top: 16px;
          margin-top: 8px;
        }

        .details-header {
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          display: block;
          margin-bottom: 10px;
        }

        .step-checklist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .step-checklist li {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          font-size: 0.8125rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .check-icon {
          color: var(--text-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }
      `}</style>
    </section>
  );
}
