export default function Footer({ theme }) {
  return (
    <footer
      className={`mt-20 border-t ${
        theme === 'dark' ? 'border-white/10 bg-black/40' : 'border-black/10 bg-white/70'
      } backdrop-blur-xl`}
      style={{ boxShadow: '0 -8px 32px 0 rgba(99,102,241,0.08)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
          © {new Date().getFullYear()} Loop Methods. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
