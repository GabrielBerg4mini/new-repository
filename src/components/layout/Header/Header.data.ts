export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about", external: false },
  { label: "Skills", href: "#skills", external: false },
  { label: "Experience", href: "#experience", external: false },
  { label: "Projects", href: "#projects", external: false },
  { label: "My certifications", href: "#certifications", external: false },
];

export const SOCIAL_MEDIA_LINKS: NavLink[] = [
  { label: "GitHub", href: "https://github.com/GabrielBerg4mini", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gabriel-bergamini/", external: true },
  { label: "Email", href: "mailto:gabrielbergaminioficial@gmail.com", external: true },
];

export const RESUME_LINK: NavLink[] = [{ label: "Resume", href: "/resume", external: false }];
