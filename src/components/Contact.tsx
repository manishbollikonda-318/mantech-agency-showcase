import React, { useState, useEffect } from 'react';
import { Send, ChevronLeft, Check, MessageSquare, Mail } from 'lucide-react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 20}
    height={props.size || 20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 20}
    height={props.size || 20}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface ContactProps {
  selectedPlan: string;
  onBack: () => void;
}

export const Contact: React.FC<ContactProps> = ({ selectedPlan, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    plan: selectedPlan || 'Not Selected',
    budget: 15000,
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, plan: selectedPlan }));
      if (selectedPlan.includes('Tier 3')) {
        setFormData(prev => ({ ...prev, budget: 10000 }));
      } else if (selectedPlan.includes('Tier 2')) {
        setFormData(prev => ({ ...prev, budget: 15000 }));
      } else if (selectedPlan.includes('Tier 1')) {
        setFormData(prev => ({ ...prev, budget: 20000 }));
      }
    }
  }, [selectedPlan]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, budget: parseInt(e.target.value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill out your Name and Email address.');
      return;
    }
    setIsSubmitted(true);
  };

  const formatBudget = (value: number) => {
    if (value >= 30000) {
      return `₹30,000+`;
    }
    return `₹${value.toLocaleString('en-IN')}`;
  };

  return (
    <div>
      <div className="portfolio-header" style={{ marginBottom: '3rem' }}>
        <span className="mono-label">✦ Establish Connection</span>
        <h2 className="portfolio-title-mono">Onboarding Briefing</h2>
        <p className="portfolio-desc-mono">Submit details to schedule an engineering call or choose an instant channel.</p>
      </div>

      <div className="grid-container contact-grid-wire">
        {/* Left Side: Communication buttons */}
        <div className="grid-cell contact-channels-wire crosshair-cell" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          {/* WhatsApp */}
          <a 
            href="https://wa.me/919762105295" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-channel-button-wire"
          >
            <div className="contact-channel-meta">
              <MessageSquare size={18} style={{ color: 'var(--text-bright)' }} />
              <div>
                <h4 className="contact-channel-title">WhatsApp</h4>
                <p className="contact-channel-subtitle">Redirect to मनीष</p>
              </div>
            </div>
            <span className="mono-label" style={{ fontSize: '0.65rem' }}>Open Chat →</span>
          </a>

          {/* Instagram */}
          <a 
            href="https://instagram.com/mantech_off" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-channel-button-wire"
          >
            <div className="contact-channel-meta">
              <InstagramIcon size={18} style={{ color: 'var(--text-bright)' }} />
              <div>
                <h4 className="contact-channel-title">Instagram</h4>
                <p className="contact-channel-subtitle">@mantech_off</p>
              </div>
            </div>
            <span className="mono-label" style={{ fontSize: '0.65rem' }}>Follow & DM →</span>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/manishbollikonda" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-channel-button-wire"
          >
            <div className="contact-channel-meta">
              <LinkedinIcon size={18} style={{ color: 'var(--text-bright)' }} />
              <div>
                <h4 className="contact-channel-title">LinkedIn</h4>
                <p className="contact-channel-subtitle">Manish Bollikonda</p>
              </div>
            </div>
            <span className="mono-label" style={{ fontSize: '0.65rem' }}>Connect →</span>
          </a>

          {/* Email */}
          <a 
            href="mailto:manishbollikonda318@gmaail.com" 
            className="contact-channel-button-wire"
          >
            <div className="contact-channel-meta">
              <Mail size={18} style={{ color: 'var(--text-bright)' }} />
              <div>
                <h4 className="contact-channel-title">Email Direct</h4>
                <p className="contact-channel-subtitle">manishbollikonda318@gmaail.com</p>
              </div>
            </div>
            <span className="mono-label" style={{ fontSize: '0.65rem' }}>Send Mail →</span>
          </a>
        </div>

        {/* Right Side: Form briefing */}
        <div className="grid-cell contact-form-wire crosshair-cell">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <h3 className="contact-form-title">Briefing Document</h3>
                <p className="portfolio-desc-mono" style={{ textTransform: 'none' }}>We will outline the technical blueprint after review.</p>
              </div>

              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  placeholder="Enter name" 
                  className="contact-form-input"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  placeholder="client@domain.com" 
                  className="contact-form-input"
                  required
                />
              </div>

              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="plan">Selected Tier</label>
                <select 
                  id="plan" 
                  name="plan" 
                  value={formData.plan} 
                  onChange={handleInputChange} 
                  className="contact-form-select"
                >
                  <option value="Not Selected">Select a tier...</option>
                  <option value="Tier 3 (Standard Showcase)">Tier 3 (Standard Showcase) — ₹9,999+</option>
                  <option value="Tier 2 (Business Flagship)">Tier 2 (Business Flagship) — ₹14,999+</option>
                  <option value="Tier 1 (Enterprise Web App)">Tier 1 (Enterprise Web App) — ₹19,999+</option>
                </select>
              </div>

              <div className="contact-form-group">
                <div className="range-slider-display">
                  <label className="contact-form-label">Target Budget</label>
                  <span className="budget-val">{formatBudget(formData.budget)}</span>
                </div>
                <input 
                  type="range" 
                  min="9000" 
                  max="30000" 
                  step="1000" 
                  value={formData.budget} 
                  onChange={handleBudgetChange} 
                  className="contact-form-range"
                />
              </div>

              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="message">Requirements</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  placeholder="Describe your design and timeline goals..." 
                  className="contact-form-textarea"
                  style={{ minHeight: '80px' }}
                />
              </div>

              <button type="submit" className="btn-tech" style={{ width: '100%', marginTop: '0.5rem' }}>
                Submit Brief
                <Send size={12} />
              </button>
            </form>
          ) : (
            <div style={{ padding: '2rem 1rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid var(--text-bright)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Check size={20} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 500, marginBottom: '0.5rem' }}>Brief Registered</h3>
              <p className="portfolio-desc-mono" style={{ textTransform: 'none', marginBottom: '2rem' }}>
                Thank you, {formData.name}. We will contact you at {formData.email} within 24 hours.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)} 
                className="btn-tech"
                style={{ width: '100%' }}
              >
                Create New Brief
              </button>
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: '2.5rem' }}>
        <button onClick={onBack} className="btn-tech-link">
          <ChevronLeft size={14} /> Back to Pricing
        </button>
      </div>
    </div>
  );
};
