import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import ProjectModal, { Project } from './ProjectModal';

export default function SelectedWork({ onOpenInquiry }) {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects: (Project & { image: string; filterCategory: string })[] = [
    {
      id: 'apex-capital',
      title: 'Apex Capital Partners',
      filterCategory: 'web',
      category: 'Web Platform & Redesign',
      client: 'Apex Capital Partners Ltd.',
      year: '2026',
      image: '/images/fintech.jpg',
      imageGradient: 'bg-gradient-to-br from-zinc-900 via-neutral-900 to-black',
      description: 'Ultra-fast monochromatic digital asset management flagship.',
      fullStory: 'Apex Capital was struggling with an outdated, sluggish 8-second page load time and a disjointed brand image that resulted in low client inquiry conversion. We engineered a bespoke, sub-second web architecture with high-contrast minimalist typography, interactive portfolio asset graphs, and instant lead intake routing.',
      impact: [
        '+142% Conversion Rate Lift',
        '99/100 Google Lighthouse Speed Score',
        '3.4x Inbound Qualified Lead Volume',
        'Sub-second Instant Page Load Performance'
      ],
      techStack: ['React 18', 'TypeScript', 'Vite', 'TailwindCSS', 'PostgreSQL'],
      stats: [
        { label: 'Conversion Lift', value: '+142%' },
        { label: 'Lighthouse Speed', value: '99/100' },
        { label: 'Inbound Inquiries', value: '3.4x' }
      ]
    },
    {
      id: 'aura-ai',
      title: 'Aura Autonomous Assistant',
      filterCategory: 'ai',
      category: 'AI Automation & Agents',
      client: 'Aura Luxury Global',
      year: '2026',
      image: '/images/ai-agent.jpg',
      imageGradient: 'bg-gradient-to-br from-zinc-950 via-stone-900 to-black',
      description: '24/7 intelligent concierge agent for luxury e-commerce.',
      fullStory: 'Aura Luxury required round-the-clock VIP client concierge services without inflating support staff overhead across global timezones. We trained a custom RAG-powered AI assistant embedded natively into the site. The agent resolves product inquiries, qualifies buyers, and schedules consultation calls seamlessly.',
      impact: [
        '24,000+ Inquiries Handled Automatically',
        '< 0.8s Average Response Time',
        '98.6% Customer Satisfaction (CSAT) Score',
        '80% Tier-1 Support Automation Coverage'
      ],
      techStack: ['Python', 'LangChain', 'Vector DB', 'React', 'OpenAI API'],
      stats: [
        { label: 'Inquiries Handled', value: '24,000+' },
        { label: 'Response Time', value: '< 0.8s' },
        { label: 'CSAT Rating', value: '98.6%' }
      ]
    },
    {
      id: 'kanso-arch',
      title: 'Kanso Architecture Atelier',
      filterCategory: 'design',
      category: 'UI/UX & Web Redesign',
      client: 'Kanso Architecture Studio',
      year: '2025',
      image: '/images/architecture.jpg',
      imageGradient: 'bg-gradient-to-br from-neutral-950 via-zinc-900 to-zinc-950',
      description: 'Editorial minimalism and fluid grid portfolio experience.',
      fullStory: 'Kanso Studio needed an editorial portfolio that honored their stark minimalist Japanese architectural philosophy while delivering smooth mobile responsiveness. We designed an ultra-refined grid system with fluid image reveals, custom typography tokens, and smooth scroll transitions.',
      impact: [
        '+210% Average Session Duration',
        '-45% Bounce Rate Reduction',
        'Featured in Architectural Digest',
        'Fluid Touch Gesture Navigation'
      ],
      techStack: ['Next.js', 'Framer Motion', 'Vanilla CSS', 'TailwindCSS'],
      stats: [
        { label: 'Session Duration', value: '+210%' },
        { label: 'Bounce Rate', value: '-45%' },
        { label: 'Media Feature', value: 'Arch Digest' }
      ]
    },
    {
      id: 'synapse-workflow',
      title: 'Synapse Workflow Canvas',
      filterCategory: 'ai',
      category: 'AI Systems & SaaS',
      client: 'Synapse Software Inc.',
      year: '2025',
      image: '/images/workflow.jpg',
      imageGradient: 'bg-gradient-to-br from-black via-zinc-900 to-neutral-900',
      description: 'Autonomous node-based workflow engine for enterprise SaaS.',
      fullStory: 'Synapse needed a scalable visual workflow platform to automate multi-department data pipelines for Fortune 500 teams. We built a high-performance web canvas interface with real-time node drag-and-drop state, sub-millisecond execution indicators, and dark/light crisp tokens.',
      impact: [
        '120k+ Active Automated Workflows',
        '45,000 Hours Saved Annually',
        '99.4% Enterprise Account Retention',
        'Sub-millisecond State Synchronization'
      ],
      techStack: ['React', 'TypeScript', 'WebSockets', 'Canvas API', 'TailwindCSS'],
      stats: [
        { label: 'Active Workflows', value: '120k+' },
        { label: 'Task Time Saved', value: '45,000 hrs' },
        { label: 'Enterprise Retention', value: '99.4%' }
      ]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.filterCategory === filter);

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
              onClick={() => setSelectedProject(project)}
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
                  <span className="project-category-tag">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.description}</p>
                
                {/* Metric pill */}
                <div className="project-highlight-metric">
                  <TrendingUp size={14} />
                  <span>{project.stats[0].label}: {project.stats[0].value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <style>{`
        .work-section {
          background-color: var(--bg-primary);
          border-top: 1px solid var(--border-light);
        }

        .work-header {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 48px;
        }

        @media (min-width: 992px) {
          .work-header {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
          }
        }

        .filter-tab-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 8px;
          -webkit-overflow-scrolling: touch;
        }

        .filter-btn {
          font-family: var(--font-display);
          font-size: 0.8125rem;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          background: var(--bg-secondary);
          color: var(--text-secondary);
          border: 1px solid var(--border-light);
          white-space: nowrap;
          transition: all var(--transition-fast);
          cursor: pointer;
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-strong);
        }

        .filter-btn.active {
          background: var(--bg-dark);
          color: var(--text-inverse);
          border-color: var(--bg-dark);
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
          background: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: all var(--transition-normal);
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          border-color: var(--border-strong);
          transform: translateY(-6px);
          box-shadow: 0 20px 48px var(--accent-shadow-hover);
        }

        .project-image-wrapper {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: var(--bg-secondary);
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s var(--ease-out-expo);
        }

        .project-card:hover .project-img {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
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
          font-family: var(--font-display);
          font-size: 0.8125rem;
          font-weight: 600;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.4);
          padding: 10px 20px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .project-meta {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex-grow: 1;
        }

        .project-tags-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .project-category-tag {
          font-family: var(--font-display);
          font-size: 0.6875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .project-year {
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .project-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
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
        }

        .project-highlight-metric {
          margin-top: 8px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-primary);
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          align-self: flex-start;
        }
      `}</style>
    </section>
  );
}
