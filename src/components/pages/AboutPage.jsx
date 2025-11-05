export default function AboutPage({ theme }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>About Loop Methods</h1>
      <p className={`mt-4 leading-7 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>
        We are a team of designers and engineers focused on building exceptional products. Our approach blends 
        research-driven strategy, solid engineering, and thoughtful design to deliver measurable outcomes.
      </p>
    </div>
  );
}
