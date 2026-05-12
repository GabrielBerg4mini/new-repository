"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { NAV_LINKS, SOCIAL_MEDIA_LINKS, RESUME_LINK } from "./Header.data";
import Link from "next/link";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(() => window.location.hash);

  useEffect(() => {
    // Listener para quando o hash mudar (ao clicar em um link)
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isActive = (href: string) => activeHash === href;

  const getIconByLabel = (label: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      GitHub: <FaGithub size={24} />,
      LinkedIn: <FaLinkedin size={24} />,
      Email: <FaEnvelope size={24} />,
    };
    return iconMap[label] || null;
  };

  return (
    <header className="border-border border-b bg-secondary">
      <div className="px-20 py-6 flex justify-between items-center">
        {/* Botão Mobile */}
        <button
          aria-expanded={isMobileMenuOpen}
          aria-controls="menu-mobile"
          className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-md transition-colors duration-300 md:hidden"
          onClick={() => setIsMobileMenuOpen((current) => !current)}
          data-open={isMobileMenuOpen}
          type="button"
        >
          <FaBars
            className="absolute transition-all duration-300 ease-in-out group-data-[open=true]:scale-75 group-data-[open=true]:rotate-90 group-data-[open=true]:opacity-0 text-foreground-muted"
            size={20}
          />
          <FaTimes
            className="absolute scale-75 rotate-90 opacity-0 transition-all duration-300 ease-in-out group-data-[open=true]:scale-100 group-data-[open=true]:rotate-0 group-data-[open=true]:opacity-100 text-foreground-muted"
            size={20}
          />
        </button>

        {/* Nav Desktop */}
        <nav className="hidden md:flex items-center gap-40" id="menu-desktop">
          {/* Logo Desktop */}
          <Link href="/" className="text-xl font-bold text-gray-500 hidden md:block">
            Logo
          </Link>
          <ul className="flex gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  className={`transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-gray-300 font-semibold"
                      : "text-foreground-muted hover:text-gray-300"
                  }`}
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <ul className="flex gap-4">
          {SOCIAL_MEDIA_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-muted hover:text-gray-300 transition-colors duration-200"
                aria-label={link.label}
              >
                {getIconByLabel(link.label)}
              </a>
            </li>
          ))}
          <li>
            <Link
              href={RESUME_LINK[0].href}
              className="text-foreground-muted hover:text-secondary transition-colors duration-300 border border-foreground-muted px-3 py-1 rounded-md hover:bg-gray-300 hover:border-gray-300 *:transition-colors "
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>

      {/* Nav Mobile */}
      <nav
        className={`overflow-hidden transition-all duration-300 ease-out origin-top md:hidden ${
          isMobileMenuOpen
            ? "max-h-64 translate-y-0 opacity-100"
            : "max-h-0 -translate-y-3 opacity-0"
        }`}
        id="menu-mobile"
      >
        <ul className="flex flex-col gap-3 px-8 py-4 border-t border-border">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                className={`transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-gray-300 font-semibold"
                    : "text-foreground-muted hover:text-gray-300"
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
