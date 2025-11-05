import React from 'react';

const SimplePage = ({ theme, title, subtitle, children }) => {
  const isDark = theme === 'dark';
  return (
    <section>
      <div
        className={`mx-auto max-w-5xl rounded-2xl border p-8 backdrop-blur-xl ${
          isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/[0.04]'
        }`}
        style={{ boxShadow: '0 8px 32px 0 rgba(99,102,241,0.15)' }}
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-3 ${isDark ? 'text-[#a0a0b8]' : 'text-gray-600'}`}>{subtitle}</p>
        )}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
};

export default SimplePage;
