export interface NavLink {
  labelKey: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { labelKey: 'header.nav.about', href: '#about' },
  { labelKey: 'header.nav.skills', href: '#skills' },
  { labelKey: 'header.nav.experience', href: '#experience' },
  { labelKey: 'header.nav.projects', href: '#projects' },
  { labelKey: 'header.nav.education', href: '#education' },
  { labelKey: 'header.nav.contact', href: '#contact' },
];

export const RESUME_LINK: NavLink = { labelKey: 'header.resume', href: '/resume' };
