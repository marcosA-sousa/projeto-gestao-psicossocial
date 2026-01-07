
import React from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import logo from './assets/mental-health.jpg';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onNavigate?: (page: 'home' | 'docs') => void;
  currentPage?: 'home' | 'docs';
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, onNavigate, currentPage = 'home' }) => {
  return (
    <header className="fixed w-full top-0 z-50 glass-nav bg-white/80 dark:bg-gray-900/80 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-full bg-white flex items-center justify-center border border-secondary/20 shadow-sm">
              <img
                alt="Gestão de Riscos Logo"
                className="h-10 w-10 object-cover scale-125 translate-y-1"
                src={logo}
              />
            </div>
            <span className="hidden md:block font-display text-lg font-bold text-primary tracking-wide">
              Gestão de Riscos Psicossociais
            </span>
            <span className="md:hidden font-display text-base font-bold text-primary">
              Gestão de Riscos
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate?.('home')} 
              className={`text-sm font-medium transition-colors cursor-pointer ${currentPage === 'home' ? 'text-primary font-bold' : 'text-gray-600 dark:text-gray-300 hover:text-primary'}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate?.('docs')} 
              className={`text-sm font-medium transition-colors cursor-pointer ${currentPage === 'docs' ? 'text-primary font-bold' : 'text-gray-600 dark:text-gray-300 hover:text-primary'}`}
            >
              Documentação
            </button>
            <a href="#" className="px-5 py-2 rounded-full bg-primary text-white text-sm font-bold hover:shadow-lg hover:bg-opacity-90 transition-all dark:bg-primary dark:text-white">
              Contato
            </a>
          </div>

          {/* Theme Toggle + Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="p-2 rounded-md text-gray-600 dark:text-gray-200 hover:text-primary transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="md:hidden">
              <button className="p-2 rounded-md text-gray-500 dark:text-gray-300 hover:text-primary">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
