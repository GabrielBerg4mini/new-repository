import { TestBed } from '@angular/core/testing';
import { TranslatePipe } from './translate';
import { TranslationService } from '@/app/core/services/translation/translation';

describe('TranslatePipe', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('translates a key using the current locale', () => {
    const pipe = TestBed.runInInjectionContext(() => new TranslatePipe());
    expect(pipe.transform('hero.saudation')).toBe("Hello — I'm");

    const translation = TestBed.inject(TranslationService);
    translation.setLocale('pt');
    expect(pipe.transform('hero.saudation')).toBe('Olá — meu nome é');
  });
});
