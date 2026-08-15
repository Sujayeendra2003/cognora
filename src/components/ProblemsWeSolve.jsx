import React, { useState } from 'react';
import { AlertCircle, CheckCircle, ArrowRight, Shield, Zap, Sparkles, Sliders } from 'lucide-react';

export default function ProblemsWeSolve({ onOpenInquiry }) {
  const [activeProblem, setActiveProblem] = useState(0);

  const problemMatrix = [
    {
      id: 'conversion',
      problemTitle: 'Outdated & Sluggish Digital Presence',
      problemDesc: 'Slow loading times (4s+), clunky mobile UX, and outdated generic templates cause high bounce rates and diminish brand authority.',
      solutionTitle: 'Sub-Second Monochromatic Flagships',
      solutionDesc: 'Custom-built web platforms engineered for 99+ Lighthouse performance scores, editorial typography, and up to 3x higher lead conversion.',
      metric: 'Average 0.3s Load Time'
    },
    {
      id: 'ai-concierge',
      problemTitle: 'Manual Lead Intake & Unanswered Inquiries',
      problemDesc: 'Potential clients leave your website off-hours because nobody is available to answer technical questions or qualify their project scope in real-time.',
      solutionTitle: '24/7 Autonomous AI Website Concierge',
      solutionDesc: 'Custom-trained AI agents embedded natively into your site to answer FAQs, pre-qualify budget & timeline, and schedule consultations automatically.',
      metric: '100% Inquiries Answered Instantly'
    },
    {
      id: 'commodity-design',
      problemTitle: 'Generic Templates That Look Like Competitors',
      problemDesc: 'Using off-the-shelf WordPress or Webflow templates makes premium services look commoditized and reduces pricing power.',
      solutionTitle: 'Bespoke UI/UX & High-End Design Systems',
      solutionDesc: 'Stark, modern monochromatic design tailored precisely to your brand positioning, projecting quiet confidence and category leadership.',
      metric: 'Custom Designed From Scratch'
    },
    {
      id: 'tech-debt',
      problemTitle: 'Plugin Bloat & Constant Fragility',
      problemDesc: 'Relying on dozens of fragile third-party plugins that break during updates, suffer security vulnerabilities, and slow down your site.',
      solutionTitle: 'Clean Modern Frontend Architecture',
      solutionDesc: 'Zero-bloat modern stack built with resilient React/Vite components, strict type safety, and clean maintainable code base.',
      metric: 'Zero Third-Party Plugin Bloat'
    }
  ];

  return (
    <section id="problems" className="section problems-section">
      <div className="container">
        <div className="problems-header fade-up">
          <div className="section-tag">
            <span className="dot"></span>
            <span>Value Engineering</span>
          </div>
          <h2 className="section-title">
            Problems we solve for <span className="editorial">growing businesses.</span>
          </h2>
          <p className="section-subtitle">
            We bridge the gap between world-class design aesthetics and complex AI systems, replacing operational drag with automated growth.
          </p>
        </div>

        {/* Matrix Comparison Display */}
        <div className="matrix-wrapper fade-up delay-2">
          <div className="matrix-selector-bar">
            {problemMatrix.map((item, index) => (
              <button
                key={item.id}
                className={`matrix-tab-btn ${activeProblem === index ? 'active' : ''}`}
                onClick={() => setActiveProblem(index)}
              >
                <span className="tab-num">0{index + 1}</span>
                <span className="tab-title">{item.problemTitle}</span>
              </button>
            ))}
          </div>

          <div className="matrix-comparison-card">
            <div className="comparison-col problem-side">
              <div className="col-header">
                <AlertCircle size={18} className="problem-icon" />
                <span>The Traditional Bottleneck</span>
              </div>
              <h3 className="col-headline">{problemMatrix[activeProblem].problemTitle}</h3>
              <p className="col-desc">{problemMatrix[activeProblem].problemDesc}</p>
            </div>

            <div className="comparison-divider">
              <div className="arrow-badge">
                <ArrowRight size={18} />
              </div>
            </div>

            <div className="comparison-col solution-side">
              <div className="col-header">
                <CheckCircle size={18} className="solution-icon" />
                <span>The Cognora Solution</span>
              </div>
              <h3 className="col-headline">{problemMatrix[activeProblem].solutionTitle}</h3>
              <p className="col-desc">{problemMatrix[activeProblem].solutionDesc}</p>

              <div className="solution-metric-badge">
                <Zap size={14} />
                <span>{problemMatrix[activeProblem].metric}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .problems-section {
          background-color: var(--bg-primary);
          border-top: 1px solid var(--border-light);
        }

        .problems-header {
          margin-bottom: 36px;
        }

        @media (min-width: 768px) {
          .problems-header {
            margin-bottom: 56px;
          }
        }

        .matrix-wrapper {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .matrix-selector-bar {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
        }

        @media (min-width: 768px) {
          .matrix-selector-bar {
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
          }
        }

        .matrix-tab-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          font-family: var(--font-display);
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-align: left;
          transition: all var(--transition-fast);
        }

        @media (min-width: 768px) {
          .matrix-tab-btn {
            padding: 16px 20px;
            font-size: 0.875rem;
            border-radius: var(--radius-md);
          }
        }

        .matrix-tab-btn:hover {
          border-color: var(--border-medium);
          color: var(--text-primary);
        }

        .matrix-tab-btn.active {
          background: var(--bg-dark);
          color: var(--text-inverse);
          border-color: var(--bg-dark);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }

        .matrix-tab-btn .tab-num {
          font-size: 0.75rem;
          opacity: 0.6;
          flex-shrink: 0;
        }

        .matrix-tab-btn .tab-title {
          line-height: 1.3;
        }

        .matrix-comparison-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 20px 16px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          position: relative;
          box-shadow: 0 16px 48px var(--accent-shadow);
        }

        @media (min-width: 768px) {
          .matrix-comparison-card {
            border-radius: var(--radius-lg);
            padding: 32px;
          }
        }

        @media (min-width: 992px) {
          .matrix-comparison-card {
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            padding: 40px;
            gap: 40px;
          }
        }

        .comparison-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .col-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .problem-side .col-header {
          color: #dc2626;
        }

        .solution-side .col-header {
          color: var(--text-primary);
        }

        .col-headline {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }

        @media (min-width: 768px) {
          .col-headline {
            font-size: 1.625rem;
          }
        }

        .col-desc {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .comparison-divider {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .arrow-badge {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-dark);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(90deg);
        }

        @media (min-width: 992px) {
          .arrow-badge {
            width: 44px;
            height: 44px;
            transform: rotate(0deg);
          }
        }

        .solution-metric-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          color: var(--text-primary);
          width: fit-content;
        }
      `}</style>
    </section>
  );
}
