export default function ContactPage({ theme }) {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>Get in touch</h1>
      <p className={`mt-2 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>Tell us about your project.</p>

      <form className="mt-8 grid gap-4">
        <input
          type="text"
          required
          placeholder="Name"
          className={`w-full rounded-lg border px-4 py-3 bg-transparent outline-none ${
            theme === 'dark'
              ? 'border-white/15 text-white placeholder:text-zinc-500 focus:border-indigo-400'
              : 'border-black/10 text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500'
          }`}
        />
        <input
          type="email"
          required
          placeholder="Email"
          className={`w-full rounded-lg border px-4 py-3 bg-transparent outline-none ${
            theme === 'dark'
              ? 'border-white/15 text-white placeholder:text-zinc-500 focus:border-indigo-400'
              : 'border-black/10 text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500'
          }`}
        />
        <textarea
          rows={5}
          required
          placeholder="How can we help?"
          className={`w-full rounded-lg border px-4 py-3 bg-transparent outline-none ${
            theme === 'dark'
              ? 'border-white/15 text-white placeholder:text-zinc-500 focus:border-indigo-400'
              : 'border-black/10 text-zinc-900 placeholder:text-zinc-400 focus:border-indigo-500'
          }`}
        />
        <button type="submit" className="rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 font-medium">Send message</button>
      </form>
    </div>
  );
}
