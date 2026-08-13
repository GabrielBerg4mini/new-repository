import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme';

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('defaults to dark when nothing is stored', () => {
    const service = TestBed.inject(ThemeService);
    expect(service.theme()).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('reads the theme already stored in localStorage', () => {
    localStorage.setItem('theme', 'light');
    const service = TestBed.inject(ThemeService);
    expect(service.theme()).toBe('light');
  });

  it('toggles the theme and persists it', () => {
    const service = TestBed.inject(ThemeService);
    service.toggleTheme();
    expect(service.theme()).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    service.toggleTheme();
    expect(service.theme()).toBe('dark');
  });
});
