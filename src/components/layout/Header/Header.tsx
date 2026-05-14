"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaMoon } from "react-icons/fa";
import { TiWeatherSunny } from "react-icons/ti";
import { NAV_LINKS, RESUME_LINK } from "./Header.data";
import { useTranslation } from "@/hooks/useTranslation";
import { useTheme } from "@/hooks/useTheme";
import { useLanguageTransition } from "@/hooks/useLanguageTransition";
import { useActiveHash } from "@/hooks/useActiveHash";

import Link from "next/link";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navGradientText =
    "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500";
  const navGradientHoverText =
    "hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:via-sky-400 hover:to-blue-500";
  const navGradientUnderline =
    "after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:via-sky-400 after:to-blue-500 after:transition-all after:duration-300 after:ease-out after:content-['']";

  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useTranslation();
  const { isChangingLanguage, handleLanguageChange } = useLanguageTransition();
  const { activeHash } = useActiveHash();

  const navLinkClassName = (href: string) => {
    const isActive = activeHash === href;

    return [
      "relative inline-flex items-center pb-1 text-sm transition-all duration-300 ease-out",
      navGradientUnderline,
      `hover:after:w-full ${navGradientHoverText}`,
      isActive
        ? `${navGradientText} font-semibold after:w-full`
        : "text-foreground-muted hover:text-gray-300",
    ].join(" ");
  };

  return (
    <header className="border-border border-b bg-secondary">
      <div
        className={`px-5 md:px-20 py-6 flex justify-between items-center transition-all duration-300 ease-out ${
          isChangingLanguage ? "opacity-60 translate-y-0.5" : "opacity-100 translate-y-0"
        }`}
      >
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
          <ul
            className={`flex gap-8 transition-all duration-300 ease-out ${
              isChangingLanguage ? "opacity-75 translate-y-0.5" : "opacity-100 translate-y-0"
            }`}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.labelKey}>
                <a
                  className={`${navLinkClassName(link.href)} ${
                    isChangingLanguage ? "opacity-80 translate-y-px" : "opacity-100 translate-y-0"
                  }`}
                  aria-current={activeHash === link.href ? "location" : undefined}
                  href={link.href}
                >
                  {t(link.labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex gap-4 items-center">
          <li>
            <button
              type="button"
              className="text-foreground-muted relative h-10 w-10 flex items-center justify-center overflow-hidden rounded-md bg-slate-700 cursor-pointer transition-colors duration-300 font-semibold hover:bg-slate-800 hover:border-slate-800 hover:text-slate-300 *:transition-colors"
              onClick={() => handleLanguageChange(locale, locale === "en" ? "pt" : "en", setLocale)}
              aria-label="Toggle language"
              data-lang={locale}
            >
              <span
                className={`transition-all duration-300 ease-out ${
                  isChangingLanguage ? "opacity-0 scale-90" : "opacity-100 scale-100"
                }`}
              >
                {locale === "en" ? "EN" : "PT"}
              </span>
            </button>
          </li>
          <li>
            <button
              type="button"
              aria-pressed={theme === "dark"}
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="text-foreground-muted relative h-10 w-10 flex items-center justify-center overflow-hidden rounded-md bg-slate-700 cursor-pointer transition-colors duration-300 font-semibold hover:bg-slate-800 hover:border-slate-800 hover:text-slate-300 *:transition-colors"
            >
              <span className="sr-only">Toggle theme</span>

              <TiWeatherSunny
                size={18}
                aria-hidden
                className={
                  `absolute inset-0 m-auto transition-[opacity,transform] duration-500 ease-in-out motion-safe:transform-gpu motion-safe:will-change-transform ` +
                  (theme === "dark"
                    ? "opacity-100 scale-100 rotate-0 translate-y-0"
                    : "opacity-0 scale-50 rotate-90 -translate-y-1")
                }
              />

              <FaMoon
                size={16}
                aria-hidden
                className={
                  `absolute inset-0 m-auto transition-[opacity,transform] duration-500 ease-in-out motion-safe:transform-gpu motion-safe:will-change-transform ` +
                  (theme === "dark"
                    ? "opacity-0 scale-50 -rotate-90 translate-y-1"
                    : "opacity-100 scale-100 rotate-0 translate-y-0")
                }
              />
            </button>
          </li>
          <li>
            <Link
              href={RESUME_LINK[0].href}
              className="group relative inline-flex overflow-hidden rounded-lg p-px bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500"
              aria-label="Open Resume"
            >
              <span className="relative block rounded-[calc(var(--radius-lg)-1px)] bg-zinc-900 px-6 py-2 font-semibold text-white">
                <span
                  aria-hidden
                  className="absolute inset-0 origin-left scale-x-0 rounded-[calc(var(--radius-lg)-1px)] bg-linear-to-r from-cyan-500 via-sky-500 to-blue-600 transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <span className="relative z-10">{t(RESUME_LINK[0].labelKey)}</span>
              </span>
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
        <ul
          className={`flex flex-col gap-3 px-8 py-4 border-t border-border transition-all duration-300 ease-out ${
            isChangingLanguage ? "opacity-75 translate-y-0.5" : "opacity-100 translate-y-0"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.labelKey}>
              <a
                className={`${navLinkClassName(link.href)} ${
                  isChangingLanguage ? "opacity-80 translate-y-px" : "opacity-100 translate-y-0"
                }`}
                aria-current={activeHash === link.href ? "location" : undefined}
                href={link.href}
              >
                {t(link.labelKey)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
