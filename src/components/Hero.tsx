import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNext: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNext }) => {
  return (
    <div className="grid-container hero-layout-grid">
      {/* Left Cell: Logo and CTA */}
      <div className="grid-cell hero-left crosshair-cell reveal-element">
        <div>
          <span className="mono-label">✦ ESTABLISHED 2026</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <img src="/favicon.svg" alt="MANTECH Logo" style={{ width: '68px', height: '68px', filter: 'drop-shadow(0 0 16px rgba(59, 130, 246, 0.4))', display: 'block' }} />
            <h1 className="hero-logo-large" style={{ marginTop: 0, marginBottom: 0 }}>MANTECH</h1>
          </div>
          <p style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.5rem', fontWeight: 500 }}>
            PREMIUM WEB CREATION
          </p>
          <p style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '1rem', fontWeight: 700 }}>
            BUILT BY MANISH BOLLIKONDA
          </p>
        </div>
        
        <div style={{ marginTop: '2.5rem' }}>
          <button onClick={onNext} className="btn-tech btn-tech-pulse">
            Enter Showcase
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Right Cell: Monospace Pitch and Custom Stippled Cosmic Sphere */}
      <div className="grid-cell hero-right crosshair-cell reveal-element" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
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
            Welcome to MANTECH. We design and engineer premium, high-performance websites that captivate audiences and drive results. We believe your digital presence should be as unique as your vision—blending sleek visual architecture with state-of-the-art technology to build fast, responsive, and memorable web experiences. Let's collaborate to build something extraordinary.
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
