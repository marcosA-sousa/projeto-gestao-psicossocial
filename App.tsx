
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Documentation from './components/Documentation.tsx';
import DocumentationPage from './components/DocumentationPage.tsx';
import Footer from './components/Footer.tsx';
import MobileNav from './components/MobileNav.tsx';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored as 'light' | 'dark';
    } catch (e) {}
    return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [currentPage, setCurrentPage] = useState<'home' | 'docs'>('home');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Navbar theme={theme} toggleTheme={toggleTheme} onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <div className="pt-20 md:pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            <Hero onNavigate={setCurrentPage} />
            <Documentation />
          </div>
        ) : (
          <DocumentationPage />
        )}
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default App;
