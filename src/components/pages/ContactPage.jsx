import React from 'react';
import SimplePage from './SimplePage';

const ContactPage = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SimplePage
        theme={theme}
        title="Contact"
        subtitle="Tell us about your project."
      >
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input className={`rounded-xl border px-4 py-3 ${isDark ? 'border-white/10 bg-white/5 text-white placeholder:text-white/50' : 'border-black/10 bg-black/[0.03] text-black placeholder:text-black/50'}`} placeholder="Name" />
          <input className={`rounded-xl border px-4 py-3 ${isDark ? 'border-white/10 bg-white/5 text-white placeholder:text-white/50' : 'border-black/10 bg-black/[0.03] text-black placeholder:text-black/50'}`} placeholder="Email" />
          <input className={`rounded-xl border px-4 py-3 md:col-span-2 ${isDark ? 'border-white/10 bg-white/5 text-white placeholder:text-white/50' : 'border-black/10 bg-black/[0.03] text-black placeholder:text-black/50'}`} placeholder="Company" />
          <textarea rows={5} className={`rounded-xl border px-4 py-3 md:col-span-2 ${isDark ? 'border-white/10 bg-white/5 text-white placeholder:text-white/50' : 'border-black/10 bg-black/[0.03] text-black placeholder:text-black/50'}`} placeholder="Project details" />
          <div className="md:col-span-2">
            <button type="button" className="inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 font-medium text-white">
              Send Message
            </button>
          </div>
        </form>
      </SimplePage>
    </div>
  );
};

export default ContactPage;
