import React from 'react';
import { Sun, Moon, Menu } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ theme, onToggleTheme }) => {
  const isDark = theme === 'dark';
  const linkClass = ({ isActive }) =>
    `${isDark ? 'text-[#a0a0b8] hover:text-white' : 'text-gray-600 hover:text-black'} ${isActive ? (isDark ? 'text-white' : 'text-black') : ''}`;

  return (
    <header className={`sticky top-0 z-50 w-full border-b backdrop-blur-xl ${
      isDark ? 'bg-[#0a0a0f]/70 border-white/10' : 'bg-white/70 border-black/10'
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <div
              className="h-8 w-8 rounded-lg"
              style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)' }}
            />
            <span className={`text-sm font-semibold tracking-wide ${isDark ? 'text-white' : 'text-black'}`}>
              Loop Methods
            </span>
          </Link>
        </div>
        <nav className={`hidden items-center gap-6 text-sm md:flex`}>
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/ai" className={linkClass}>AI & ML</NavLink>
          <NavLink to="/web3" className={linkClass}>Web 3.0</NavLink>
          <NavLink to="/software" className={linkClass}>Software</NavLink>
          <NavLink to="/iot" className={linkClass}>IoT</NavLink>
          <NavLink to="/salesforce" className={linkClass}>Salesforce</NavLink>
          <NavLink to="/portfolio" className={linkClass}>Portfolio</NavLink>
          <NavLink to="/careers" className={linkClass}>Careers</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className={`inline-flex items-center justify-center rounded-xl p-2 transition-transform duration-300 hover:scale-105 ${
              isDark ? 'border border-white/10 bg-white/5 text-white' : 'border border-black/10 bg-black/5 text-black'
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
