
import React from 'react';
import { BarChart3, BookOpen, ScrollText } from 'lucide-react';
import { DocCardProps } from '../types.ts';

const DocCard: React.FC<DocCardProps> = ({ title, description, icon, iconBg, iconColor }) => (
  <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-50 hover:shadow-lg transition-all cursor-pointer group hover:-translate-y-1 dark:bg-gray-800 dark:border-gray-700">
    <div className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center mb-6 ${iconColor} group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">{title}</h4>
    <p className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed font-light">
      {description}
    </p>
  </div>
);

const Documentation: React.FC = () => {
  const resources = [
    {
      title: "Relatórios de Avaliação",
      description: "Acesse modelos de mapeamento de estressores ocupacionais e fatores de proteção.",
      icon: <BarChart3 size={24} />,
      iconBg: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      title: "Guias de Intervenção",
      description: "Documentação sobre protocolos para fortalecimento da resiliência emocional individual e em grupos.",
      icon: <BookOpen size={24} />,
      iconBg: "bg-secondary/15",
      iconColor: "text-secondary"
    },
    {
      title: "Manuais para Liderança",
      description: "Recursos educativos sobre liderança saudável e políticas de prevenção ao burnout.",
      icon: <ScrollText size={24} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section className="pb-16" id="docs">
      <div className="text-center mb-12">
        <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Nossa Documentação</h3>
        <p className="text-gray-400 dark:text-gray-300 max-w-xl mx-auto font-light">
          Explore nossos recursos e guias metodológicos para análise do clima organizacional.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((res, index) => (
          <DocCard key={index} {...res} />
        ))}
      </div>
    </section>
  );
};

export default Documentation;
