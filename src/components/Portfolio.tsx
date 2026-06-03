import React from 'react';
import { ArrowRight, ChevronLeft, ExternalLink, TrendingUp } from 'lucide-react';

interface Project {
  title: string;
  niche: string;
  metric: string;
  description: string;
  url: string;
  imageUrl: string;
}

interface PortfolioProps {
  onNext: () => void;
  onBack: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onNext, onBack }) => {
  const projects: Project[] = [
    {
      title: 'Vitras',
      niche: 'Luxury Architecture & Interiors',
      metric: '75% Growth in Direct Inquiries',
      description: 'A visually immersive digital catalogue and brand portfolio engineered for displaying high-end architectural concepts and premium furniture designs.',
      url: 'https://www.vitras.in',
      imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'HandConnect AR',
      niche: 'Augmented Reality & Web3',
      metric: '92% Interactive Engagement Rate',
      description: 'An advanced browser-based Augmented Reality application leveraging machine learning for real-time hand gesture tracking and 3D UI control.',
      url: 'https://handconnect-ar.netlify.app/',
      imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Event Evaluation',
      niche: 'Analytics & Real-time Dashboards',
      metric: '60% Faster Feedback Auditing',
      description: 'A premium corporate event evaluation platform displaying real-time participant feedback matrices, dynamic charts, and scoring engines.',
      url: 'https://eventevalution.netlify.app/',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <div className="portfolio-layout">
      <h2 className="section-title">Our Digital <span className="gradient-text">Masterpieces</span></h2>
      <p className="section-subtitle">
        A hand-picked selection of high-performance websites and web applications engineered to elevate business metrics and user experience.
      </p>

      <div className="portfolio-slider-container">
        <div className="portfolio-grid">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="project-card"
              onClick={() => window.open(project.url, '_blank')}
            >
              <div 
                className="project-card-bg"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              ></div>
              
              <div className="project-meta">
                <span className="project-tag">{project.niche}</span>
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-desc">{project.description}</p>
                
                <div className="project-metric">
                  <TrendingUp size={16} />
                  <span>{project.metric}</span>
                </div>
                
                <div className="project-link">
                  <span>Visit Application</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <button onClick={onNext} className="btn btn-primary">
          Explore Pricing
          <ArrowRight size={18} />
        </button>
      </div>

      <button onClick={onBack} className="btn-back-section">
        <ChevronLeft size={16} />
        Back to Intro
      </button>
    </div>
  );
};
