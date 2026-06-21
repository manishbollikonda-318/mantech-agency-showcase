import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Chatbot } from './components/Chatbot';
import './App.css';

function App() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Scroll Spy for highlighting active section in Header Nav using Intersection Observer
  useEffect(() => {
    const sections = ['hero', 'portfolio', 'pricing', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-140px 0px -50% 0px', // Top offset accounts for sticky header, bottom offset triggers section update when scrolled past half
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Intersection Observer for Scroll Reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            // Unobserve once revealed to free resources
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-element');
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Re-check elements after a small timeout to cover immediate mounting of children components
    const timer = setTimeout(observeElements, 200);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Persistent App Header */}
      <header className="app-header">
        <div className="logo-container" onClick={() => { scrollToSection('hero'); setMobileMenuOpen(false); }} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <img src="/favicon.svg" alt="MANISTEC Logo" style={{ width: '22px', height: '22px', display: 'block' }} />
          <span className="logo-text">MANISTEC</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="header-nav desktop-only">
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

        {/* Desktop CTA */}
        <div className="desktop-only">
          <button onClick={() => scrollToSection('contact')} className="btn-tech">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="hamburger-btn mobile-only" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay mobile-only ${mobileMenuOpen ? 'open' : ''}`}>
        <button 
          className={`mobile-nav-link ${activeSection === 'hero' ? 'active' : ''}`}
          onClick={() => { scrollToSection('hero'); setMobileMenuOpen(false); }}
        >
          Intro
        </button>
        <button 
          className={`mobile-nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
          onClick={() => { scrollToSection('portfolio'); setMobileMenuOpen(false); }}
        >
          Work
        </button>
        <button 
          className={`mobile-nav-link ${activeSection === 'pricing' ? 'active' : ''}`}
          onClick={() => { scrollToSection('pricing'); setMobileMenuOpen(false); }}
        >
          Pricing
        </button>
        <button 
          className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }}
        >
          Briefing Hub
        </button>
        
        <button 
          onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }} 
          className="btn-tech btn-tech-pulse"
          style={{ marginTop: '1rem', width: '100%', maxWidth: '240px' }}
        >
          Get Started
        </button>
      </div>

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

      {/* Floating AI Chatbot Assistant */}
      <Chatbot />
    </>
  );
}

export default App;
