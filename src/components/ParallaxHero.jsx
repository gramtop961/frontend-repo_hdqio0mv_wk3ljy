import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

const ParallaxHero = ({ theme }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isDark = theme === 'dark';

  return (
    <section className={`relative min-h-[100vh] w-full overflow-hidden ${isDark ? 'bg-[#0a0a0f] text-white' : 'bg-white text-black'}`}>
      {/* 3D Spline */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Parallax gradient layers (do not block pointer) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: isDark
              ? 'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.18), transparent 40%), radial-gradient(circle at 80% 30%, rgba(6,182,212,0.14), transparent 40%)'
              : 'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.12), transparent 40%), radial-gradient(circle at 80% 30%, rgba(6,182,212,0.10), transparent 40%)',
            transform: `translateY(${offset * 0.08}px)`
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.10), transparent 60%)',
            transform: `translateY(${offset * -0.05}px)`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center">
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm backdrop-blur-xl ${
            isDark
              ? 'border-white/10 bg-white/5 text-[#a0a0b8]'
              : 'border-black/10 bg-black/[0.03] text-gray-600'
          }`}
          style={{ boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.15)' }}
        >
          Premium Engineering Studio • Futuristic Interfaces
        </span>
        <h1
          className="mt-8 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent font-extrabold tracking-tight"
          style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: 'clamp(48px,8vw,96px)' }}
        >
          Build Intelligence. Ship the Future.
        </h1>
        <p className={`mx-auto mt-6 max-w-3xl ${isDark ? 'text-[#a0a0b8]' : 'text-gray-600'}`} style={{ fontSize: 18 }}>
          Enterprise-grade solutions in AI, Web3, IoT, and Software. Glassmorphic design, production reliability, and rich motion crafted as one.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/about"
            className="group relative inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium text-white transition-transform duration-300 ease-out hover:scale-105"
            style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)', boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.25)' }}
          >
            Learn More
          </Link>
          <Link
            to="/contact"
            className={`relative inline-flex items-center justify-center rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 ${
              isDark
                ? 'border-white/10 bg-white/5 text-white hover:border-white/20'
                : 'border-black/10 bg-black/[0.04] text-black hover:border-black/20'
            }`}
            style={{ boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.15)' }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ParallaxHero;
