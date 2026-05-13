"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "../i18n/translations/en.json";
import pt from "../i18n/translations/pt.json";

type Locale = "en" | "pt";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const map: Record<Locale, Record<string, unknown>> = { en, pt };

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  setLocale: () => {},
  t: (k: string) => k,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";
    return ((localStorage.getItem("lang") as Locale) || "en") as Locale;
  });

  useEffect(() => {
    try {
      localStorage.setItem("lang", locale);
    } catch {
      // ignore
    }
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useMemo(() => {
    return (key: string) => {
      const parts = key.split(".");
      let res: unknown = map[locale];
      for (const p of parts) {
        if (typeof res === "object" && res !== null) {
          res = (res as Record<string, unknown>)[p];
        } else {
          return key;
        }
        if (res === undefined) return key;
      }
      return typeof res === "string" ? res : key;
    };
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
