import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Approach from './components/Approach';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
      {/* Top nav */}
      <header className="sticky top-0 z-50 w-full border-b border-[rgba(255,255,255,0.06)] bg-[#0a0a0f]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg" style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)' }} />
            <span className="text-sm font-semibold tracking-wide text-white">Loop Methods</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[#a0a0b8] md:flex">
            <a href="#services" className="transition-colors hover:text-white">Services</a>
            <a href="#approach" className="transition-colors hover:text-white">Approach</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-xl px-4 py-2 text-sm font-medium text-white md:inline-flex"
            style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)', boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.25)' }}
          >
            Start a Project
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <div id="approach">
          <Services />
          <Approach />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
