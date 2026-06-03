import React from 'react';
import { ArrowRight, ChevronLeft, HelpCircle } from 'lucide-react';

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
      desc: 'High-converting, premium single page landing pages built with custom grid layouts.',
      features: [
        '3 Free iterations / design trials',
        'Fully responsive client-side layout',
        'Personal domain integration',
        'Vite + React framework setup',
        'Essential SEO tag mapping',
        'Extra iterations: ₹1,000 / revision'
      ],
      isPopular: false,
      cta: 'Select Tier 3'
    },
    {
      name: 'Business Flagship',
      tierLabel: 'Tier 2',
      price: '₹14,999',
      priceSuffix: 'onwards',
      desc: 'Our flagship tier, introducing handcrafted micro-animations and custom SVG assets.',
      features: [
        'All features of Tier 3 included',
        'Bespoke fluid scroll animations',
        'Interactive UI components & forms',
        'Full custom styling & fonts',
        'Targeted performance tuning (95+)',
        'Domain setup & launch configuration'
      ],
      isPopular: true,
      cta: 'Select Tier 2'
    },
    {
      name: 'Enterprise Web App',
      tierLabel: 'Tier 1',
      price: '₹19,999',
      priceSuffix: 'onwards',
      desc: 'Complex single page applications, interactive dashboards, or custom AR integrations.',
      features: [
        'All features of Tier 2 included',
        'Custom React & TS application state',
        'Interactive dashboards & charts',
        'API & headless CMS integrations',
        'Cloud deployment pipeline config',
        'Dedicated SLA maintenance support'
      ],
      isPopular: false,
      cta: 'Select Tier 1'
    }
  ];

  return (
    <div>
      <div className="portfolio-header">
        <span className="mono-label">✦ Project Pricing</span>
        <h2 className="portfolio-title-mono">Transparent Frameworks</h2>
        <p className="portfolio-desc-mono">Bespoke pricing tiers optimized for clarity, revision freedom, and performance.</p>
      </div>

      <div className="grid-container pricing-grid-wire">
        {tiers.map((tier, idx) => (
          <div 
            key={idx} 
            className={`grid-cell pricing-card-wire crosshair-cell ${tier.isPopular ? 'featured' : ''}`}
            style={{ position: 'relative' }}
          >
            {/* If popular, render stippled cosmic shadow background filter */}
            {tier.isPopular && (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1, pointerEvents: 'none', opacity: 0.12 }}>
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="cardGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="100%" stopColor="#0a35a5" stopOpacity="0" />
                    </radialGradient>
                    <filter id="cardNoise">
                      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" result="noise" />
                      <feComposite operator="in" in2="SourceGraphic" />
                    </filter>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#cardGlow)" filter="url(#cardNoise)" />
                </svg>
              </div>
            )}

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="mono-label" style={{ color: tier.isPopular ? 'var(--text-bright)' : 'var(--text-muted)' }}>
                  {tier.tierLabel}
                </span>
                {tier.isPopular && <span className="mono-label" style={{ fontSize: '0.65rem', border: '1px solid rgba(255,255,255,0.3)', padding: '0.1rem 0.4rem' }}>Popular</span>}
              </div>
              <h3 className="pricing-card-title-mono" style={{ marginTop: '0.5rem' }}>{tier.name}</h3>
              <p className="portfolio-card-desc" style={{ marginTop: '0.5rem', minHeight: '44px' }}>{tier.desc}</p>
              
              <div className="pricing-card-price-mono">
                {tier.price}
                <span>/ {tier.priceSuffix}</span>
              </div>

              <ul className="pricing-card-features-list">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="pricing-card-feature-item">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => onSelectPlan(tier.tierLabel + ' (' + tier.name + ')')}
              className="btn-tech"
              style={{ width: '100%' }}
            >
              {tier.cta}
              <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', opacity: 0.7 }}>
          <HelpCircle size={14} style={{ marginTop: '0.2rem', color: 'var(--text-muted)' }} />
          <p className="portfolio-desc-mono" style={{ textTransform: 'none' }}>
            <strong>Personal Domain Connection:</strong> Domain name purchasing is not included in the plans. You must supply your own domain name and we will map it to your website at no extra cost.
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button onClick={onBack} className="btn-tech-link">
            <ChevronLeft size={14} /> Back to Showcase
          </button>
        </div>
      </div>
    </div>
  );
};
