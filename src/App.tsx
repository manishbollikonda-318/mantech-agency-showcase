import { useState } from 'react';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import './App.css';

interface StepInfo {
  number: number;
  title: string;
  subtitle: string;
}

function App() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const steps: StepInfo[] = [
    { number: 1, title: 'The Hook', subtitle: 'Introduction' },
    { number: 2, title: 'Our Work', subtitle: 'Portfolio' },
    { number: 3, title: 'Pricing Plan', subtitle: 'Tiers' },
    { number: 4, title: 'Contact Hub', subtitle: 'Get Started' }
  ];

  const handleNextStep = () => {
    if (activeStep < 4) {
      setActiveStep(prev => prev + 1);
    }
  };

  const handleBackStep = () => {
    if (activeStep > 1) {
      setActiveStep(prev => prev - 1);
    }
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setActiveStep(4); // Immediately jump to contact form
  };

  const handleGoToStep = (stepNumber: number) => {
    setActiveStep(stepNumber);
  };

  // Get active step title or label
  const currentStep = steps.find(s => s.number === activeStep) || steps[0];

  return (
    <>
      {/* Top Sticky Progress Indicator (Mobile Viewports) */}
      <div className="top-progress-bar">
        <div 
          className="top-progress-fill" 
          style={{ width: `${((activeStep - 1) / 3) * 100}%` }}
        ></div>
      </div>

      {/* Persistent App Header */}
      <header className="app-header">
        <div className="logo-container" onClick={() => handleGoToStep(1)}>
          <span className="logo-text">mantech</span>
          <span className="logo-sparkle">✦</span>
        </div>
        
        <div className="step-indicator">
          <span>Step {currentStep.number} of 4:</span> {currentStep.title}
        </div>
      </header>

      {/* Side Dot Navigation */}
      <div className="progress-container">
        <div className="progress-line-bg"></div>
        <div 
          className="progress-line-active" 
          style={{ height: `${((activeStep - 1) / 3) * 100}%` }}
        ></div>
        
        {steps.map((step) => (
          <div
            key={step.number}
            className={`progress-dot ${activeStep === step.number ? 'active' : ''}`}
            onClick={() => handleGoToStep(step.number)}
          >
            <div className="progress-label">
              {step.subtitle} — {step.title}
            </div>
          </div>
        ))}
      </div>

      {/* Main SPA Sections Wrapper */}
      <main className="main-wrapper">
        {/* Section 1: Hero */}
        <section className={`section-container ${activeStep === 1 ? 'active' : ''}`}>
          <Hero onNext={handleNextStep} />
        </section>

        {/* Section 2: Portfolio */}
        <section className={`section-container ${activeStep === 2 ? 'active' : ''}`}>
          <Portfolio onNext={handleNextStep} onBack={handleBackStep} />
        </section>

        {/* Section 3: Pricing */}
        <section className={`section-container ${activeStep === 3 ? 'active' : ''}`}>
          <Pricing onSelectPlan={handleSelectPlan} onBack={handleBackStep} />
        </section>

        {/* Section 4: Contact Form */}
        <section className={`section-container ${activeStep === 4 ? 'active' : ''}`}>
          <Contact selectedPlan={selectedPlan} onBack={handleBackStep} />
        </section>
      </main>
    </>
  );
}

export default App;
