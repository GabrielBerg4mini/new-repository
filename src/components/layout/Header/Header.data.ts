export type NavLink = {
  labelKey: string;
  href: string;
  external?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { labelKey: "header.nav.about", href: "#about", external: false },
  { labelKey: "header.nav.skills", href: "#skills", external: false },
  { labelKey: "header.nav.experience", href: "#experience", external: false },
  { labelKey: "header.nav.projects", href: "#projects", external: false },
  { labelKey: "header.nav.certifications", href: "#certifications", external: false },
];

export const SOCIAL_MEDIA_LINKS: NavLink[] = [
  { labelKey: "social.github", href: "https://github.com/GabrielBerg4mini", external: true },
  {
    labelKey: "social.linkedin",
    href: "https://www.linkedin.com/in/gabriel-bergamini/",
    external: true,
  },
  { labelKey: "social.email", href: "mailto:gabrielbergaminioficial@gmail.com", external: true },
];

export const RESUME_LINK: NavLink[] = [
  { labelKey: "header.resume", href: "/resume", external: false },
];
