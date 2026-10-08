export const en = {
  header: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    resume: 'Resume',
  },
  back_to_home: 'Back to Home',
  open_pdf: 'Open PDF',
  hero: {
    saudation: "Hello — I'm",
    developer_front_text: 'Frontend Engineer',
    developer_mobile_text: 'Mobile Developer',
    first_description: 'Frontend enginner using HTML, CSS, JavaScript, TypeScript, Angular.',
    second_description: 'I use these technologies for both web and mobile front-end development.',
    open_resume: 'Open resume',
  },
  about: {
    eyebrow: '00 / Intro',
    title: 'About me',
    description:
      'Front-end developer with over 3.5 years of experience in the development and maintenance of web applications (SPAs) and cross-platform mobile apps. Strong expertise in Angular, Ionic, Capacitor, and REST API integration. Specialist in creating reusable components, token-based authentication, and state management using RxJS. Experienced in Agile methodologies and tools like Asana, ensuring the delivery of clean code and scalable solutions for the corporate market.',
    stats: [
      { value: '3.5+', label: 'Years of experience' },
      { value: '5', label: 'Corporate SPAs built' },
      { value: '7', label: 'Mobile apps built and maintained' },
      { value: '20', label: 'Institutional websites delivered' },
    ],
  },
  skills: {
    eyebrow: '01 / Stack',
    title: 'Skills',
    groups: {
      frontend: 'Front-end & Mobile',
      architecture: 'Architecture & Tools',
      concepts: 'Concepts & CMS',
    },
  },
  experience: {
    eyebrow: '02 / Career',
    title: 'Experience',
    items: [
      {
        role: 'Front-end / Mobile Developer',
        company: 'Sulivam Softwares',
        period: 'Oct 2023 - Present',
        bullets: [
          'Built 5 complex corporate SPAs with Angular, improving performance and component reuse by 40%.',
          'Delivered 4 mobile apps from scratch and maintained 3 more with Ionic and Capacitor, offering a native experience to over 500 users.',
          "Integrated every front-end with the company's core API, including payment screens, maps and geolocation.",
          'Created and published 15 institutional websites with WordPress, PHP and SCSS, focused on responsiveness and visual fidelity.',
          'Led task management in Asana with a multidisciplinary team of 20 people, taking part in front-end architecture decisions.',
        ],
      },
      {
        role: 'Front-end Developer',
        company: 'Freelancer',
        period: 'Jan 2023 - Oct 2023',
        bullets: [
          'Launched 5 responsive institutional websites with HTML5, CSS3, JavaScript and Bootstrap, focused on modern layouts and UX.',
          'Developed custom WordPress themes with PHP and SCSS, delivering 5 projects with high fidelity to the designs.',
          'Optimized front-ends by integrating third-party APIs, expanding site features and automating clients’ workflows.',
        ],
      },
    ],
  },
  projects: {
    eyebrow: '03 / Work',
    title: 'Projects',
    list: [
      {
        name: 'Corporate SPA Applications',
        period: 'Nov 2023 - Present',
        description:
          'Dashboards built with Angular and RxJS for managing and visualizing real-time data, directly improving the efficiency of clients’ internal processes.',
      },
      {
        name: 'Hybrid Mobile Apps',
        period: 'May 2023 - Oct 2023',
        description:
          '4 hybrid apps built from scratch to deploy with Ionic and Capacitor, keeping a single codebase and cutting development time by up to 70%.',
      },
      {
        name: 'WordPress Theme Development',
        period: 'Jan 2023 - Apr 2023',
        description:
          'Custom features from the PHP back-end to advanced SCSS styling, improving SEO ranking by 30% and loading speed by 100%.',
      },
    ],
  },
  education: {
    eyebrow: '04 / Background',
    title: 'Education & Languages',
    degree: {
      heading: 'Education',
      course: 'Systems Analysis and Development',
      institution: 'UNICESUMAR',
      period: 'Mar 2022 - Dec 2024',
    },
    languages: {
      heading: 'Languages',
      list: [
        { name: 'Portuguese', level: 'Native' },
        {
          name: 'English',
          level: 'Intermediate (technical reading and documentation) | Basic (conversation)',
        },
      ],
    },
  },
  contact: {
    eyebrow: '05 / Contact',
    title: "Let's talk",
    description:
      'Open to new opportunities and interesting projects. If you want to build something with Angular, Ionic or the modern web, get in touch.',
    email: 'E-mail',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    location: 'Artur Nogueira - SP, Brazil',
    rights: 'All rights reserved.',
  },
} as const;
