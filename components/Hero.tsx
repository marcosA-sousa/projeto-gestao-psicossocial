
import React from 'react';
import { FileText } from 'lucide-react';
import mentalHealth from './assets/mental-health.jpg';

interface HeroProps {
  onNavigate?: (page: 'home' | 'docs') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="mb-16 mt-8">
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-white shadow-soft p-6 md:p-12 border border-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-secondary/10 dark:bg-secondary/20 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest">
                Saúde Mental no Trabalho
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-gray-100 leading-tight mt-6">
              Promovendo o <span className="text-primary">bem-estar</span> corporativo.
            </h2>

            <p className="text-base md:text-lg text-gray-500 dark:text-gray-300 leading-relaxed font-light mt-6">
              Identificamos, avaliamos e gerimos os riscos psicossociais para criar ambientes de trabalho mais saudáveis, produtivos e humanos.
            </p>

            <div className="pt-6">
              <button
                onClick={() => onNavigate?.('docs')}
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-[1.02] transition-all inline-flex items-center justify-center gap-3 shadow-md cursor-pointer"
              >
                <span>Acessar Documentação</span>
                <FileText size={18} />
              </button>
            </div>
          </div>

          <div className="relative h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              alt="Logo da página"
              className="absolute inset-0 w-full h-full object-contain object-center transition-opacity duration-700"
              src={mentalHealth}
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
