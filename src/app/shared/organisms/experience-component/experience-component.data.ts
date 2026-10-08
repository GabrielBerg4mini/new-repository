export interface ExperienceItem {
  /** Translation key prefix: `<key>.role`, `.company`, `.period`, `.bullets.<n>`. */
  key: string;
  bullets: readonly number[];
  current?: boolean;
}

export const EXPERIENCE_ITEMS: readonly ExperienceItem[] = [
  { key: 'experience.items.0', bullets: [0, 1, 2, 3, 4], current: true },
  { key: 'experience.items.1', bullets: [0, 1, 2] },
];
