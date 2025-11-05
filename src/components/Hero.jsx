import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0f] text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlay for depth - does not block pointer events */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.12),transparent_40%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-sm text-[#a0a0b8] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(99,102,241,0.15)]">
          <Rocket className="h-4 w-4 text-[#6366f1]" />
          Loop Methods • AI | Blockchain | IoT | Software
        </span>
        <h1
          className="mt-8 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent font-extrabold tracking-tight"
          style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: 'clamp(48px,8vw,96px)' }}
        >
          Building the Future, One Loop at a Time
        </h1>
        <p
          className="mx-auto mt-6 max-w-3xl text-[#a0a0b8]"
          style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', fontSize: '18px' }}
        >
          We craft premium, production-grade solutions powered by AI, blockchain, and modern cloud-native software. Designed with precision. Engineered for scale.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#services"
            className="group relative inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium text-white transition-transform duration-300 ease-out hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.25)'
            }}
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:border-[rgba(255,255,255,0.2)]"
            style={{ boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.15)' }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
