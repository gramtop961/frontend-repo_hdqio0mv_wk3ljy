import React from 'react';
import SimplePage from './SimplePage';

const PortfolioPage = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SimplePage
        theme={theme}
        title="Portfolio"
        subtitle="Case studies that demonstrate measurable outcomes."
      >
        <div className={`grid grid-cols-1 gap-6 md:grid-cols-2`}>
          {[1,2,3,4].map((i) => (
            <div key={i} className={`rounded-2xl border p-6 backdrop-blur-xl ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/[0.04]'}`} style={{ boxShadow: '0 8px 32px 0 rgba(99,102,241,0.15)' }}>
              <div className="h-36 w-full rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20" />
              <div className="mt-4 font-semibold">Project {i}</div>
              <div className={`${isDark ? 'text-[#a0a0b8]' : 'text-gray-600'} text-sm`}>Short description of the impact and tech stack.</div>
            </div>
          ))}
        </div>
      </SimplePage>
    </div>
  );
};

export default PortfolioPage;
