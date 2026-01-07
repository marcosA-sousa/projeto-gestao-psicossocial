
import React from 'react';
import footerLogo from './assets/mental-health.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 dark:bg-gray-900 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 overflow-hidden rounded-full bg-white dark:bg-gray-800 flex items-center justify-center border border-gray-100 dark:border-gray-700 shadow-sm">
              <img
                alt="Logo MentalHealth"
                className="h-9 w-9 object-cover scale-125 translate-y-1"
                src={footerLogo}
              />
            </div>
            <span className="font-display font-bold text-primary text-xl dark:text-gray-100">MentalHealth</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400 dark:text-gray-400 font-light">
              &copy; {new Date().getFullYear()} Gestão de Riscos Psicossociais. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 justify-center md:justify-end mt-3">
              <a href="#" className="text-xs text-gray-400 dark:text-gray-300 hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="text-xs text-gray-400 dark:text-gray-300 hover:text-primary transition-colors">Termos de Serviço</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
