import { TestBed } from '@angular/core/testing';
import { TranslationService } from './translation';

describe('TranslationService', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('defaults to "en" when nothing is stored', () => {
    const service = TestBed.inject(TranslationService);
    expect(service.locale()).toBe('en');
    expect(document.documentElement.lang).toBe('en');
  });

  it('reads the locale already stored in localStorage', () => {
    localStorage.setItem('lang', 'pt');
    const service = TestBed.inject(TranslationService);
    expect(service.locale()).toBe('pt');
  });

  it('translates a dot-path key for the current locale', () => {
    const service = TestBed.inject(TranslationService);
    expect(service.translate('hero.saudation')).toBe("Hello — I'm");

    service.setLocale('pt');
    expect(service.translate('hero.saudation')).toBe('Olá — meu nome é');
    expect(localStorage.getItem('lang')).toBe('pt');
  });

  it('falls back to the key itself when not found', () => {
    const service = TestBed.inject(TranslationService);
    expect(service.translate('does.not.exist')).toBe('does.not.exist');
  });
});
