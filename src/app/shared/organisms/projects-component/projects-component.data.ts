export interface ProjectItem {
  /** Translation key prefix: `<key>.name`, `.period`, `.description`. */
  key: string;
  tags: readonly string[];
}

export const PROJECT_ITEMS: readonly ProjectItem[] = [
  { key: 'projects.list.0', tags: ['Angular', 'RxJS', 'TypeScript'] },
  { key: 'projects.list.1', tags: ['Ionic', 'Capacitor', 'Angular'] },
  { key: 'projects.list.2', tags: ['WordPress', 'PHP', 'SCSS'] },
];
