import React from 'react';
import SimplePage from './SimplePage';
import { Radio } from 'lucide-react';

const IotPage = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SimplePage
        theme={theme}
        title="Internet of Things"
        subtitle="Edge to cloud telemetry, digital twins, and automation."
      >
        <div className={`rounded-2xl border p-6 backdrop-blur-xl ${isDark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/[0.04]'}`} style={{ boxShadow: '0 8px 32px 0 rgba(99,102,241,0.15)' }}>
          <div className="flex items-center gap-3">
            <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${isDark ? 'bg-white/10 text-white' : 'bg-black/[0.06] text-black'}`}>
              <Radio className="h-5 w-5" />
            </div>
            <div className="font-semibold">Connected systems, real insights</div>
          </div>
          <p className={`${isDark ? 'text-[#a0a0b8]' : 'text-gray-600'} mt-3`}>
            From device firmware to cloud dashboards, we close the loop on data-driven operations.
          </p>
        </div>
      </SimplePage>
    </div>
  );
};

export default IotPage;
