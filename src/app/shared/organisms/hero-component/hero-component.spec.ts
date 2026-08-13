import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HeroComponent } from './hero-component';

describe('HeroComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('creates the component and renders the resume CTA', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('a[aria-label="Open Resume"]');
    expect(link).toBeTruthy();
  });
});
