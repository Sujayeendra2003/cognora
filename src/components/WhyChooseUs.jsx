import React from 'react';
import { Cpu, Eye, UserCheck, TrendingUp, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

export default function WhyChooseUs({ onOpenInquiry }) {
  const differentiators = [
    {
      icon: Cpu,
      title: 'AI-Native Engineering',
      desc: 'While traditional agencies treat AI as a gimmick, we build native vector pipelines, custom AI agents, and RAG search directly into your web architecture from day one.'
    },
    {
      icon: Eye,
      title: 'Obsessive Monochromatic Craftsmanship',
      desc: 'We eliminate visual noise. Our clean monochromatic white aesthetic leverages generous whitespace, strict typography tokens, and subtle micro-interactions that project quiet authority.'
    },
    {
      icon: UserCheck,
      title: 'Direct Senior Founder Access',
      desc: 'No account managers, no game of telephone, and no junior handoffs. You work directly with lead engineers and designers who own your project end-to-end.'
    },
    {
      icon: TrendingUp,
      title: 'Conversion-Focused Architecture',
      desc: 'Beautiful UI is worthless if it doesn’t drive business growth. Every headline, CTA placement, and interactive element is designed to maximize inbound lead conversion.'
    }
  ];

  return (
    <section className="section why-us-section">
      <div className="container">
        <div className="why-us-grid">
          {/* Left Column: Heading & Highlight Banner */}
          <div className="why-us-left fade-up">
            <div className="section-tag">
              <span className="dot"></span>
              <span>The Cognora Difference</span>
            </div>
            <h2 className="section-title">
              Why leading brands choose <span className="editorial">Cognora.</span>
            </h2>
            <p className="section-subtitle">
              We operate as a high-velocity boutique studio. We intentionally limit our active client intake to 3 projects per quarter to guarantee uncompromising craftsmanship.
            </p>

            <div className="founder-guarantee-card">
              <div className="guarantee-header">
                <ShieldCheck size={20} className="guarantee-icon" />
                <span>Our Founder Commitment</span>
              </div>
              <p className="guarantee-text">
                "If your new digital flagship doesn’t achieve sub-second load performance and a noticeable lift in lead quality, we continue optimizing at zero additional cost until it does."
              </p>
              <div className="guarantee-author">
                <span className="author-name">Alex Thorne</span>
                <span className="author-role">Founder &amp; Principal Architect</span>
              </div>
            </div>
          </div>

          {/* Right Column: Grid of 4 Cards */}
          <div className="why-us-right fade-up delay-2">
            <div className="diff-cards-grid">
              {differentiators.map((diff, index) => {
                const Icon = diff.icon;
                return (
                  <div key={index} className="diff-card card-mono">
                    <div className="diff-icon-box">
                      <Icon size={22} />
                    </div>
                    <h3 className="diff-title">{diff.title}</h3>
                    <p className="diff-desc">{diff.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .why-us-section {
          background-color: var(--bg-primary);
          border-top: 1px solid var(--border-light);
        }

        .why-us-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }

        @media (min-width: 992px) {
          .why-us-grid {
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
          }
        }

        .founder-guarantee-card {
          margin-top: 36px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 28px;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .guarantee-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display);
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-primary);
        }

        .guarantee-text {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.125rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .guarantee-author {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-family: var(--font-display);
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .author-role {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .diff-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 768px) {
          .diff-cards-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .diff-card {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 28px;
        }

        .diff-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
        }

        .diff-title {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .diff-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }
      `}</style>
    </section>
  );
}
