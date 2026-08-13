import { TestBed } from '@angular/core/testing';
import { ActiveHashService } from './active-hash';

describe('ActiveHashService', () => {
  afterEach(() => {
    window.location.hash = '';
  });

  it('reads the current location hash', () => {
    window.location.hash = '#about';
    const service = TestBed.inject(ActiveHashService);
    expect(service.activeHash()).toBe('#about');
    expect(service.isActive('#about')).toBe(true);
    expect(service.isActive('#skills')).toBe(false);
  });

  it('updates when the hash changes', () => {
    const service = TestBed.inject(ActiveHashService);
    window.location.hash = '#skills';
    window.dispatchEvent(new Event('hashchange'));
    expect(service.activeHash()).toBe('#skills');
  });
});
