import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNext: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNext }) => {
  return (
    <div className="grid-container hero-layout-grid">
      {/* Left Cell: Logo and CTA */}
      <div className="grid-cell hero-left crosshair-cell">
        <div>
          <span className="mono-label">✦ Established 2026</span>
          <h1 className="hero-logo-large">mantech<span className="logo-sparkle">✦</span></h1>
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          <button onClick={onNext} className="btn-tech">
            Enter Showcase
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Right Cell: Monospace Pitch and Custom Stippled Cosmic Sphere */}
      <div className="grid-cell hero-right crosshair-cell" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        {/* Spirograph Logo & Paragraph Block */}
        <div className="hero-paragraph-block">
          <svg width="48" height="48" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" style={{ opacity: 0.85 }}>
            <circle cx="50" cy="50" r="20" />
            <circle cx="35" cy="50" r="15" />
            <circle cx="65" cy="50" r="15" />
            <circle cx="50" cy="35" r="15" />
            <circle cx="50" cy="65" r="15" />
          </svg>
          <p className="hero-desc-mono">
            mantech doesn't just design and code. We construct premium, tailored digital spaces that inspire, connect, and elevate the way people experience the web. We engineer what the internet can be.
          </p>
        </div>

        {/* Dynamic Grainy Cosmic Sphere Graphic (Larger on Desktop, responsive on Mobile) */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '2.5rem 0' }}>
          <svg 
            viewBox="0 0 200 200" 
            style={{ width: '100%', maxWidth: '380px', height: 'auto', display: 'block' }}
          >
            <defs>
              <radialGradient id="heroPlanetGrad" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#1e54d4" stopOpacity="0.55" />
                <stop offset="75%" stopColor="#051233" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#000000" stopOpacity="1" />
              </radialGradient>
              <filter id="heroNoiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" result="noise" />
                <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.35 0" />
                <feComposite operator="in" in2="SourceGraphic" />
              </filter>
            </defs>
            <circle cx="100" cy="100" r="70" fill="url(#heroPlanetGrad)" />
            <circle cx="100" cy="100" r="70" fill="url(#heroPlanetGrad)" filter="url(#heroNoiseFilter)" opacity="0.6" style={{ mixBlendMode: 'overlay' }} />
            <ellipse cx="100" cy="100" rx="80" ry="20" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7" transform="rotate(-15 100 100)" />
          </svg>
        </div>

        <span className="mono-label" style={{ opacity: 0.5 }}>Architecting Digital realities</span>
      </div>
    </div>
  );
};
