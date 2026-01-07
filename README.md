# Gestão de Riscos Psicossociais

Este projeto apresenta um front-end para apoiar práticas de prevenção e gestão de riscos psicossociais no trabalho. O foco principal é oferecer:

- Materiais e guias práticos para avaliação e intervenção em ambientes laborais.
- Modelos de relatórios e indicadores para monitorar bem‑estar e riscos.
- Recursos para líderes e equipes implementarem políticas preventivas.

### Tecnologias:
- Front-end: React + TypeScript com Tailwind CSS
- Build: Vite

#### E como faço para rodar no navegador?
1. Instale dependências:

```bash
npm install
```

2. Rode em modo de desenvolvimento:

```bash
npm run dev
```

3. Abra no navegador em `http://localhost:5173` (ou porta mostrada pelo Vite)

Estrutura de arquivos (principais)

```
gestão-de-riscos-psicossociais
├── README.md
├── package.json
├── index.html
├── index.tsx
├── App.tsx
├── types.ts
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── components/
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Documentation.tsx
│   ├── DocumentationPage.tsx
│   ├── Footer.tsx
│   ├── MobileNav.tsx
│   └── assets/
│       └── mental-health.jpg
└── node_modules/
```
 

Visão do conteúdo / objetivo do site
O site centraliza recursos práticos para organizações que desejam avaliar e reduzir riscos psicossociais (ex.: estresse, burnout, falta de suporte, demandas excessivas). Oferece:

- Guias de avaliação e mapeamento de estressores.
- Protocolos de intervenção individual e grupal.
- Manuais de apoio para liderança e políticas preventivas.
- Modelos de relatórios para monitoramento contínuo.

Roadmap para o futuro do projeto
- Curto prazo
  - Melhorar acessibilidade (a11y) e contrastes
  - Documentação interna dos componentes
  - Testes unitários para componentes chave

- Médio prazo
  - Adicionar backend para armazenar documentos e relatórios
  - Autenticação para áreas restritas
  - Formulários para coleta de dados de avaliação

- Longo prazo
  - Painel com indicadores e gráficos interativos
  - Exportação de relatórios (PDF/CSV)
  - Internacionalização (i18n)



