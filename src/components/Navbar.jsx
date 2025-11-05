import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Menu } from 'lucide-react';

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  const linkCls = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'text-indigo-500'
        : theme === 'dark'
        ? 'text-zinc-300 hover:text-white'
        : 'text-zinc-700 hover:text-black'
    }`;

  return (
    <header className={`${theme === 'dark' ? 'bg-black/30' : 'bg-white/60'} sticky top-0 z-50 backdrop-blur-xl border-b ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}
      style={{ boxShadow: '0 8px 32px 0 rgba(99,102,241,0.15)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-500/90" />
            <span className={`text-base sm:text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>Loop Methods</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={linkCls} end>Home</NavLink>
            <NavLink to="/about" className={linkCls}>About</NavLink>
            <NavLink to="/services" className={linkCls}>Services</NavLink>
            <NavLink to="/contact" className={linkCls}>Contact</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className={`inline-flex items-center justify-center h-10 w-10 rounded-lg border transition ${
                theme === 'dark'
                  ? 'border-white/10 text-zinc-200 hover:bg-white/5'
                  : 'border-black/10 text-zinc-800 hover:bg-black/5'
              }`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className={`md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border ${
                theme === 'dark'
                  ? 'border-white/10 text-zinc-200 hover:bg-white/5'
                  : 'border-black/10 text-zinc-800 hover:bg-black/5'
              }`}
              aria-label="Toggle navigation"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className={`md:hidden border-t ${theme === 'dark' ? 'border-white/10 bg-black/40' : 'border-black/10 bg-white/70'} backdrop-blur-xl`}> 
          <div className="px-4 py-3 flex flex-col">
            <NavLink onClick={() => setOpen(false)} to="/" className={linkCls} end>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={linkCls}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/services" className={linkCls}>Services</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={linkCls}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
