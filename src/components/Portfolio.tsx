import React from 'react';
import { ArrowRight, ExternalLink, Activity } from 'lucide-react';

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
}

export const Portfolio: React.FC<PortfolioProps> = ({ onNext }) => {
  const projects: Project[] = [
    {
      title: 'Vitras',
      niche: 'Luxury Architecture & Interiors',
      metric: '75% Inquiry Increase',
      description: 'A visually rich digital catalog engineered to present high-end architectural concepts and designer furniture collections.',
      url: 'https://www.vitras.in',
      imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'HandConnect AR',
      niche: 'Augmented Reality interface',
      metric: '92% Active Engagement',
      description: 'A browser-based computer vision application tracking hand gestures in real-time for interactive 3D UI control.',
      url: 'https://handconnect-ar.netlify.app/',
      imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Event Evaluation',
      niche: 'Real-time feedback Engine',
      metric: '60% Faster Audit Loops',
      description: 'A data audit panel visualizing corporate event evaluation matrices, scoring profiles, and session analytics.',
      url: 'https://eventevalution.netlify.app/',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    }
  ];

  return (
    <div>
      <div className="portfolio-header">
        <span className="mono-label">✦ Curated Creations</span>
        <h2 className="portfolio-title-mono">Engineered Masterpieces</h2>
        <p className="portfolio-desc-mono">A showcase of high-performance digital projects built with technical precision.</p>
      </div>

      <div className="grid-container portfolio-grid-wire">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="grid-cell portfolio-card-wire crosshair-cell"
            onClick={() => window.open(project.url, '_blank')}
          >
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <div className="portfolio-card-image-box">
                <img src={project.imageUrl} alt={project.title} className="portfolio-card-image" />
              </div>
              <div className="portfolio-card-info">
                <span className="mono-label" style={{ fontSize: '0.65rem', color: 'var(--color-accent)' }}>{project.niche}</span>
                <h3 className="portfolio-card-title" style={{ marginTop: '0.25rem' }}>{project.title}</h3>
                <p className="portfolio-card-desc">{project.description}</p>
              </div>
            </div>
            
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div className="portfolio-card-metric">
                <Activity size={14} />
                <span>{project.metric}</span>
              </div>
              <span className="btn-tech-link">
                View Project <ExternalLink size={12} />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', justifyContent: 'flex-start' }}>
        <button onClick={onNext} className="btn-tech">
          Continue to Pricing
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
