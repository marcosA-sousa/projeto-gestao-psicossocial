import React from 'react';
import { Download, BookOpen, FileText, BarChart3, Users, Shield, ArrowRight } from 'lucide-react';

const DocumentationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 dark:text-gray-100">
              Centro de Documentação
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Acesse guias, relatórios e recursos metodológicos para gerenciar riscos psicossociais em sua organização.
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all inline-flex items-center gap-2">
              <Download size={20} />
              Baixar Recursos
            </button>
          </div>
        </div>
      </section>

      {/* Relatórios de Avaliação Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <BarChart3 size={32} className="text-primary" />
            <h2 className="text-3xl font-display font-bold dark:text-gray-100">Relatórios de Avaliação</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 dark:text-gray-100">Mapeamento de Estressores Ocupacionais</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Modelos e templates para identificar, analisar e documentar os principais fatores de risco psicossocial em seus ambientes de trabalho. Inclui análise de demanda, controle e suporte.
              </p>
              <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Acessar Documento <ArrowRight size={18} />
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 dark:text-gray-100">Fatores de Proteção</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Documentação sobre mecanismos de proteção, suporte social e recursos organizacionais que reduzem o impacto de estressores. Implementação de estratégias preventivas.
              </p>
              <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Acessar Documento <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-2xl border border-primary/20">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Nota:</strong> Todos os relatórios estão disponíveis em formato PDF e Excel. Os modelos podem ser customizados conforme as necessidades da sua organização.
            </p>
          </div>
        </div>
      </section>

      {/* Guias de Intervenção Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <BookOpen size={32} className="text-secondary" />
            <h2 className="text-3xl font-display font-bold dark:text-gray-100">Guias de Intervenção</h2>
          </div>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 dark:text-gray-100">Fortalecimento da Resiliência Emocional</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Protocolos estruturados para desenvolver competências emocionais individuais e coletivas. Inclui exercícios práticos, dinâmicas de grupo e ferramentas de autocuidado.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>Técnicas de mindfulness e meditação</li>
                <li>Gestão de emoções e comunicação não-violenta</li>
                <li>Desenvolvimento de redes de suporte</li>
                <li>Planos personalizados de bem-estar</li>
              </ul>
              <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Acessar Guia <ArrowRight size={18} />
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 dark:text-gray-100">Intervenções Organizacionais</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Estratégias e ações em nível estrutural para modificar o ambiente de trabalho e reduzir riscos psicossociais de forma sustentável.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>Redesenho de processos de trabalho</li>
                <li>Melhoria da comunicação interna</li>
                <li>Políticas de conciliação trabalho-vida</li>
                <li>Programas de reconhecimento e desenvolvimento</li>
              </ul>
              <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Acessar Guia <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Manuais para Liderança Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Users size={32} className="text-green-600" />
            <h2 className="text-3xl font-display font-bold dark:text-gray-100">Manuais para Liderança</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 dark:text-gray-100">Liderança Saudável</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Competências essenciais para líderes que desejam criar ambientes psicologicamente seguros, promover o bem-estar e desenvolver equipes resilientes.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6 text-sm">
                <li>Inteligência emocional na liderança</li>
                <li>Feedback construtivo e coaching</li>
                <li>Gestão da diversidade e inclusão</li>
                <li>Prevenção de assédio moral</li>
              </ul>
              <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Acessar Manual <ArrowRight size={18} />
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 dark:text-gray-100">Prevenção de Burnout</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Estratégias e políticas para identificar, prevenir e intervir em casos de síndrome de burnout e esgotamento profissional.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6 text-sm">
                <li>Sinais de alerta e diagnóstico</li>
                <li>Gestão de carga de trabalho</li>
                <li>Programas de descompressão</li>
                <li>Reintegração profissional</li>
              </ul>
              <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Acessar Manual <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Políticas e Conformidade Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Shield size={32} className="text-orange-600" />
            <h2 className="text-3xl font-display font-bold dark:text-gray-100">Políticas e Conformidade</h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 mb-8">
            <h3 className="text-xl font-bold mb-4 dark:text-gray-100">Legislação e Normas Aplicáveis</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Resumo das principais regulamentações, normas técnicas e recomendações internacionais sobre saúde mental ocupacional e riscos psicossociais.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6">
              <li><strong>NR 17:</strong> Ergonomia e organização do trabalho</li>
              <li><strong>NR 12:</strong> Segurança de máquinas e equipamentos</li>
              <li><strong>ISO 45001:</strong> Sistemas de gestão de segurança e saúde ocupacional</li>
              <li><strong>Resolução COEP 03/2015:</strong> Diretrizes sobre saúde mental no trabalho</li>
            </ul>
            <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Ver Documentação Completa <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5 dark:bg-primary/10 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-6 dark:text-gray-100">
            Precisa de ajuda?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para esclarecer dúvidas sobre a implementação de políticas de saúde mental ou para receber treinamentos customizados.
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">
            Solicitar Consultoria
          </button>
        </div>
      </section>
    </div>
  );
};

export default DocumentationPage;
