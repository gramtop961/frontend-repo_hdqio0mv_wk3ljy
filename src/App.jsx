import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import ContactPage from './components/pages/ContactPage';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mq.matches ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.style.background = 'linear-gradient(180deg, #0a0a0b 0%, #0b0b0c 100%)';
    } else {
      root.classList.remove('dark');
      document.body.style.background = 'linear-gradient(180deg, #fafafa 0%, #ffffff 100%)';
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className={theme === 'dark' ? 'text-white' : 'text-zinc-900'}>
        <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />

        <main>
          <Routes>
            <Route path="/" element={<HomePage theme={theme} />} />
            <Route path="/about" element={<AboutPage theme={theme} />} />
            <Route path="/services" element={<ServicesPage theme={theme} />} />
            <Route path="/contact" element={<ContactPage theme={theme} />} />
          </Routes>
        </main>

        <Footer theme={theme} />
      </div>
    </BrowserRouter>
  );
}
