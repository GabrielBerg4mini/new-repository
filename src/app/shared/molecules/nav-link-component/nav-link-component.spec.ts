import { TestBed } from '@angular/core/testing';
import { NavLinkComponent } from './nav-link-component';

describe('NavLinkComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [NavLinkComponent] }).compileComponents();
  });

  it('renders the label and href', () => {
    const fixture = TestBed.createComponent(NavLinkComponent);
    fixture.componentRef.setInput('href', '#about');
    fixture.componentRef.setInput('label', 'About');
    fixture.detectChanges();

    const anchor = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(anchor.textContent?.trim()).toBe('About');
    expect(anchor.getAttribute('href')).toBe('#about');
    expect(anchor.getAttribute('aria-current')).toBeNull();
  });

  it('marks the link as active', () => {
    const fixture = TestBed.createComponent(NavLinkComponent);
    fixture.componentRef.setInput('href', '#about');
    fixture.componentRef.setInput('label', 'About');
    fixture.componentRef.setInput('active', true);
    fixture.detectChanges();

    const anchor = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(anchor.getAttribute('aria-current')).toBe('location');
  });
});
