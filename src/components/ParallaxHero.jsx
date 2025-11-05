import Spline from '@splinetool/react-spline';

export default function ParallaxHero({ theme }) {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8s3pJY1Wgdxkq8Zz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-x-20 -top-20 h-64 bg-gradient-to-b from-indigo-500/40 to-transparent blur-3xl opacity-70" />
        <div className="absolute -inset-x-20 bottom-0 h-64 bg-gradient-to-t from-fuchsia-500/40 to-transparent blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-2xl rounded-2xl border backdrop-blur-xl p-6 sm:p-8`}
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
            borderColor: 'rgba(255,255,255,0.10)',
            boxShadow: '0 8px 32px 0 rgba(99,102,241,0.15)'
          }}
        >
          <h1 className={`text-3xl sm:text-5xl font-semibold leading-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
            Premium full‑stack products, designed and engineered to scale
          </h1>
          <p className={`mt-4 text-base sm:text-lg ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>
            We craft AI, Web, and platform solutions with an emphasis on delightful UX, performance, and reliability.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#services" className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition">Explore Services</a>
            <a href="/contact" className={`px-4 py-2 rounded-lg border transition ${theme === 'dark' ? 'border-white/15 text-white hover:bg-white/5' : 'border-black/10 text-zinc-900 hover:bg-black/5'}`}>Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}
