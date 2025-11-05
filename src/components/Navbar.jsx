import React from 'react';
import { Sun, Moon, Menu } from 'lucide-react';

const Navbar = ({ theme, onToggleTheme }) => {
  const isDark = theme === 'dark';
  return (
    <header className={`sticky top-0 z-50 w-full border-b backdrop-blur-xl ${
      isDark
        ? 'bg-[#0a0a0f]/70 border-white/10'
        : 'bg-white/70 border-black/10'
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div
            className="h-8 w-8 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)' }}
          />
          <span className={`text-sm font-semibold tracking-wide ${isDark ? 'text-white' : 'text-black'}`}>
            Loop Methods
          </span>
        </div>
        <nav className={`hidden items-center gap-6 text-sm md:flex ${isDark ? 'text-[#a0a0b8]' : 'text-gray-600'}`}>
          <a href="#home" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Home</a>
          <a href="#about" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>About</a>
          <a href="#ai" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>AI & ML</a>
          <a href="#web3" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Web 3.0</a>
          <a href="#software" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Software</a>
          <a href="#iot" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>IoT</a>
          <a href="#salesforce" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Salesforce</a>
          <a href="#portfolio" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Portfolio</a>
          <a href="#careers" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Careers</a>
          <a href="#contact" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className={`inline-flex items-center justify-center rounded-xl p-2 transition-transform duration-300 hover:scale-105 ${
              isDark
                ? 'border border-white/10 bg-white/5 text-white'
                : 'border border-black/10 bg-black/5 text-black'
            }`}
            style={{ boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.15)' }}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button className={`md:hidden inline-flex items-center justify-center rounded-xl p-2 ${isDark ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'}`}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
