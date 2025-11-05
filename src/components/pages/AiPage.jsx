import React from 'react';
import SimplePage from './SimplePage';
import { Bot, Sparkles } from 'lucide-react';

const AiPage = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SimplePage
        theme={theme}
        title="AI & Machine Learning"
        subtitle="LLM apps, RAG pipelines, MLOps, and predictive analytics for real business impact."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[{icon: Bot, t: 'LLM Applications', d: 'Chat, agents, and copilots tuned for your domain.'},
            {icon: Sparkles, t: 'RAG & Vector Search', d: 'Knowledge-grounded answers with observability.'},
            {icon: Bot, t: 'MLOps', d: 'Train, evaluate, and deploy with continuous monitoring.'}]
            .map((item, idx) => (
              <div key={idx} className={`rounded-2xl border p-6 backdrop-blur-xl ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/[0.04]'}`} style={{ boxShadow: '0 8px 32px 0 rgba(99,102,241,0.15)' }}>
                <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${isDark ? 'bg-white/10 text-white' : 'bg-black/[0.06] text-black'}`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="font-semibold">{item.t}</div>
                <div className={`${isDark ? 'text-[#a0a0b8]' : 'text-gray-600'} text-sm mt-1`}>{item.d}</div>
              </div>
            ))}
        </div>
      </SimplePage>
    </div>
  );
};

export default AiPage;
