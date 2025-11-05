import React from 'react';
import SimplePage from './SimplePage';

const AboutPage = ({ theme }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SimplePage
        theme={theme}
        title="About Loop Methods"
        subtitle="We are an engineering studio focused on intelligent systems and premium product design."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <p className={theme === 'dark' ? 'text-[#a0a0b8]' : 'text-gray-600'}>
            We craft enterprise-grade platforms and interfaces across AI, Web3, IoT, and cloud-native software. Our approach blends rigorous engineering with polished, modern aesthetics.
          </p>
          <p className={theme === 'dark' ? 'text-[#a0a0b8]' : 'text-gray-600'}>
            From discovery to launch, we partner closely with teams to align strategy, design systems, and deliver measurable outcomes with production reliability.
          </p>
        </div>
      </SimplePage>
    </div>
  );
};

export default AboutPage;
