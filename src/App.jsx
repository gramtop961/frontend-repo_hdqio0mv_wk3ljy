import React, { useCallback, useMemo, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ParallaxHero from './components/ParallaxHero';
import Sections from './components/Sections';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Prefer system theme on first load
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

  const bgClass = useMemo(
    () => (theme === 'dark' ? 'bg-[#0a0a0f] text-white' : 'bg-white text-black'),
    [theme]
  );

  return (
    <div id="app" className={`min-h-screen ${bgClass}`} style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <ParallaxHero theme={theme} />
        <Sections theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  );
};

export default App;
