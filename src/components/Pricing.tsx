import React from 'react';
import { ArrowRight, Check, ChevronLeft, HelpCircle } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
  onBack: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan, onBack }) => {
  const tiers = [
    {
      name: 'Standard Showcase',
      tierLabel: 'Tier 3',
      price: '₹9,999',
      priceSuffix: 'onwards',
      desc: 'Ideal for solopreneurs & startups seeking a high-converting, premium landing page.',
      features: [
        '3 Free design iterations/trials after delivery',
        'Responsive layout for all devices (Mobile/Tablet/Desktop)',
        'Personal domain integration (Client-provided)',
        'Speed optimization (Under 2s load time)',
        'Essential SEO metadata setup',
        'Additional iterations: ₹1,000 per revisions'
      ],
      isPopular: false,
      cta: 'Choose Tier 3'
    },
    {
      name: 'Business Flagship',
      tierLabel: 'Tier 2',
      price: '₹14,999',
      priceSuffix: 'onwards',
      desc: 'Our most sought-after plan, introducing high-fidelity animations and full interactive modules.',
      features: [
        'Everything in Tier 3 included',
        'Bespoke micro-interactions & smooth scroll animations',
        'Advanced glassmorphism & premium typography layout',
        'High-converting interactive lead elements',
        'Google Analytics & conversion tracking setup',
        'Personal domain integration (Client-provided)'
      ],
      isPopular: true,
      cta: 'Choose Tier 2'
    },
    {
      name: 'Enterprise Web App',
      tierLabel: 'Tier 1',
      price: '₹19,999',
      priceSuffix: 'onwards',
      desc: 'For brands requiring fully custom dashboards, database integrations, or interactive AR widgets.',
      features: [
        'Everything in Tier 2 included',
        'Highly responsive React & TypeScript single page applications',
        'Interactive dashboards & custom data visualizations',
        'Advanced API & content database integrations (headless CMS)',
        'Personal domain integration (Client-provided)',
        'High-performance cloud deployment architecture'
      ],
      isPopular: false,
      cta: 'Choose Tier 1'
    }
  ];

  return (
    <div className="pricing-layout">
      <h2 className="section-title">Transparent <span className="gradient-text">Architectural</span> Pricing</h2>
      <p className="section-subtitle">
        Simple, feature-rich tiers tailored to your digital engineering needs. Scale your project seamlessly.
      </p>

      <div className="pricing-grid">
        {tiers.map((tier, idx) => (
          <div 
            key={idx} 
            className={`glass-panel pricing-card ${tier.isPopular ? 'featured' : ''}`}
          >
            {tier.isPopular && <div className="pricing-ribbon">Popular</div>}
            
            <span className="pricing-tier">{tier.tierLabel}</span>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 800 }}>{tier.name}</h3>
            
            <div className="pricing-price">
              {tier.price}
              <span style={{ marginLeft: '4px', fontSize: '1rem', fontWeight: 500, color: 'var(--text-muted)' }}>
                {tier.priceSuffix}
              </span>
            </div>
            
            <p className="pricing-desc">{tier.desc}</p>
            
            <ul className="pricing-features">
              {tier.features.map((feature, fIdx) => (
                <li key={fIdx} className="pricing-feature-item">
                  <Check size={16} className="pricing-feature-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => onSelectPlan(tier.tierLabel + ' (' + tier.name + ')')}
              className={`btn pricing-btn ${tier.isPopular ? 'btn-primary' : 'btn-secondary'}`}
            >
              {tier.cta}
              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="pricing-matrix-note">
        <p>
          <HelpCircle size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle', color: 'var(--color-secondary)' }} />
          <strong>Domain Notice:</strong> Domain name purchasing is <span>not included</span> in these prices. You must have your own personal domain name, and we will integrate and configure it for your website free of charge.
        </p>
      </div>

      <button onClick={onBack} className="btn-back-section">
        <ChevronLeft size={16} />
        Back to Showcase
      </button>
    </div>
  );
};
