import React, { useState, useEffect } from 'react';
import { Send, ChevronLeft, Check, MessageSquare, Mail } from 'lucide-react';

const InstagramIcon = (props: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
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
    width={props.size || 24}
    height={props.size || 24}
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

  // Sync selected plan from pricing page if it changes
  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, plan: selectedPlan }));
      // Automatically adjust slider budget based on plan
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      budget: parseInt(e.target.value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill out your Name and Email address.');
      return;
    }
    
    // Simulate submission
    setIsSubmitted(true);
  };

  // Format budget number with currency symbol
  const formatBudget = (value: number) => {
    if (value >= 30000) {
      return `₹30,000+`;
    }
    return `₹${value.toLocaleString('en-IN')}`;
  };

  return (
    <div className="contact-layout">
      <div className="contact-info">
        <h2 className="contact-headline">Let's Build Something <span className="gradient-text">Extraordinary</span> Together.</h2>
        <p className="contact-subheadline">
          Connect with us via our instant communication channels, or fill out the project briefing form to schedule an onboarding call.
        </p>

        <div className="contact-channels">
          {/* WhatsApp redirecting to 9762105295 */}
          <a 
            href="https://wa.me/919762105295" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="channel-card channel-whatsapp"
          >
            <div className="channel-meta">
              <div className="channel-icon-wrapper">
                <MessageSquare size={20} />
              </div>
              <div>
                <h4 className="channel-title">WhatsApp</h4>
                <p className="channel-subtitle">Chat Instantly</p>
              </div>
            </div>
            <span className="channel-action">Message Now →</span>
          </a>

          {/* Instagram redirecting to @mantech_off */}
          <a 
            href="https://instagram.com/mantech_off" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="channel-card channel-instagram"
          >
            <div className="channel-meta">
              <div className="channel-icon-wrapper">
                <InstagramIcon size={20} />
              </div>
              <div>
                <h4 className="channel-title">Instagram</h4>
                <p className="channel-subtitle">@mantech_off</p>
              </div>
            </div>
            <span className="channel-action">Follow & DM →</span>
          </a>

          {/* LinkedIn redirecting to www.linkedin.com/in/manishbollikonda */}
          <a 
            href="https://www.linkedin.com/in/manishbollikonda" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="channel-card channel-linkedin"
          >
            <div className="channel-meta">
              <div className="channel-icon-wrapper">
                <LinkedinIcon size={20} />
              </div>
              <div>
                <h4 className="channel-title">LinkedIn</h4>
                <p className="channel-subtitle">Connect Professionally</p>
              </div>
            </div>
            <span className="channel-action">Connect →</span>
          </a>

          {/* Google Email: manishbollikonda318@gmaail.com */}
          <a 
            href="mailto:manishbollikonda318@gmaail.com" 
            className="channel-card channel-email"
          >
            <div className="channel-meta">
              <div className="channel-icon-wrapper">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="channel-title">Email Direct</h4>
                <p className="channel-subtitle">manishbollikonda318@gmaail.com</p>
              </div>
            </div>
            <span className="channel-action">Send Mail →</span>
          </a>
        </div>
      </div>

      <div className="glass-panel contact-form-panel">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <h3 className="form-title">Start a Project Brief</h3>
            <p className="form-subtitle">Tell us about your goals, and we'll outline the architectural blueprint.</p>
            
            <div className="form-group">
              <label className="form-label" htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                placeholder="Manish Bollikonda" 
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                placeholder="client@example.com" 
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="plan">Selected Tier</label>
              <select 
                id="plan" 
                name="plan" 
                value={formData.plan} 
                onChange={handleInputChange} 
                className="form-input"
                style={{ background: 'var(--bg-deep)' }}
              >
                <option value="Not Selected">Select a tier...</option>
                <option value="Tier 3 (Standard Showcase)">Tier 3 (Standard Showcase) — ₹9,999+</option>
                <option value="Tier 2 (Business Flagship)">Tier 2 (Business Flagship) — ₹14,999+</option>
                <option value="Tier 1 (Enterprise Web App)">Tier 1 (Enterprise Web App) — ₹19,999+</option>
              </select>
            </div>

            <div className="form-group form-range-container">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label className="form-label">Target Budget</label>
                <span className="budget-value">{formatBudget(formData.budget)}</span>
              </div>
              <input 
                type="range" 
                min="9000" 
                max="30000" 
                step="1000" 
                value={formData.budget} 
                onChange={handleBudgetChange} 
                className="form-range"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Project Requirements</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleInputChange} 
                placeholder="Describe your design goals, timeline, and features..." 
                className="form-textarea"
              />
            </div>

            <button type="submit" className="btn btn-primary form-submit-btn">
              Submit Project Brief
              <Send size={16} />
            </button>
          </form>
        ) : (
          <div className="success-message">
            <div className="success-icon-wrapper">
              <Check size={32} />
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Brief Received!</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
              Thank you, {formData.name}. We will review your briefing files and contact you at {formData.email} within 24 hours.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)} 
              className="btn btn-secondary"
              style={{ width: '100%' }}
            >
              Submit Another Brief
            </button>
          </div>
        )}
      </div>

      <button onClick={onBack} className="btn-back-section">
        <ChevronLeft size={16} />
        Back to Pricing
      </button>
    </div>
  );
};
