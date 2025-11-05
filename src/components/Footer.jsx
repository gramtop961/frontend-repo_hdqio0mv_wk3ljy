import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative w-full bg-[#0a0a0f] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.08),transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-10 backdrop-blur-xl" style={{ boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.15)' }}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold">Let’s build something remarkable</h3>
              <p className="mt-2 text-[#a0a0b8]">Tell us about your challenge and we’ll craft a plan to deliver impact fast.</p>
            </div>
            <div className="flex items-center">
              <a
                href="mailto:hello@loopmethods.com"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-white transition-transform duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6)', boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.25)' }}
              >
                <Mail className="h-5 w-5" />
                hello@loopmethods.com
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-sm text-[#a0a0b8] md:flex-row">
          <p>© {new Date().getFullYear()} Loop Methods. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
