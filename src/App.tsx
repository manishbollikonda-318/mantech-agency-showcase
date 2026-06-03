import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import './App.css';

function App() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    // Give state a moment to update and then scroll
    setTimeout(() => {
      scrollToSection('contact');
    }, 50);
  };

  // Scroll Spy for highlighting active section in Header Nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'portfolio', 'pricing', 'contact'];
      const scrollPos = window.scrollY + 120; // Offset for sticky header

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Persistent App Header */}
      <header className="app-header">
        <div className="logo-container" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">MANTECH</span>
          <span className="logo-sparkle">✦</span>
        </div>
        
        <nav className="header-nav">
          <button 
            className={`header-nav-link ${activeSection === 'hero' ? 'active' : ''}`}
            onClick={() => scrollToSection('hero')}
          >
            Intro
          </button>
          <button 
            className={`header-nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
            onClick={() => scrollToSection('portfolio')}
          >
            Work
          </button>
          <button 
            className={`header-nav-link ${activeSection === 'pricing' ? 'active' : ''}`}
            onClick={() => scrollToSection('pricing')}
          >
            Pricing
          </button>
          <button 
            className={`header-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection('contact')}
          >
            Briefing Hub
          </button>
        </nav>

        <div>
          <button onClick={() => scrollToSection('contact')} className="btn-tech">
            Get Started
          </button>
        </div>
      </header>

      {/* Main SPA Sections Wrapper */}
      <main className="main-wrapper">
        {/* Section 1: Hero */}
        <section id="hero" className="section-container">
          <Hero onNext={() => scrollToSection('portfolio')} />
        </section>

        {/* Section 2: Portfolio */}
        <section id="portfolio" className="section-container">
          <Portfolio onNext={() => scrollToSection('pricing')} />
        </section>

        {/* Section 3: Pricing */}
        <section id="pricing" className="section-container">
          <Pricing onSelectPlan={handleSelectPlan} />
        </section>

        {/* Section 4: Contact Form */}
        <section id="contact" className="section-container">
          <Contact selectedPlan={selectedPlan} />
        </section>
      </main>
    </>
  );
}

export default App;
