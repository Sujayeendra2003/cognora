import React, { useState } from 'react';
import { Globe, RefreshCw, Bot, Sparkles, Layout, ArrowRight, Check, ChevronDown, Cpu } from 'lucide-react';

export default function Services({ onOpenInquiry }) {
  const [expandedService, setExpandedService] = useState(0);

  const services = [
    {
      id: 'web-development',
      icon: Globe,
      num: '01',
      title: 'Premium Business Websites',
      shortDesc: 'Bespoke, high-converting digital flagships engineered from scratch with sub-second performance, responsive elegance, and clean monochromatic aesthetics.',
      outcomes: ['Sub-second page load speeds', 'Up to 3x increase in lead conversion', 'SEO optimized architecture'],
      deliverables: ['Custom UI/UX Wireframes & Visuals', 'Bespoke Frontend Architecture', 'CMS & Content Modeling', 'SEO & Analytics Integration'],
      techStack: ['React / Vite', 'Next.js', 'Headless CMS', 'Tailored Vanilla CSS']
    },
    {
      id: 'website-redesign',
      icon: RefreshCw,
      num: '02',
      title: 'Website Redesigns & Performance',
      shortDesc: 'Transform outdated, slow, template-locked websites into sleek, high-performing corporate assets that reflect your brand’s true authority.',
      outcomes: ['Eliminate technical debt', 'Modernize brand positioning', 'Core Web Vitals 95+ Score'],
      deliverables: ['Full UX Audit & Conversion Analysis', 'Complete Design System Refresh', 'Seamless Content Migration', 'Performance Optimization'],
      techStack: ['Lighthouse Optimization', 'Vite / Modern JS', 'Responsive Fluid Grids']
    },
    {
      id: 'ai-automation',
      icon: Bot,
      num: '03',
      title: 'AI Automation & Custom AI Agents',
      shortDesc: 'Autonomous backend AI workflows and custom multi-agent pipelines that replace repetitive manual tasks, qualify inbound leads, and sync enterprise data.',
      outcomes: ['Reduce manual operational overhead by 70%', 'Instant 24/7 lead routing', 'Error-free CRM & Database sync'],
      deliverables: ['Workflow Process Mapping', 'Custom AI Agent Development', 'API & Webhook Integrations', 'Autonomous Fallback & Guardrails'],
      techStack: ['Python / LangChain', 'OpenAI & Claude API', 'Vector Databases', 'Serverless Functions']
    },
    {
      id: 'ai-assistants',
      icon: Sparkles,
      num: '04',
      title: 'AI-Powered Website Assistants',
      shortDesc: 'Intelligent, brand-trained chatbot concierges embedded directly into your website to guide visitors, answer technical FAQs, and convert prospects 24/7.',
      outcomes: ['24/7 Instant response time', 'Pre-qualified consultation booking', 'Custom domain knowledge base'],
      deliverables: ['Brand Knowledge Base Ingestion', 'Custom UI Assistant Widget', 'Lead Capture & Email Alerts', 'Conversation Analytics Dashboard'],
      techStack: ['Vector Embeddings', 'RAG Architecture', 'Type-safe Client SDK', 'Custom UI Overlay']
    },
    {
      id: 'ui-ux-design',
      icon: Layout,
      num: '05',
      title: 'UI/UX Design & Design Systems',
      shortDesc: 'Sophisticated, human-centric design systems built with precision typography, strict spacing rules, and sleek micro-interactions that elevate your product experience.',
      outcomes: ['Consistent brand authority', 'Seamless multi-device experience', 'Scalable component library'],
      deliverables: ['User Journey Mapping', 'Figma Interactive Prototypes', 'Complete Design System Tokens', 'Developer Handoff Specs'],
      techStack: ['Figma Master Components', 'Design Tokens', 'Micro-interaction Specs']
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="services-header fade-up">
          <div className="section-tag">
            <span className="dot"></span>
            <span>Capabilities &amp; Expertise</span>
          </div>
          <h2 className="section-title">
            Bespoke services engineered for <span className="editorial">maximum impact.</span>
          </h2>
          <p className="section-subtitle">
            We don't do generic website templates. Every solution is custom-architected to solve specific growth bottlenecks for ambitious brands.
          </p>
        </div>

        <div className="services-list fade-up delay-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedService === index;

            return (
              <div 
                key={service.id} 
                className={`service-accordion-item ${isExpanded ? 'expanded' : ''}`}
              >
                <div 
                  className="service-summary-bar"
                  onClick={() => setExpandedService(isExpanded ? null : index)}
                >
                  <div className="service-left">
                    <span className="service-number">{service.num}</span>
                    <div className="service-icon-box">
                      <Icon size={20} />
                    </div>
                    <h3 className="service-name">{service.title}</h3>
                  </div>

                  <div className="service-right">
                    <span className="expand-label">{isExpanded ? 'Collapse' : 'Explore Scope'}</span>
                    <div className={`chevron-box ${isExpanded ? 'rotate' : ''}`}>
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="service-expanded-content">
                    <p className="service-full-desc">{service.shortDesc}</p>

                    <div className="service-details-grid">
                      {/* Column 1: Deliverables */}
                      <div className="detail-card">
                        <h4 className="detail-title">
                          <Check size={16} /> Key Deliverables
                        </h4>
                        <ul className="detail-list">
                          {service.deliverables.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2: Business Outcomes */}
                      <div className="detail-card">
                        <h4 className="detail-title">
                          <Sparkles size={16} /> Measurable Outcomes
                        </h4>
                        <ul className="detail-list">
                          {service.outcomes.map((outcome, i) => (
                            <li key={i}>{outcome}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 3: Tech Stack */}
                      <div className="detail-card">
                        <h4 className="detail-title">
                          <Cpu size={16} /> Architecture &amp; Tech
                        </h4>
                        <div className="tech-tags-wrapper">
                          {service.techStack.map((tech, i) => (
                            <span key={i} className="tech-pill">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="service-cta-row">
                      <button onClick={onOpenInquiry} className="btn btn-primary w-full-mobile">
                        <span>Inquire About {service.title}</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-section {
          background-color: var(--bg-primary);
          border-top: 1px solid var(--border-light);
        }

        .services-header {
          margin-bottom: 40px;
        }

        @media (min-width: 768px) {
          .services-header {
            margin-bottom: 64px;
          }
        }

        .services-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        @media (min-width: 768px) {
          .services-list {
            gap: 16px;
          }
        }

        .service-accordion-item {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .service-accordion-item:hover {
          border-color: var(--border-strong);
        }

        .service-accordion-item.expanded {
          border-color: var(--border-strong);
          box-shadow: 0 12px 32px var(--accent-shadow);
        }

        .service-summary-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 16px;
          cursor: pointer;
          user-select: none;
          gap: 12px;
        }

        @media (min-width: 768px) {
          .service-summary-bar {
            padding: 28px 32px;
          }
        }

        .service-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
        }

        @media (min-width: 768px) {
          .service-left {
            gap: 24px;
          }
        }

        .service-number {
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          width: 20px;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .service-number {
            font-size: 0.875rem;
            width: 24px;
          }
        }

        .service-icon-box {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .service-icon-box {
            width: 44px;
            height: 44px;
          }
        }

        .service-name {
          font-family: var(--font-display);
          font-size: 1.0625rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          line-height: 1.25;
          word-break: break-word;
        }

        @media (min-width: 576px) {
          .service-name {
            font-size: 1.25rem;
          }
        }

        @media (min-width: 768px) {
          .service-name {
            font-size: 1.625rem;
          }
        }

        .service-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .expand-label {
          display: none;
          font-family: var(--font-display);
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        @media (min-width: 768px) {
          .expand-label {
            display: block;
          }
        }

        .chevron-box {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          transition: transform var(--transition-normal);
        }

        @media (min-width: 768px) {
          .chevron-box {
            width: 32px;
            height: 32px;
          }
        }

        .chevron-box.rotate {
          transform: rotate(180deg);
          background-color: var(--bg-dark);
          color: #ffffff;
        }

        .service-expanded-content {
          padding: 0 16px 20px 16px;
          border-top: 1px solid var(--border-light);
          background-color: var(--bg-secondary);
          animation: fadeIn 0.3s ease;
        }

        @media (min-width: 768px) {
          .service-expanded-content {
            padding: 0 32px 32px 32px;
          }
        }

        .service-full-desc {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 720px;
          padding: 16px 0;
        }

        @media (min-width: 768px) {
          .service-full-desc {
            font-size: 1.0625rem;
            padding: 24px 0;
          }
        }

        .service-details-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin-bottom: 20px;
        }

        @media (min-width: 768px) {
          .service-details-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 28px;
          }
        }

        .detail-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          padding: 16px;
          border-radius: var(--radius-sm);
        }

        @media (min-width: 768px) {
          .detail-card {
            padding: 20px;
          }
        }

        .detail-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display);
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
        }

        .detail-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .detail-list li {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          position: relative;
          padding-left: 14px;
        }

        .detail-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--text-primary);
        }

        .tech-tags-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-pill {
          font-family: var(--font-display);
          font-size: 0.6875rem;
          font-weight: 600;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 3px 8px;
          border-radius: var(--radius-full);
          color: var(--text-primary);
        }

        .service-cta-row {
          display: flex;
          justify-content: flex-end;
          padding-top: 8px;
        }

        @media (max-width: 576px) {
          .w-full-mobile {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
