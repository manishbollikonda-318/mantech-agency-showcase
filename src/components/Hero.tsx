import React from 'react';
import { ArrowRight, Cpu, Sparkles, Terminal } from 'lucide-react';

interface HeroProps {
  onNext: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNext }) => {
  return (
    <div className="hero-layout">
      <div className="hero-content">
        <div className="hero-tag">
          <Sparkles size={14} className="premium-glow-cyan" style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          ManTech Web Engineering
        </div>
        
        <h1 className="hero-title">
          Designing Digital <span className="gradient-text">Flagships</span> For High-Growth Brands
        </h1>
        
        <p className="hero-subtitle">
          ManTech turns bold ideas into high-performance web experiences. We construct custom, conversion-first digital solutions optimized for speed, reliability, and scale.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', width: '100%', flexWrap: 'wrap' }}>
          <button onClick={onNext} className="btn btn-primary">
            Explore Our Showcase
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="hero-card-glow"></div>
        <div className="floating-graphics-container">
          <div className="graphic-core">
            <div className="graphic-header">
              <div className="graphic-dot" style={{ backgroundColor: '#EF4444' }}></div>
              <div className="graphic-dot" style={{ backgroundColor: '#F59E0B' }}></div>
              <div className="graphic-dot" style={{ backgroundColor: '#10B981' }}></div>
            </div>
            
            <div className="graphic-wireframe">
              <div className="wire-row accent-1"></div>
              <div className="wire-row accent-2"></div>
              <div className="wire-row"></div>
              
              <div className="wire-grid">
                <div className="wire-box"></div>
                <div className="wire-box"></div>
              </div>
              
              <div className="wire-row" style={{ width: '90%' }}></div>
              <div className="wire-row" style={{ width: '60%' }}></div>
            </div>
          </div>
          
          <div className="graphic-floating-sticker-top">
            <Cpu size={18} className="premium-glow-purple" />
            <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>60fps Motion</span>
          </div>
          
          <div className="graphic-floating-sticker">
            <Terminal size={18} className="premium-glow-cyan" />
            <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>React & TS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
