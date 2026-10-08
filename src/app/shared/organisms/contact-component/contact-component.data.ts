export interface ContactLink {
  labelKey: string;
  value: string;
  href: string;
}

export const CONTACT_LINKS: readonly ContactLink[] = [
  {
    labelKey: 'contact.email',
    value: 'gabrielbergaminioficial@gmail.com',
    href: 'mailto:gabrielbergaminioficial@gmail.com',
  },
  {
    labelKey: 'contact.linkedin',
    value: 'linkedin.com/in/gabriel-bergamini',
    href: 'https://www.linkedin.com/in/gabriel-bergamini/',
  },
  {
    labelKey: 'contact.github',
    value: 'github.com/GabrielBerg4mini',
    href: 'https://github.com/GabrielBerg4mini',
  },
];
