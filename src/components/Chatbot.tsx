import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Sparkles } from 'lucide-react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Hello! I am the MANTECH AI Briefing Assistant. How can I help you build your digital masterpiece today?" }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    { label: 'Check Pricing', text: 'How much do your services cost?' },
    { label: 'Project Timelines', text: 'What are the delivery timelines?' },
    { label: 'Start Briefing', text: 'How do I get started with a project?' }
  ];

  // Auto scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response with delay
    setTimeout(() => {
      let botResponse = '';
      const query = text.toLowerCase();

      if (query.includes('price') || query.includes('pricing') || query.includes('cost')) {
        botResponse = "MANTECH offers three premium tiers optimized for performance:\n\n✦ Tier 3 (Standard Showcase): ₹9,999 onwards (Ideal for high-converting landing pages)\n✦ Tier 2 (Business Flagship): ₹14,999 onwards (Bespoke animations & custom SVGs)\n✦ Tier 1 (Enterprise Web App): ₹19,999 onwards (Dashboards & complex state)\n\nAll pricing scales depending on iterations. Would you like to check the Briefing Document at the bottom of the page to choose a tier?";
      } else if (query.includes('timeline') || query.includes('delivery') || query.includes('time') || query.includes('long')) {
        botResponse = "Standard Showcase landing pages are typically delivered in 3 to 5 business days. Flagship or custom interactive web applications range from 1 to 3 weeks depending on the design complexity. We guarantee premium, clean code and 95+ performance scores.";
      } else if (query.includes('brief') || query.includes('start') || query.includes('contact') || query.includes('get started')) {
        botResponse = "Excellent! You can submit your requirements directly in the 'Briefing Hub' section. Scroll to the bottom of the page, fill in the document, and submit—it will open a prefilled WhatsApp chat with our lead developer Manish. Let me scroll you there now!";
        setTimeout(() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 1500);
      } else {
        botResponse = "We design premium, high-performance websites. You can browse our Work showcase, check Pricing tiers, or fill out the Briefing Hub form at the bottom to get started. Let me know if you have specific questions about our services!";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputText);
  };

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          id="chatbot-toggle"
          onClick={() => setIsOpen(true)}
          className="btn-tech btn-tech-pulse"
          style={{
            borderRadius: '50%',
            width: '56px',
            height: '56px',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)',
            background: 'var(--bg-dark)',
            borderColor: 'var(--color-accent)'
          }}
        >
          <Sparkles size={20} className="glow-effect" />
        </button>
      )}

      {/* Expanded Console Chat Widget */}
      {isOpen && (
        <div
          id="chatbot-window"
          className="chatbot-window"
          style={{
            width: '360px',
            height: '460px',
            background: 'rgba(0, 0, 0, 0.9)',
            border: '1px solid var(--color-border-bright)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
            position: 'absolute',
            bottom: 0,
            right: 0
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '1rem',
              borderBottom: '1px solid var(--color-border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.02)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={14} style={{ color: 'var(--color-accent)' }} />
              <span className="mono-label" style={{ fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--text-bright)' }}>MANTECH AI ASSISTANT</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages Grid */}
          <div
            style={{
              flexGrow: 1,
              padding: '1.25rem',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  background: msg.sender === 'user' ? 'rgba(59, 130, 246, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                  border: msg.sender === 'user' ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
                  padding: '0.75rem 1rem',
                  fontSize: '0.82rem',
                  fontFamily: msg.sender === 'bot' ? 'var(--font-body)' : 'var(--font-mono)',
                  color: msg.sender === 'user' ? 'var(--text-bright)' : 'var(--text-main)',
                  whiteSpace: 'pre-line',
                  lineHeight: 1.5
                }}
              >
                {msg.text}
              </div>
            ))}
            
            {isTyping && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--color-border)',
                  padding: '0.75rem 1rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                AI Assistant is typing...
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompts */}
          {messages.length === 1 && (
            <div
              style={{
                padding: '0 1.25rem 0.5rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem'
              }}
            >
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt.text)}
                  className="btn-tech-link"
                  style={{
                    fontSize: '0.72rem',
                    textAlign: 'left',
                    padding: '0.35rem 0.6rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--color-border)',
                    width: 'fit-content'
                  }}
                >
                  ✦ {prompt.label}
                </button>
              ))}
            </div>
          )}

          {/* Footer Input */}
          <form
            onSubmit={handleFormSubmit}
            style={{
              padding: '0.75rem 1rem',
              borderTop: '1px solid var(--color-border)',
              display: 'flex',
              gap: '0.5rem',
              background: 'rgba(0, 0, 0, 0.4)'
            }}
          >
            <input
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              placeholder="Ask anything about our services..."
              style={{
                flexGrow: 1,
                background: 'transparent',
                border: '1px solid var(--color-border)',
                color: 'var(--text-bright)',
                fontSize: '0.8rem',
                padding: '0.5rem 0.75rem',
                fontFamily: 'var(--font-mono)',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              className="btn-tech"
              style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Send size={12} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
