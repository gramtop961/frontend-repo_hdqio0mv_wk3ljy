import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import AiPage from './components/pages/AiPage';
import Web3Page from './components/pages/Web3Page';
import SoftwarePage from './components/pages/SoftwarePage';
import IotPage from './components/pages/IotPage';
import SalesforcePage from './components/pages/SalesforcePage';
import PortfolioPage from './components/pages/PortfolioPage';
import CareersPage from './components/pages/CareersPage';
import ContactPage from './components/pages/ContactPage';

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

  const bgClass = useMemo(
    () => (theme === 'dark' ? 'bg-[#0a0a0f] text-white' : 'bg-white text-black'),
    [theme]
  );

  return (
    <BrowserRouter>
      <div id="app" className={`min-h-screen ${bgClass}`} style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<HomePage theme={theme} />} />
            <Route path="/about" element={<AboutPage theme={theme} />} />
            <Route path="/ai" element={<AiPage theme={theme} />} />
            <Route path="/web3" element={<Web3Page theme={theme} />} />
            <Route path="/software" element={<SoftwarePage theme={theme} />} />
            <Route path="/iot" element={<IotPage theme={theme} />} />
            <Route path="/salesforce" element={<SalesforcePage theme={theme} />} />
            <Route path="/portfolio" element={<PortfolioPage theme={theme} />} />
            <Route path="/careers" element={<CareersPage theme={theme} />} />
            <Route path="/contact" element={<ContactPage theme={theme} />} />
          </Routes>
        </main>
        <Footer theme={theme} />
      </div>
    </BrowserRouter>
  );
};

export default App;
