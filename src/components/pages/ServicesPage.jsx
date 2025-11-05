export default function ServicesPage({ theme }) {
  const itemBase = `rounded-xl border p-5`;
  const styleFor = (t) => ({
    backgroundColor: t === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
    borderColor: 'rgba(255,255,255,0.10)',
    boxShadow: '0 8px 32px 0 rgba(99,102,241,0.12)'
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>Services</h1>
      <div className="grid gap-6 mt-8">
        {[ 
          { id: 'ai', title: 'AI & Data', desc: 'Custom LLM apps, RAG pipelines, analytics, and MLOps.' },
          { id: 'web', title: 'Web & Mobile', desc: 'React, cross‑platform apps, design systems, PWAs.' },
          { id: 'cloud', title: 'Cloud & DevOps', desc: 'Infra as code, observability, performance, SRE.' },
        ].map((s) => (
          <div key={s.id} id={s.id} className={itemBase} style={styleFor(theme)}>
            <h3 className={`text-xl font-medium ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>{s.title}</h3>
            <p className={`mt-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
