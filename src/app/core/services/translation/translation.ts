import { Injectable, signal } from '@angular/core';
import { en } from './i18n/en';
import { pt } from './i18n/pt';

export type Locale = 'en' | 'pt';

const DICTIONARIES: Record<Locale, unknown> = { en, pt };
const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly localeSignal = signal<Locale>(this.readInitialLocale());
  readonly locale = this.localeSignal.asReadonly();

  constructor() {
    document.documentElement.lang = this.localeSignal();
  }

  setLocale(locale: Locale): void {
    this.localeSignal.set(locale);
    document.documentElement.lang = locale;
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // ignore
    }
  }

  translate(key: string): string {
    const parts = key.split('.');
    let result: unknown = DICTIONARIES[this.localeSignal()];
    for (const part of parts) {
      if (
        result !== null &&
        typeof result === 'object' &&
        part in (result as Record<string, unknown>)
      ) {
        result = (result as Record<string, unknown>)[part];
      } else {
        return key;
      }
    }
    return typeof result === 'string' ? result : key;
  }

  private readInitialLocale(): Locale {
    const stored = typeof localStorage === 'undefined' ? null : localStorage.getItem(STORAGE_KEY);
    return stored === 'pt' ? 'pt' : 'en';
  }
}
