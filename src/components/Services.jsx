import React from 'react';
import { Cpu, Blocks, Radio, Code } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Artificial Intelligence',
    desc: 'Custom LLMs, RAG pipelines, intelligent agents, and ML systems tuned for your domain.'
  },
  {
    icon: Blocks,
    title: 'Blockchain Engineering',
    desc: 'Audited smart contracts, zero-knowledge integrations, and enterprise-grade Web3 infrastructure.'
  },
  {
    icon: Radio,
    title: 'Internet of Things',
    desc: 'Edge-to-cloud architectures, secure device orchestration, and real-time telemetry dashboards.'
  },
  {
    icon: Code,
    title: 'Software Development',
    desc: 'Modern, scalable applications with robust CI/CD, testing, and performance-first UX.'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-[#0a0a0f] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.08),transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2
            className="font-extrabold tracking-tight text-white"
            style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: 'clamp(36px,5vw,64px)' }}
          >
            What We Do
          </h2>
          <p className="mt-4 text-[#a0a0b8]" style={{ fontSize: 18 }}>
            End-to-end delivery across emerging technologies. Designed with a glassmorphic aesthetic, built with enterprise rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-[rgba(255,255,255,0.2)]"
              style={{ boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.15)' }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.1) 100%)' }} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.06)]">
                  <Icon className="h-6 w-6 text-[#6366f1]" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-[#a0a0b8]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
