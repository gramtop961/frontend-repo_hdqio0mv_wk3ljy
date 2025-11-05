import { Link } from 'react-router-dom';
import ParallaxHero from '../ParallaxHero';

export default function HomePage({ theme }) {
  const cardBase = `rounded-2xl border p-6 transition transform hover:-translate-y-0.5 hover:scale-[1.01]`;
  const cardStyle = {
    backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
    borderColor: 'rgba(255,255,255,0.10)',
    boxShadow: '0 8px 32px 0 rgba(99,102,241,0.15)'
  };

  return (
    <div>
      <ParallaxHero theme={theme} />

      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className={`text-2xl sm:text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>What we do</h2>
        <p className={`mt-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>Explore our core capabilities.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'AI & Data', desc: 'ML systems, LLM apps, analytics.', to: '/services#ai' },
            { title: 'Web & Mobile', desc: 'React, native apps, PWAs.', to: '/services#web' },
            { title: 'Cloud & DevOps', desc: 'Scalable infra, CI/CD, SRE.', to: '/services#cloud' },
          ].map((item) => (
            <Link key={item.title} to={item.to} className={cardBase} style={cardStyle}>
              <h3 className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>{item.title}</h3>
              <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
