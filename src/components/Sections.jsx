import React from 'react';
import { Cpu, Blocks, Radio, Code, Briefcase, Users2, GraduationCap, Building2, Bot, Sparkles } from 'lucide-react';

const GlassCard = ({ icon: Icon, title, children, theme, id }) => {
  const isDark = theme === 'dark';
  return (
    <section id={id} className={`${isDark ? 'bg-[#0a0a0f]' : 'bg-white'} py-20`}>
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`relative overflow-hidden rounded-3xl border p-8 md:p-12 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.01] ${
            isDark
              ? 'border-white/10 bg-white/5 text-white'
              : 'border-black/10 bg-black/[0.03] text-black'
          }`}
          style={{ boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.15)' }}
        >
          <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.10) 0%, rgba(139,92,246,0.10) 100%)' }} />
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-3">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${isDark ? 'bg-white/10' : 'bg-black/5'}`}>
                <Icon className="h-6 w-6 text-[#6366f1]" />
              </div>
              <h2
                className="font-extrabold tracking-tight"
                style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: 'clamp(28px,4vw,44px)' }}
              >
                {title}
              </h2>
            </div>
            <div className={`${isDark ? 'text-[#a0a0b8]' : 'text-gray-600'} space-y-4`} style={{ fontSize: 16 }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Sections = ({ theme }) => {
  return (
    <div>
      <GlassCard id="about" theme={theme} icon={Users2} title="About Us">
        <p>
          We are a multidisciplinary engineering studio combining research-grade AI with cloud-native software practices. Our teams operate in small, senior pods delivering measurable outcomes, not just deliverables.
        </p>
        <p>
          From product strategy to rollout, we partner long-term with growth companies and enterprises. Security, privacy, and reliability are first-class citizens in everything we craft.
        </p>
      </GlassCard>

      <GlassCard id="ai" theme={theme} icon={Cpu} title="AI & Machine Learning Services">
        <ul className="list-disc pl-5 space-y-2">
          <li>Custom LLMs and agentic workflows (RAG, tools, function calling) tailored to your data.</li>
          <li>Vision and speech models for document processing, quality inspection, and voice assistants.</li>
          <li>MLOps pipelines with prompt/version tracking, evaluation, and continuous improvement.</li>
        </ul>
      </GlassCard>

      <GlassCard id="web3" theme={theme} icon={Blocks} title="Web 3.0 Development">
        <ul className="list-disc pl-5 space-y-2">
          <li>Audited smart contracts with upgrade patterns and safe key management.</li>
          <li>Zero-knowledge integrations and DID/VC identity frameworks.</li>
          <li>Wallet onboarding, NFT platforms, and enterprise-grade chain infra.</li>
        </ul>
      </GlassCard>

      <GlassCard id="software" theme={theme} icon={Code} title="Software Development">
        <ul className="list-disc pl-5 space-y-2">
          <li>Design systems, micro frontends, and real-time experiences.</li>
          <li>Event-driven backends, GraphQL/REST APIs, and battle-tested CI/CD.</li>
          <li>Performance-first UX with accessibility and observability baked in.</li>
        </ul>
      </GlassCard>

      <GlassCard id="iot" theme={theme} icon={Radio} title="Internet of Things (Industry 4.0)">
        <ul className="list-disc pl-5 space-y-2">
          <li>Secure device provisioning, over-the-air updates, and telemetry ingestion.</li>
          <li>Edge AI for anomaly detection and predictive maintenance.</li>
          <li>Dashboards for real-time visibility across plants and fleets.</li>
        </ul>
      </GlassCard>

      <GlassCard id="salesforce" theme={theme} icon={Building2} title="Salesforce Solutions">
        <ul className="list-disc pl-5 space-y-2">
          <li>Sales Cloud, Service Cloud, and Marketing Cloud implementation and optimization.</li>
          <li>Custom Lightning components and integrations with your core data platforms.</li>
          <li>Automations that increase conversion, reduce cycle time, and improve retention.</li>
        </ul>
      </GlassCard>

      <GlassCard id="portfolio" theme={theme} icon={Briefcase} title="Portfolio">
        <p>Selected highlights from recent deliveries:</p>
        <ul className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
          {["Autonomous Support Agent (LLM)", "Industrial Vision QA", "Enterprise NFT Platform", "Predictive IoT Analytics"].map((item) => (
            <li key={item} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/90 dark:text-black/90" style={{ backdropFilter: 'blur(12px)' }}>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#8b5cf6]" />
                <span>{item}</span>
              </div>
            </li>
          ))}
        </ul>
      </GlassCard>

      <GlassCard id="careers" theme={theme} icon={GraduationCap} title="Careers">
        <p>
          We hire curious builders who love shipping. If you move fast with care and enjoy ownership, you’ll thrive here. Remote-first with on-site hack weeks.
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Senior AI/ML Engineer</li>
          <li>Full-Stack Product Engineer</li>
          <li>Blockchain Protocol Engineer</li>
          <li>IoT Systems Architect</li>
        </ul>
      </GlassCard>

      <GlassCard id="contact" theme={theme} icon={Bot} title="Company Contact Information">
        <p>Email: hello@loopmethods.com</p>
        <p>HQ: Remote-first • Global delivery pods across time zones</p>
        <p>Response time: within 24 hours on business days</p>
      </GlassCard>
    </div>
  );
};

export default Sections;
