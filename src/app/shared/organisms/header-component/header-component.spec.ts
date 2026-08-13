import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './header-component';
import { ThemeService } from '@/app/core/services/theme/theme';
import { TranslationService } from '@/app/core/services/translation/translation';

describe('HeaderComponent', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('toggles the mobile menu open state', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;

    expect(component['isMobileMenuOpen']()).toBe(false);
    component.toggleMobileMenu();
    expect(component['isMobileMenuOpen']()).toBe(true);
  });

  it('delegates theme toggling to ThemeService', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const theme = TestBed.inject(ThemeService);

    const before = theme.theme();
    theme.toggleTheme();
    expect(theme.theme()).not.toBe(before);
  });

  it('switches the locale after the language transition delay', () => {
    vi.useFakeTimers();
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    const translation = TestBed.inject(TranslationService);

    const current = translation.locale();
    component.onToggleLanguage();
    vi.advanceTimersByTime(300);
    expect(translation.locale()).not.toBe(current);
    vi.useRealTimers();
  });
});
