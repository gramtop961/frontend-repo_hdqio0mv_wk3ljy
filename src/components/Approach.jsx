import React from 'react';
import { ShieldCheck, Workflow, TimerReset, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Sparkles,
    title: 'Discovery & Design',
    detail: 'Deep dives, system mapping, and experience-led design to align on vision and value.'
  },
  {
    icon: Workflow,
    title: 'Architecture & Prototyping',
    detail: 'Reference architectures, rapid POCs, and validation cycles to de-risk delivery.'
  },
  {
    icon: TimerReset,
    title: 'Agile Delivery',
    detail: 'Sprint-based execution with observability, QA automation, and continuous shipping.'
  },
  {
    icon: ShieldCheck,
    title: 'Security & Scale',
    detail: 'Audits, compliance, and performance tuning to run reliably in production.'
  }
];

const Approach = () => {
  return (
    <section className="relative w-full bg-[#12121a] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2
            className="font-extrabold tracking-tight"
            style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: 'clamp(36px,5vw,64px)' }}
          >
            Our Approach
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#a0a0b8]" style={{ fontSize: 18 }}>
            Strategy to ship. We partner from concept to production with a focus on measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, detail }, idx) => (
            <div
              key={title}
              className="relative rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-6 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02]"
              style={{ boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.15)' }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(6,182,212,0.06) 100%)' }} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.06)]">
                  <Icon className="h-6 w-6 text-[#8b5cf6]" />
                </div>
                <h3 className="text-lg font-semibold">{idx + 1}. {title}</h3>
                <p className="mt-2 text-sm text-[#a0a0b8]">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
