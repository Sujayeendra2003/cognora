import React, { useState } from 'react';
import { ArrowUpRight, X, Sparkles, TrendingUp, CheckCircle, ExternalLink, Zap } from 'lucide-react';

export default function SelectedWork({ onOpenInquiry }) {
  const [filter, setFilter] = useState('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const projects = [
    {
      id: 'apex-capital',
      title: 'Apex Capital Partners',
      category: 'web',
      categoryLabel: 'Web Platform & Redesign',
      image: '/images/fintech.jpg',
      year: '2026',
      subtitle: 'Ultra-fast monochromatic digital asset management flagship.',
      challenge: 'Apex Capital was struggling with an outdated, sluggish 8-second page load time and a disjointed brand image that resulted in low client inquiry conversion.',
      solution: 'We engineered a bespoke, sub-second web architecture with high-contrast minimalist typography, interactive portfolio asset graphs, and instant lead intake routing.',
      metrics: [
        { label: 'Conversion Lift', val: '+142%' },
        { label: 'Lighthouse Speed', val: '99 / 100' },
        { label: 'Inbound Inquiries', val: '3.4x' }
      ],
      quote: '"Cognora delivered a digital flagship that instantly positioned us as the premier asset manager in our tier. Our conversion rates doubled within 30 days of launch."',
      author: 'Evelyn Vance, Managing Partner'
    },
    {
      id: 'aura-ai',
      title: 'Aura Autonomous Assistant',
      category: 'ai',
      categoryLabel: 'AI Automation & Agents',
      image: '/images/ai-agent.jpg',
      year: '2026',
      subtitle: '24/7 intelligent concierge agent for luxury e-commerce.',
      challenge: 'Aura Luxury required round-the-clock VIP client concierge services without inflating support staff overhead across global timezones.',
      solution: 'We trained a custom RAG-powered AI assistant embedded natively into the site. The agent resolves product inquiries, qualifies buyers, and schedules consultation calls seamlessly.',
      metrics: [
        { label: 'Inquiries Handled', val: '24,000+' },
        { label: 'Response Time', val: '< 0.8s' },
        { label: 'CSAT Rating', val: '98.6%' }
      ],
      quote: '"The AI assistant built by Cognora handles 80% of our tier-1 concierge requests effortlessly. It feels so natural that clients compliment our support team constantly."',
      author: 'Marcus Lindqvist, Head of Product'
    },
    {
      id: 'kanso-arch',
      title: 'Kanso Architecture Atelier',
      category: 'design',
      categoryLabel: 'UI/UX & Web Redesign',
      image: '/images/architecture.jpg',
      year: '2025',
      subtitle: 'Editorial minimalism and fluid grid portfolio experience.',
      challenge: 'Kanso Studio needed an editorial portfolio that honored their stark minimalist Japanese architectural philosophy while delivering smooth mobile responsiveness.',
      solution: 'We designed an ultra-refined grid system with fluid image reveals, custom typography tokens, and smooth scroll transitions.',
      metrics: [
        { label: 'Session Duration', val: '+210%' },
        { label: 'Bounce Rate', val: '-45%' },
        { label: 'Press Feature', val: 'Architectural Digest' }
      ],
      quote: '"Working with Cognora felt like pair-designing with master craftsmen. They understood whitespace better than any digital studio we have ever hired."',
      author: 'Kenji Sato, Design Director'
    },
    {
      id: 'synapse-workflow',
      title: 'Synapse Workflow Canvas',
      category: 'ai',
      categoryLabel: 'AI Systems & SaaS',
      image: '/images/workflow.jpg',
      year: '2025',
      subtitle: 'Autonomous node-based workflow engine for enterprise SaaS.',
      challenge: 'Synapse needed a scalable visual workflow platform to automate multi-department data pipelines for Fortune 500 teams.',
      solution: 'We built a high-performance web canvas interface with real-time node drag-and-drop state, sub-millisecond execution indicators, and dark/light crisp tokens.',
      metrics: [
        { label: 'Active Workflows', val: '120k+' },
        { label: 'Task Time Saved', val: '45,000 hrs' },
        { label: 'Enterprise Retention', val: '99.4%' }
      ],
      quote: '"Cognora brought software-engineering level craftsmanship to our frontend interface. They delivered ahead of schedule and exceeded every design benchmark."',
      author: 'Dr. Elena Rostova, CTO'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="section work-section">
      <div className="container">
        <div className="work-header fade-up">
          <div className="header-left">
            <div className="section-tag">
              <span className="dot"></span>
              <span>Case Studies &amp; Proven Impact</span>
            </div>
            <h2 className="section-title">
              Selected Work &amp; <span className="editorial">Digital Flagships.</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tab-bar">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'web', label: 'Web Platforms' },
              { id: 'ai', label: 'AI Systems' },
              { id: 'design', label: 'UI/UX Design' }
            ].map(tab => (
              <button
                key={tab.id}
                className={`filter-btn ${filter === tab.id ? 'active' : ''}`}
                onClick={() => setFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="work-grid fade-up delay-2">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedCaseStudy(project)}
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-img" 
                  loading="lazy"
                />
                <div className="project-overlay">
                  <span className="view-case-btn">
                    <span>Explore Case Study</span>
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              <div className="project-meta">
                <div className="project-tags-row">
                  <span className="project-category-tag">{project.categoryLabel}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                
                {/* Metric pill */}
                <div className="project-highlight-metric">
                  <TrendingUp size={14} />
                  <span>{project.metrics[0].label}: {project.metrics[0].val}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal Overlay */}
      {selectedCaseStudy && (
        <div className="modal-overlay" onClick={() => setSelectedCaseStudy(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top-bar">
              <div className="modal-tag">{selectedCaseStudy.categoryLabel}</div>
              <button className="close-modal-btn" onClick={() => setSelectedCaseStudy(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body-content">
              <h2 className="modal-project-title">{selectedCaseStudy.title}</h2>
              <p className="modal-project-sub">{selectedCaseStudy.subtitle}</p>

              <div className="modal-hero-img-box">
                <img src={selectedCaseStudy.image} alt={selectedCaseStudy.title} />
              </div>

              {/* Metrics Grid */}
              <div className="modal-metrics-grid">
                {selectedCaseStudy.metrics.map((m, idx) => (
                  <div key={idx} className="modal-metric-card">
                    <span className="modal-m-val">{m.val}</span>
                    <span className="modal-m-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="modal-narrative-grid">
                <div className="narrative-col">
                  <h3>The Challenge</h3>
                  <p>{selectedCaseStudy.challenge}</p>
                </div>
                <div className="narrative-col">
                  <h3>The Solution</h3>
                  <p>{selectedCaseStudy.solution}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="modal-quote-box">
                <p>{selectedCaseStudy.quote}</p>
                <span className="quote-author">— {selectedCaseStudy.author}</span>
              </div>

              <div className="modal-footer-actions">
                <button 
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    onOpenInquiry();
                  }}
                  className="btn btn-primary"
                >
                  <span>Build A Similar Solution</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .work-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
        }

        .work-header {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 36px;
        }

        @media (min-width: 992px) {
          .work-header {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
            margin-bottom: 56px;
          }
        }

        .filter-tab-bar {
          display: flex;
          gap: 6px;
          background: var(--bg-primary);
          padding: 4px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-light);
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          max-width: 100%;
          scrollbar-width: none;
        }

        .filter-tab-bar::-webkit-scrollbar {
          display: none;
        }

        .filter-btn {
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          transition: all var(--transition-fast);
          white-space: nowrap;
          flex-shrink: 0;
        }

        @media (min-width: 576px) {
          .filter-btn {
            font-size: 0.8125rem;
            padding: 8px 18px;
          }
        }

        .filter-btn.active {
          background-color: var(--bg-dark);
          color: var(--text-inverse);
        }

        .work-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 768px) {
          .work-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }

        .project-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .project-card:hover {
          border-color: var(--border-strong);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px var(--accent-shadow-hover);
        }

        .project-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #f0f0f4;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s var(--ease-out);
        }

        .project-card:hover .project-img {
          transform: scale(1.04);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 12, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-normal);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .view-case-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #0a0a0c;
          font-family: var(--font-display);
          font-size: 0.8125rem;
          font-weight: 700;
          padding: 10px 20px;
          border-radius: var(--radius-full);
        }

        .project-meta {
          padding: 20px;
        }

        @media (min-width: 768px) {
          .project-meta {
            padding: 24px;
          }
        }

        .project-tags-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .project-category-tag {
          font-family: var(--font-display);
          font-size: 0.6875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .project-year {
          font-family: var(--font-display);
          font-size: 0.6875rem;
          color: var(--text-muted);
        }

        .project-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }

        @media (min-width: 768px) {
          .project-title {
            font-size: 1.375rem;
          }
        }

        .project-subtitle {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 14px;
        }

        .project-highlight-metric {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 5px 10px;
          border-radius: var(--radius-full);
          color: var(--text-primary);
        }

        /* Modal Styles */
        .modal-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border-light);
        }

        @media (min-width: 768px) {
          .modal-top-bar {
            padding: 20px 32px;
          }
        }

        .modal-tag {
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-secondary);
        }

        .close-modal-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          transition: background var(--transition-fast);
        }

        .modal-body-content {
          padding: 20px 16px;
        }

        @media (min-width: 768px) {
          .modal-body-content {
            padding: 32px;
          }
        }

        .modal-project-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          margin-bottom: 6px;
        }

        @media (min-width: 768px) {
          .modal-project-title {
            font-size: 2.25rem;
          }
        }

        .modal-project-sub {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .modal-hero-img-box {
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border-light);
          margin-bottom: 24px;
        }

        .modal-metrics-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          margin-bottom: 24px;
        }

        @media (min-width: 576px) {
          .modal-metrics-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
        }

        .modal-metric-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 16px;
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .modal-m-val {
          font-family: var(--font-display);
          font-size: 1.375rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        @media (min-width: 768px) {
          .modal-m-val {
            font-size: 1.75rem;
          }
        }

        .modal-m-lbl {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .modal-narrative-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 24px;
        }

        @media (min-width: 768px) {
          .modal-narrative-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .narrative-col h3 {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .narrative-col p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        .modal-quote-box {
          background: var(--bg-dark);
          color: var(--text-inverse);
          padding: 20px;
          border-radius: var(--radius-md);
          margin-bottom: 24px;
        }

        @media (min-width: 768px) {
          .modal-quote-box {
            padding: 24px 32px;
          }
        }

        .modal-quote-box p {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.0625rem;
          line-height: 1.5;
          margin-bottom: 10px;
        }

        .quote-author {
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-inverse-muted);
        }

        .modal-footer-actions {
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </section>
  );
}
