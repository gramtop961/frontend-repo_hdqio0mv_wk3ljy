import React from 'react';

const Footer = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <footer className={`${isDark ? 'bg-[#0a0a0f]' : 'bg-white'} relative w-full py-16`}> 
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.08),transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className={`rounded-2xl border p-8 backdrop-blur-xl ${isDark ? 'border-white/10 bg-white/5 text-white' : 'border-black/10 bg-black/[0.03] text-black'}`}>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="text-xl font-semibold">Let’s build something remarkable</h3>
              <p className={`${isDark ? 'text-[#a0a0b8]' : 'text-gray-600'} mt-1`}>Tell us about your challenge and we’ll craft a plan to deliver impact fast.</p>
            </div>
            <a
              href="mailto:hello@loopmethods.com"
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-white transition-transform duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)', boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.25)' }}
            >
              hello@loopmethods.com
            </a>
          </div>
        </div>
        <div className={`mt-8 flex flex-col items-center justify-between gap-4 text-sm md:flex-row ${isDark ? 'text-[#a0a0b8]' : 'text-gray-600'}`}>
          <p>© {new Date().getFullYear()} Loop Methods. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className={`${isDark ? 'hover:text-white' : 'hover:text-black'}`}>About</a>
            <a href="#portfolio" className={`${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Portfolio</a>
            <a href="#careers" className={`${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
