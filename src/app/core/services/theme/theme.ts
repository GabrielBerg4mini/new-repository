import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themeSignal = signal<Theme>(this.readInitialTheme());
  readonly theme = this.themeSignal.asReadonly();

  constructor() {
    this.applyThemeAttribute(this.themeSignal());
  }

  toggleTheme(): void {
    this.setTheme(this.themeSignal() === 'light' ? 'dark' : 'light');
  }

  setTheme(theme: Theme): void {
    this.themeSignal.set(theme);
    this.applyThemeAttribute(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }

  private readInitialTheme(): Theme {
    const stored =
      typeof localStorage === 'undefined'
        ? null
        : (localStorage.getItem(STORAGE_KEY) as Theme | null);
    return stored === 'light' ? 'light' : 'dark';
  }

  private applyThemeAttribute(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
  }
}
