import React from 'react';

const PageContainer = ({ theme, children }) => {
  const isDark = theme === 'dark';
  return (
    <div className={`${isDark ? 'bg-[#0a0a0f] text-white' : 'bg-white text-black'}`}>
      <div className="relative">
        {/* Soft radial background tint */}
        <div className="pointer-events-none absolute inset-0" style={{
          background: isDark
            ? 'radial-gradient(1000px 600px at 10% 10%, rgba(99,102,241,0.10), transparent 60%), radial-gradient(800px 500px at 90% 20%, rgba(6,182,212,0.08), transparent 60%)'
            : 'radial-gradient(1000px 600px at 10% 10%, rgba(99,102,241,0.08), transparent 60%), radial-gradient(800px 500px at 90% 20%, rgba(6,182,212,0.06), transparent 60%)'
        }} />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
