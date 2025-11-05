import React from 'react';
import SimplePage from './SimplePage';
import { Briefcase, GraduationCap } from 'lucide-react';

const CareersPage = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SimplePage
        theme={theme}
        title="Careers"
        subtitle="Join a team that blends engineering rigor with premium design."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[{icon: Briefcase, t: 'Senior Full‑Stack Engineer', d: 'TypeScript, React, Node, Cloud, CI/CD.'},
            {icon: GraduationCap, t: 'ML Engineer', d: 'LLMs, vector search, MLOps, evals.'}].map((r, idx) => (
              <div key={idx} className={`rounded-2xl border p-6 backdrop-blur-xl ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/[0.04]'}`} style={{ boxShadow: '0 8px 32px 0 rgba(99,102,241,0.15)' }}>
                <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${isDark ? 'bg-white/10 text-white' : 'bg-black/[0.06] text-black'}`}>
                  <r.icon className="h-5 w-5" />
                </div>
                <div className="font-semibold">{r.t}</div>
                <div className={`${isDark ? 'text-[#a0a0b8]' : 'text-gray-600'} text-sm mt-1`}>{r.d}</div>
                <button className="mt-4 inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 text-white">Apply</button>
              </div>
            ))}
        </div>
      </SimplePage>
    </div>
  );
};

export default CareersPage;
