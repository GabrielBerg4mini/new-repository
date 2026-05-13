"use client";
import { useSyncExternalStore, useCallback } from "react";

type Theme = "light" | "dark";

function getThemeFromStorage(): Theme {
  if (typeof window === "undefined") return "dark";
  return (localStorage.getItem("theme") as Theme) || "dark";
}

function setThemeInStorage(theme: Theme): void {
  try {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  } catch {
    // ignore
  }
}

const themeSubscribers = new Set<() => void>();

function subscribeToTheme(callback: () => void): () => void {
  themeSubscribers.add(callback);
  return () => themeSubscribers.delete(callback);
}

function notifyThemeChange(): void {
  themeSubscribers.forEach((callback) => callback());
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeFromStorage, () => "dark");

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setThemeInStorage(newTheme);
    notifyThemeChange();
  }, [theme]);

  return { theme, toggleTheme };
}
