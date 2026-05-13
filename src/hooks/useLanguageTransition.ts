"use client";
import { useEffect, useRef, useState } from "react";

export function useLanguageTransition() {
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleLanguageChange = (
    currentLocale: "en" | "pt",
    nextLocale: "en" | "pt",
    onLocaleChange: (locale: "en" | "pt") => void,
  ) => {
    if (nextLocale === currentLocale) return;

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    setIsChangingLanguage(true);

    timeoutRef.current = window.setTimeout(() => {
      onLocaleChange(nextLocale);
      timeoutRef.current = window.setTimeout(() => {
        setIsChangingLanguage(false);
      }, 150);
    }, 120);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { isChangingLanguage, handleLanguageChange };
}
