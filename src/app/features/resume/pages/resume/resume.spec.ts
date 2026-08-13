import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Resume } from './resume';

describe('Resume', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resume],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders the back-to-home link and the PDF iframe', () => {
    const fixture = TestBed.createComponent(Resume);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('iframe')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('a[routerLink="/"]')).toBeTruthy();
  });
});
