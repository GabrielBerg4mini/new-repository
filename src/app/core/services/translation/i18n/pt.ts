export const pt = {
  header: {
    nav: {
      about: 'Sobre',
      skills: 'Habilidades',
      experience: 'Experiência',
      projects: 'Projetos',
      education: 'Formação',
      contact: 'Contato',
    },
    resume: 'Currículo',
  },
  back_to_home: 'Voltar para a página inicial',
  open_pdf: 'Abrir PDF',
  hero: {
    saudation: 'Olá — meu nome é',
    developer_front_text: 'Engenheiro Frontend',
    developer_mobile_text: 'Desenvolvedor Mobile',
    first_description:
      'Engenheiro de front-end com experiência em HTML, CSS, JavaScript, TypeScript, Angular.',
    second_description: 'Utilizo essas tecnologias tanto para desenvolvimento web quanto mobile.',
    open_resume: 'Abrir currículo',
  },
  about: {
    eyebrow: '00 / Intro',
    title: 'Sobre mim',
    description:
      'Desenvolvedor Front-end com mais de 3 anos e 6 meses de experiência no desenvolvimento e manutenção de aplicações web (SPAs) e mobile multiplataforma. Sólida atuação com Angular, Ionic, Capacitor e integração de APIs REST. Especialista na criação de componentes reutilizáveis, autenticação via tokens e gerenciamento de estado com RxJS. Experiência com metodologias ágeis e ferramentas como Asana, garantindo a entrega de código limpo e soluções escaláveis para o mercado corporativo.',
    stats: [
      { value: '3,5+', label: 'Anos de experiência' },
      { value: '5', label: 'SPAs corporativas criadas' },
      { value: '7', label: 'Apps mobile criados e mantidos' },
      { value: '20', label: 'Sites institucionais entregues' },
    ],
  },
  skills: {
    eyebrow: '01 / Stack',
    title: 'Habilidades',
    groups: {
      frontend: 'Front-end & Mobile',
      architecture: 'Arquitetura & Ferramentas',
      concepts: 'Conceitos & CMS',
    },
  },
  experience: {
    eyebrow: '02 / Carreira',
    title: 'Experiência',
    items: [
      {
        role: 'Desenvolvedor Front-end / Mobile',
        company: 'Sulivam Softwares',
        period: 'Out 2023 - Presente',
        bullets: [
          'Desenvolvi 5 aplicações SPA corporativas complexas com Angular, melhorando a performance e a componentização do sistema em 40%.',
          'Implementei 4 aplicativos mobile do zero e atuei na manutenção de outros 3 com Ionic e Capacitor, entregando experiência nativa para mais de 500 usuários.',
          'Integrei o front-end de todas as aplicações com a API central da empresa, incluindo telas de pagamento, mapas e geolocalização.',
          'Criei e publiquei 15 sites institucionais com WordPress, PHP e SCSS, garantindo responsividade e fidelidade visual.',
          'Liderei o gerenciamento de tarefas no Asana com uma equipe multidisciplinar de 20 pessoas, participando de decisões técnicas de arquitetura front-end.',
        ],
      },
      {
        role: 'Desenvolvedor Front-end',
        company: 'Freelancer',
        period: 'Jan 2023 - Out 2023',
        bullets: [
          'Lancei 5 sites institucionais responsivos com HTML5, CSS3, JavaScript e Bootstrap, focando em layouts modernos e na melhoria da experiência do usuário (UX).',
          'Programei temas customizados em WordPress com PHP e SCSS, entregando 5 projetos com alta fidelidade visual aos designs solicitados.',
          'Otimizei o front-end integrando APIs de terceiros, expandindo as funcionalidades dos sites e automatizando fluxos operacionais para os clientes.',
        ],
      },
    ],
  },
  projects: {
    eyebrow: '03 / Trabalhos',
    title: 'Projetos',
    list: [
      {
        name: 'Aplicações SPA Corporativas',
        period: 'Nov 2023 - Presente',
        description:
          'Painéis com Angular e RxJS para gerenciamento e visualização de dados em tempo real, impactando diretamente a eficiência dos processos internos dos clientes.',
      },
      {
        name: 'Aplicativos Mobile Híbridos',
        period: 'Mai 2023 - Out 2023',
        description:
          '4 aplicações híbridas do zero ao deploy com Ionic e Capacitor, mantendo uma base de código unificada e reduzindo o tempo de desenvolvimento em até 70%.',
      },
      {
        name: 'Desenvolvimento de Temas WordPress',
        period: 'Jan 2023 - Abr 2023',
        description:
          'Funcionalidades sob medida do back-end em PHP à estilização avançada com SCSS, melhorando o ranqueamento de SEO em 30% e a velocidade de carregamento em 100%.',
      },
    ],
  },
  education: {
    eyebrow: '04 / Trajetória',
    title: 'Formação & Idiomas',
    degree: {
      heading: 'Formação acadêmica',
      course: 'Análise e Desenvolvimento de Sistemas',
      institution: 'UNICESUMAR',
      period: 'Mar 2022 - Dez 2024',
    },
    languages: {
      heading: 'Idiomas',
      list: [
        { name: 'Português', level: 'Nativo' },
        {
          name: 'Inglês',
          level: 'Intermediário (leitura técnica e documentações) | Básico (conversação)',
        },
      ],
    },
  },
  contact: {
    eyebrow: '05 / Contato',
    title: 'Vamos conversar',
    description:
      'Aberto a novas oportunidades e projetos interessantes. Se quiser construir algo com Angular, Ionic ou web moderna, entre em contato.',
    email: 'E-mail',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    location: 'Artur Nogueira - SP, Brasil',
    rights: 'Todos os direitos reservados.',
  },
} as const;
