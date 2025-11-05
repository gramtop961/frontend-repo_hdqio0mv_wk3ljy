import React from 'react';
import { Cpu, Blocks, Code, Radio, Users2 } from 'lucide-react';
import ParallaxHero from '../ParallaxHero';
import { Link } from 'react-router-dom';

const GlassCard = ({ theme, icon: Icon, title, desc, to }) => {
  const isDark = theme === 'dark';
  return (
    <Link to={to} className="group block">
      <div
        className={`rounded-2xl border p-6 transition-transform duration-300 backdrop-blur-xl group-hover:-translate-y-1 ${
          isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/[0.04]'
        }`}
        style={{ boxShadow: '0 8px 32px 0 rgba(99,102,241,0.15)' }}
      >
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl mb-4 ${
          isDark ? 'bg-white/10 text-white' : 'bg-black/[0.06] text-black'
        }`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-black'}`}>{title}</h3>
        <p className={`mt-2 text-sm ${isDark ? 'text-[#a0a0b8]' : 'text-gray-600'}`}>{desc}</p>
        <div className="mt-4 inline-flex items-center text-sm font-medium text-indigo-400 group-hover:text-indigo-300">
          Explore →
        </div>
      </div>
    </Link>
  );
};

const HomePage = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <div>
      <ParallaxHero theme={theme} />
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <GlassCard
            theme={theme}
            icon={Cpu}
            title="AI & ML"
            desc="Applied intelligence, from LLMs to predictive analytics."
            to="/ai"
          />
          <GlassCard
            theme={theme}
            icon={Blocks}
            title="Web 3.0"
            desc="Smart contracts, wallets, and decentralized apps."
            to="/web3"
          />
          <GlassCard
            theme={theme}
            icon={Code}
            title="Software"
            desc="Cloud-native platforms, DevOps, and product engineering."
            to="/software"
          />
          <GlassCard
            theme={theme}
            icon={Radio}
            title="IoT"
            desc="Edge to cloud telemetry, digital twins, and automation."
            to="/iot"
          />
          <GlassCard
            theme={theme}
            icon={Users2}
            title="Salesforce"
            desc="RevOps architecture and Salesforce implementations."
            to="/salesforce"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
