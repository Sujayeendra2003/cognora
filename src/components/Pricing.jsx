import React, { useState } from 'react';
import { Check, ArrowRight, Calculator, Sparkles, HelpCircle } from 'lucide-react';

export default function Pricing({ onOpenInquiryWithData }) {
  // Calculator State
  const [selectedServiceType, setSelectedServiceType] = useState('growth');
  const [selectedTimeline, setSelectedTimeline] = useState('standard');
  const [selectedAddons, setSelectedAddons] = useState(['cms', 'ai-concierge']);

  const servicePrices = {
    essential: { base: 35000, label: 'Digital Flagship' },
    growth: { base: 75000, label: 'Web + AI Assistant' },
    enterprise: { base: 150000, label: 'Custom AI Systems' }
  };

  const timelineMultipliers = {
    express: { mult: 1.25, label: 'Express (3 Weeks)' },
    standard: { mult: 1.0, label: 'Standard (6 Weeks)' },
    flexible: { mult: 0.95, label: 'Flexible (8-10 Weeks)' }
  };

  const addonPrices = [
    { id: 'cms', label: 'Custom Headless CMS', price: 12000 },
    { id: 'ai-concierge', label: 'Trained AI Website Assistant', price: 25000 },
    { id: 'design-tokens', label: 'Complete Figma Design Tokens', price: 15000 },
    { id: 'multi-lang', label: 'Multi-Language i18n System', price: 18000 },
    { id: 'analytics', label: 'Advanced Lead Conversion Dashboard', price: 9000 }
  ];

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(item => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculate total
  const baseCost = servicePrices[selectedServiceType].base;
  const addonsTotal = selectedAddons.reduce((acc, currId) => {
    const item = addonPrices.find(a => a.id === currId);
    return acc + (item ? item.price : 0);
  }, 0);
  const rawTotal = (baseCost + addonsTotal) * timelineMultipliers[selectedTimeline].mult;
  const estimatedMin = Math.round(rawTotal * 0.95);
  const estimatedMax = Math.round(rawTotal * 1.1);

  const handleInquireFromCalculator = () => {
    const summaryData = {
      serviceType: servicePrices[selectedServiceType].label,
      timeline: timelineMultipliers[selectedTimeline].label,
      estimatedBudget: selectedServiceType === 'enterprise' ? 'Custom Quote' : `₹${estimatedMin.toLocaleString('en-IN')} - ₹${estimatedMax.toLocaleString('en-IN')}`,
      addons: selectedAddons.map(id => addonPrices.find(a => a.id === id)?.label)
    };
    onOpenInquiryWithData(summaryData);
  };

  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <div className="pricing-header fade-up">
          <div className="section-tag">
            <span className="dot"></span>
            <span>Transparent Investment</span>
          </div>
          <h2 className="section-title">
            Starting from tiers &amp; <span className="editorial">instant scope estimator.</span>
          </h2>
          <p className="section-subtitle">
            No hidden fees, no surprise invoices. Clear fixed pricing tailored to the scope of your growth requirements.
          </p>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="pricing-tiers-grid fade-up delay-2">
          {/* Tier 1 */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <span className="tier-badge">Essential</span>
              <h3 className="tier-name">Digital Flagship</h3>
              <p className="tier-desc">Ideal for established companies needing a sleek, ultra-fast website redesign.</p>
              <div className="tier-price-box">
                <span className="price-starting">Investment Range</span>
                <span className="price-amount">₹35,000 – ₹60,000</span>
              </div>
            </div>

            <ul className="tier-features-list">
              <li><Check size={16} /> 5-7 Custom Monochromatic Pages</li>
              <li><Check size={16} /> Sub-second Core Web Vitals Optimization</li>
              <li><Check size={16} /> Responsive Mobile &amp; Desktop UI</li>
              <li><Check size={16} /> Lead Intake Form &amp; Analytics</li>
              <li><Check size={16} /> 3 Weeks Delivery Time</li>
            </ul>

            <button onClick={() => onOpenInquiryWithData({ serviceType: 'Digital Flagship (₹35,000–₹60,000)' })} className="btn btn-secondary w-full">
              <span>Select Digital Flagship</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Tier 2: Featured */}
          <div className="pricing-card featured">
            <div className="featured-pill">Most Popular</div>
            <div className="pricing-card-header">
              <span className="tier-badge">Growth &amp; AI</span>
              <h3 className="tier-name">Web + AI Assistant</h3>
              <p className="tier-desc">Complete website redesign integrated with a custom trained AI website concierge.</p>
              <div className="tier-price-box">
                <span className="price-starting">Investment Range</span>
                <span className="price-amount">₹75,000 – ₹1,25,000</span>
              </div>
            </div>

            <ul className="tier-features-list">
              <li><Check size={16} /> 8-12 Custom Monochromatic Pages</li>
              <li><Check size={16} /> <strong>Embedded 24/7 AI Website Assistant</strong></li>
              <li><Check size={16} /> Custom Brand Vector RAG Knowledge Base</li>
              <li><Check size={16} /> Automated CRM &amp; Email Lead Alerts</li>
              <li><Check size={16} /> Headless CMS Integration</li>
              <li><Check size={16} /> 5-6 Weeks Delivery Time</li>
            </ul>

            <button onClick={() => onOpenInquiryWithData({ serviceType: 'Web + AI Assistant (₹75,000–₹1,25,000)' })} className="btn btn-primary w-full">
              <span>Select Web + AI</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Tier 3 */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <span className="tier-badge">Enterprise</span>
              <h3 className="tier-name">Custom AI Systems</h3>
              <p className="tier-desc">Bespoke web platform, multi-agent AI workflows, and dedicated design systems.</p>
              <div className="tier-price-box">
                <span className="price-starting">Investment Range</span>
                <span className="price-amount">Custom Quote</span>
              </div>
            </div>

            <ul className="tier-features-list">
              <li><Check size={16} /> Unlimited Custom Web Pages</li>
              <li><Check size={16} /> Multi-Agent AI Workflow Automation</li>
              <li><Check size={16} /> Dedicated Figma Design System Tokens</li>
              <li><Check size={16} /> Enterprise SLA &amp; Guardrails</li>
              <li><Check size={16} /> Priority 24/7 Founder Support</li>
              <li><Check size={16} /> 8-10 Weeks Delivery Time</li>
            </ul>

            <button onClick={() => onOpenInquiryWithData({ serviceType: 'Custom AI Systems (Custom Quote)' })} className="btn btn-secondary w-full">
              <span>Request Custom Quote</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Interactive Estimator Tool */}
        <div className="estimator-tool-wrapper fade-up delay-3">
          <div className="estimator-card">
            <div className="estimator-left">
              <div className="estimator-tag">
                <Calculator size={16} />
                <span>Interactive Scope Estimator</span>
              </div>
              <h3 className="estimator-title">Build your custom project scope.</h3>
              <p className="estimator-sub">Adjust service tier, timeline, and add-ons to calculate an instant budget estimation.</p>

              {/* Step 1: Service Type */}
              <div className="estimator-group">
                <label className="group-label">1. Choose Primary Capability</label>
                <div className="estimator-options-grid">
                  {Object.entries(servicePrices).map(([key, val]) => (
                    <button
                      key={key}
                      className={`option-btn ${selectedServiceType === key ? 'active' : ''}`}
                      onClick={() => setSelectedServiceType(key)}
                    >
                      <span>{val.label}</span>
                      <span className="option-cost">+₹{val.base.toLocaleString('en-IN')}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Timeline */}
              <div className="estimator-group">
                <label className="group-label">2. Desired Turnaround Timeline</label>
                <div className="estimator-options-grid">
                  {Object.entries(timelineMultipliers).map(([key, val]) => (
                    <button
                      key={key}
                      className={`option-btn ${selectedTimeline === key ? 'active' : ''}`}
                      onClick={() => setSelectedTimeline(key)}
                    >
                      <span>{val.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Addons */}
              <div className="estimator-group">
                <label className="group-label">3. Optional Add-ons</label>
                <div className="addons-chip-list">
                  {addonPrices.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        className={`chip-btn ${isChecked ? 'active' : ''}`}
                        onClick={() => toggleAddon(addon.id)}
                      >
                        <span className="chip-check">{isChecked ? '✓' : '+'}</span>
                        <span>{addon.label} (+₹{addon.price.toLocaleString('en-IN')})</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Estimator Result Box */}
            <div className="estimator-right-box">
              <div className="result-header">Estimated Project Budget</div>
              <div className="result-amount">
                ₹{estimatedMin.toLocaleString('en-IN')} <span className="range-sep">-</span> ₹{estimatedMax.toLocaleString('en-IN')}
              </div>
              <p className="result-note">Includes full design, development, AI testing, and launch support.</p>

              <div className="result-summary-list">
                <div className="summary-row">
                  <span>Selected Tier:</span>
                  <strong>{servicePrices[selectedServiceType].label}</strong>
                </div>
                <div className="summary-row">
                  <span>Timeline:</span>
                  <strong>{timelineMultipliers[selectedTimeline].label}</strong>
                </div>
                <div className="summary-row">
                  <span>Add-ons selected:</span>
                  <strong>{selectedAddons.length} item(s)</strong>
                </div>
              </div>

              <button onClick={handleInquireFromCalculator} className="btn btn-primary w-full">
                <span>Inquire With This Scope</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .pricing-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-light);
        }

        .pricing-header {
          margin-bottom: 36px;
        }

        @media (min-width: 768px) {
          .pricing-header {
            margin-bottom: 56px;
          }
        }

        .pricing-tiers-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 40px;
        }

        @media (min-width: 768px) {
          .pricing-tiers-grid {
            gap: 28px;
            margin-bottom: 64px;
          }
        }

        @media (min-width: 992px) {
          .pricing-tiers-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .pricing-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          transition: all var(--transition-normal);
        }

        @media (min-width: 768px) {
          .pricing-card {
            padding: 36px 32px;
          }
        }

        .pricing-card:hover {
          border-color: var(--border-strong);
          transform: translateY(-4px);
        }

        .pricing-card.featured {
          border: 2px solid var(--border-strong);
          box-shadow: 0 16px 40px var(--accent-shadow);
        }

        .featured-pill {
          position: absolute;
          top: -12px;
          right: 20px;
          background: var(--bg-dark);
          color: #ffffff;
          font-family: var(--font-display);
          font-size: 0.6875rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        @media (min-width: 768px) {
          .featured-pill {
            top: -14px;
            right: 28px;
            font-size: 0.75rem;
            padding: 4px 12px;
          }
        }

        .tier-badge {
          font-family: var(--font-display);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .tier-name {
          font-family: var(--font-display);
          font-size: 1.375rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 4px 0 8px 0;
        }

        @media (min-width: 768px) {
          .tier-name {
            font-size: 1.625rem;
            margin: 6px 0 10px 0;
          }
        }

        .tier-desc {
          font-size: 0.8125rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 20px;
        }

        @media (min-width: 768px) {
          .tier-desc {
            font-size: 0.875rem;
            margin-bottom: 24px;
            min-height: 42px;
          }
        }

        .tier-price-box {
          display: flex;
          flex-direction: column;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-light);
          margin-bottom: 20px;
        }

        @media (min-width: 768px) {
          .tier-price-box {
            padding-bottom: 24px;
            margin-bottom: 24px;
          }
        }

        .price-starting {
          font-size: 0.6875rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .price-amount {
          font-family: var(--font-display);
          font-size: 2.125rem;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1;
        }

        @media (min-width: 768px) {
          .price-amount {
            font-size: 2.75rem;
          }
        }

        .tier-features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 24px;
        }

        @media (min-width: 768px) {
          .tier-features-list {
            gap: 12px;
            margin-bottom: 32px;
          }
        }

        .tier-features-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8125rem;
          color: var(--text-secondary);
        }

        @media (min-width: 768px) {
          .tier-features-list li {
            font-size: 0.875rem;
            gap: 10px;
          }
        }

        .tier-features-list li svg {
          color: var(--text-primary);
          flex-shrink: 0;
        }

        .w-full {
          width: 100%;
        }

        /* Estimator Card Tool */
        .estimator-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius-md);
          padding: 20px 16px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          box-shadow: 0 16px 48px var(--accent-shadow);
        }

        @media (min-width: 768px) {
          .estimator-card {
            border-radius: var(--radius-lg);
            padding: 32px;
          }
        }

        @media (min-width: 992px) {
          .estimator-card {
            grid-template-columns: 1.4fr 0.8fr;
            padding: 40px;
            gap: 40px;
          }
        }

        .estimator-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-display);
          font-size: 0.6875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: var(--bg-secondary);
          padding: 5px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 12px;
        }

        .estimator-title {
          font-family: var(--font-display);
          font-size: 1.375rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        @media (min-width: 768px) {
          .estimator-title {
            font-size: 1.75rem;
            margin-bottom: 8px;
          }
        }

        .estimator-sub {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .estimator-group {
          margin-bottom: 20px;
        }

        .group-label {
          display: block;
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
        }

        .estimator-options-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 6px;
        }

        @media (min-width: 576px) {
          .estimator-options-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
          }
        }

        .option-btn {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
          padding: 10px 12px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-align: left;
          transition: all var(--transition-fast);
          width: 100%;
        }

        @media (min-width: 576px) {
          .option-btn {
            font-size: 0.8125rem;
            padding: 12px 14px;
            gap: 4px;
          }
        }

        .option-btn:hover {
          border-color: var(--border-medium);
          color: var(--text-primary);
        }

        .option-btn.active {
          background: var(--bg-dark);
          color: var(--text-inverse);
          border-color: var(--bg-dark);
        }

        .option-cost {
          font-size: 0.6875rem;
          opacity: 0.8;
        }

        .addons-chip-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .chip-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 6px 10px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-family: var(--font-display);
          font-weight: 500;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        @media (min-width: 576px) {
          .chip-btn {
            padding: 8px 14px;
            font-size: 0.8125rem;
            gap: 6px;
          }
        }

        .chip-btn.active {
          background: var(--bg-dark);
          color: var(--text-inverse);
          border-color: var(--bg-dark);
        }

        /* Estimator Right Box */
        .estimator-right-box {
          background: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
        }

        @media (min-width: 768px) {
          .estimator-right-box {
            padding: 28px;
            gap: 0;
          }
        }

        .result-header {
          font-family: var(--font-display);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 4px;
        }

        .result-amount {
          font-family: var(--font-display);
          font-size: 1.625rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          margin-bottom: 4px;
        }

        @media (min-width: 576px) {
          .result-amount {
            font-size: 2.25rem;
          }
        }

        .range-sep {
          font-size: 1.25rem;
          color: var(--text-muted);
        }

        .result-note {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .result-summary-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
          padding: 12px 0;
          margin-bottom: 16px;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .summary-row strong {
          color: var(--text-primary);
          text-align: right;
          word-break: break-word;
          max-width: 60%;
        }
      `}</style>
    </section>
  );
}
