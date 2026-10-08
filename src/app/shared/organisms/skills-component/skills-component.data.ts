export interface SkillGroup {
  titleKey: string;
  icon: 'code' | 'wrench' | 'layers';
  items: readonly string[];
}

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    titleKey: 'skills.groups.frontend',
    icon: 'code',
    items: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SCSS',
      'Tailwind CSS',
      'Bootstrap',
      'RxJS',
      'Ionic',
      'Capacitor',
    ],
  },
  {
    titleKey: 'skills.groups.architecture',
    icon: 'wrench',
    items: [
      'REST APIs',
      'HTTP Client',
      'Reactive Forms',
      'Guards',
      'Interceptors',
      'Lazy Loading',
      'Git',
      'GitHub',
      'Bitbucket',
      'Postman',
      'Asana',
    ],
  },
  {
    titleKey: 'skills.groups.concepts',
    icon: 'layers',
    items: [
      'Clean Code',
      'Componentization',
      'Responsive Design',
      'SPA',
      'WordPress',
      'PHP',
      'Agile',
    ],
  },
];
