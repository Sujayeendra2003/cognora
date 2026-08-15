import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Bot, Layers, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState('web');

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Core Value Proposition */}
          <div className="hero-content fade-up">
            <div className="section-tag">
              <span className="dot"></span>
              <span>Bespoke Web &amp; AI Engineering</span>
            </div>

            <h1 className="hero-headline">
              We build digital experiences and <span className="editorial">AI systems</span> that help businesses grow.
            </h1>

            <p className="hero-description">
              Cognora is a premier creative engineering studio. We unite minimalist UI/UX design with autonomous AI agents and ultra-fast web architecture to transform modern brands into category leaders.
            </p>

            <div className="hero-actions">
              <button onClick={onOpenInquiry} className="btn btn-primary btn-lg">
                <span>Start a Project</span>
                <span className="btn-icon-wrapper">
                  <ArrowUpRight size={18} />
                </span>
              </button>

              <a href="#work" className="btn btn-secondary btn-lg">
                <span>View Selected Work</span>
              </a>
            </div>

            <div className="hero-trust-list">
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>Zero bloated templates</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>AI-native architecture</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>Direct founder access</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Teaser Widget */}
          <div className="hero-visual fade-up delay-2">
            <div className="hero-card-frame">
              <div className="card-topbar">
                <div className="card-window-controls">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="tab-switcher">
                  <button 
                    className={`tab-btn ${activeTab === 'web' ? 'active' : ''}`}
                    onClick={() => setActiveTab('web')}
                  >
                    <Layers size={13} />
                    <span>Web Platform</span>
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'ai' ? 'active' : ''}`}
                    onClick={() => setActiveTab('ai')}
                  >
                    <Bot size={13} />
                    <span>AI Assistant</span>
                  </button>
                </div>
              </div>

              <div className="card-window-body">
                {activeTab === 'web' ? (
                  <div className="web-preview-container">
                    <div className="preview-hero-mock">
                      <div className="mock-tag">CLIENT CASE STUDY // FINTECH</div>
                      <div className="mock-title">Sub-second execution. Exponential growth.</div>
                      <div className="mock-graph">
                        <div className="graph-bar-group">
                          <div className="bar" style={{ height: '40%' }}></div>
                          <div className="bar" style={{ height: '65%' }}></div>
                          <div className="bar" style={{ height: '50%' }}></div>
                          <div className="bar" style={{ height: '85%' }}></div>
                          <div className="bar active-bar" style={{ height: '100%' }}></div>
                        </div>
                        <div className="graph-badge">
                          <TrendingUp size={14} />
                          <span>+142% Lead Conversion</span>
                        </div>
                      </div>
                      <div className="mock-meta-row">
                        <div className="meta-col">
                          <span className="meta-label">Lighthouse Score</span>
                          <span className="meta-val">100 / 100</span>
                        </div>
                        <div className="meta-col">
                          <span className="meta-label">Avg Load Time</span>
                          <span className="meta-val">0.34s</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="ai-preview-container">
                    <div className="chat-msg bot-msg">
                      <div className="msg-avatar">
                        <Bot size={14} />
                      </div>
                      <div className="msg-text">
                        Hello! I am your AI Website Assistant. How can I help you explore Cognora's capabilities or estimate your project cost today?
                      </div>
                    </div>

                    <div className="chat-msg user-msg">
                      <div className="msg-text">
                        Can you build a high-speed website integrated with a custom AI support agent?
                      </div>
                    </div>

                    <div className="chat-msg bot-msg">
                      <div className="msg-avatar">
                        <Bot size={14} />
                      </div>
                      <div className="msg-text">
                        Absolutely. We engineer ultra-fast web architectures backed by fine-tuned AI agents that handle 24/7 client inquiries, lead qualification, and automated CRM sync.
                      </div>
                    </div>

                    <div className="chat-input-sim">
                      <span>Ask AI assistant a question...</span>
                      <Sparkles size={14} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Banner */}
        <div className="hero-metrics-grid fade-up delay-3">
          <div className="metric-item">
            <span className="metric-num">35+</span>
            <span className="metric-label">Shipped Web &amp; AI Systems</span>
          </div>
          <div className="metric-item">
            <span className="metric-num">140%</span>
            <span className="metric-label">Avg. Conversion Increase</span>
          </div>
          <div className="metric-item">
            <span className="metric-num">0.3s</span>
            <span className="metric-label">Average Page Load Speed</span>
          </div>
          <div className="metric-item">
            <span className="metric-num">99.8%</span>
            <span className="metric-label">Client Satisfaction Rate</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: calc(var(--nav-height) + 24px);
          padding-bottom: 60px;
          background: linear-gradient(180deg, #ffffff 0%, #fcfcfd 100%);
        }

        @media (min-width: 768px) {
          .hero-section {
            padding-top: calc(var(--nav-height) + 60px);
            padding-bottom: 80px;
          }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          align-items: center;
        }

        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 64px;
          }
        }

        .hero-headline {
          font-family: var(--font-display);
          font-size: 2.125rem;
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.04em;
          color: var(--text-primary);
          margin-bottom: 20px;
          word-break: break-word;
        }

        @media (min-width: 576px) {
          .hero-headline {
            font-size: 2.75rem;
          }
        }

        @media (min-width: 768px) {
          .hero-headline {
            font-size: 3.75rem;
          }
        }

        @media (min-width: 1200px) {
          .hero-headline {
            font-size: 4.5rem;
          }
        }

        .hero-headline .editorial {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
        }

        .hero-description {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 28px;
          max-width: 600px;
        }

        @media (min-width: 768px) {
          .hero-description {
            font-size: 1.25rem;
            margin-bottom: 36px;
          }
        }

        .hero-actions {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 12px;
          margin-bottom: 32px;
          width: 100%;
        }

        @media (min-width: 576px) {
          .hero-actions {
            flex-direction: row;
            align-items: center;
            width: auto;
            gap: 16px;
            margin-bottom: 40px;
          }
        }

        .btn-lg {
          padding: 16px 28px;
          font-size: 0.9375rem;
        }

        @media (min-width: 768px) {
          .btn-lg {
            padding: 18px 34px;
            font-size: 1rem;
          }
        }

        .hero-trust-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 20px;
          border-top: 1px solid var(--border-light);
        }

        @media (min-width: 576px) {
          .hero-trust-list {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 24px;
            padding-top: 24px;
          }
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .trust-icon {
          color: var(--text-primary);
          flex-shrink: 0;
        }

        /* Hero Teaser Card Frame */
        .hero-card-frame {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-md);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.07);
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .hero-card-frame {
            border-radius: var(--radius-lg);
          }
        }

        .card-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-light);
        }

        .card-window-controls {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .card-window-controls .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #d1d1d6;
        }

        .tab-switcher {
          display: flex;
          gap: 4px;
          background-color: #ffffff;
          padding: 3px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-light);
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          font-size: 0.6875rem;
          font-family: var(--font-display);
          font-weight: 600;
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        @media (min-width: 576px) {
          .tab-btn {
            font-size: 0.75rem;
            padding: 4px 12px;
            gap: 6px;
          }
        }

        .tab-btn.active {
          background-color: var(--bg-dark);
          color: var(--text-inverse);
        }

        .card-window-body {
          padding: 16px;
          min-height: auto;
        }

        @media (min-width: 768px) {
          .card-window-body {
            padding: 24px;
            min-height: 360px;
          }
        }

        /* Web Preview Mock */
        .web-preview-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .preview-hero-mock {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 16px;
          border-radius: var(--radius-sm);
        }

        @media (min-width: 768px) {
          .preview-hero-mock {
            padding: 24px;
            border-radius: var(--radius-md);
          }
        }

        .mock-tag {
          font-family: var(--font-display);
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--text-muted);
          margin-bottom: 6px;
        }

        .mock-title {
          font-family: var(--font-display);
          font-size: 1.0625rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .mock-graph {
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          padding: 12px;
          margin-bottom: 16px;
        }

        @media (min-width: 576px) {
          .mock-graph {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
            height: 100px;
            padding: 16px;
          }
        }

        .graph-bar-group {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          height: 60px;
          width: 100%;
        }

        @media (min-width: 576px) {
          .graph-bar-group {
            height: 100%;
            gap: 12px;
          }
        }

        .bar {
          flex: 1;
          background-color: #e2e2e6;
          border-radius: 4px;
          transition: height 0.5s ease;
        }

        .bar.active-bar {
          background-color: var(--bg-dark);
        }

        .graph-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-display);
          font-size: 0.6875rem;
          font-weight: 700;
          background: #f0fdf4;
          color: #15803d;
          padding: 5px 8px;
          border-radius: var(--radius-full);
          border: 1px solid #bbf7d0;
          width: fit-content;
        }

        .mock-meta-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        @media (min-width: 576px) {
          .mock-meta-row {
            flex-direction: row;
            gap: 24px;
          }
        }

        .meta-col {
          display: flex;
          flex-direction: column;
        }

        .meta-label {
          font-size: 0.6875rem;
          color: var(--text-muted);
        }

        .meta-val {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        /* AI Preview Container */
        .ai-preview-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .chat-msg {
          display: flex;
          gap: 8px;
          max-width: 92%;
        }

        .bot-msg {
          align-self: flex-start;
        }

        .user-msg {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .msg-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: var(--bg-dark);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .msg-text {
          font-size: 0.8125rem;
          padding: 10px 14px;
          border-radius: 12px;
          line-height: 1.4;
        }

        .bot-msg .msg-text {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          color: var(--text-primary);
          border-top-left-radius: 2px;
        }

        .user-msg .msg-text {
          background-color: var(--bg-dark);
          color: #ffffff;
          border-top-right-radius: 2px;
        }

        .chat-input-sim {
          margin-top: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        /* Hero Metrics Grid */
        .hero-metrics-grid {
          margin-top: 40px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          padding: 20px;
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          box-shadow: 0 10px 30px var(--accent-shadow);
        }

        @media (min-width: 480px) {
          .hero-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (min-width: 992px) {
          .hero-metrics-grid {
            margin-top: 80px;
            grid-template-columns: repeat(4, 1fr);
            padding: 36px;
            border-radius: var(--radius-lg);
          }
        }

        .metric-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          border-left: 2px solid var(--text-primary);
          padding-left: 14px;
        }

        .metric-num {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          line-height: 1;
        }

        @media (min-width: 768px) {
          .metric-num {
            font-size: 2.25rem;
          }
        }

        .metric-label {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
