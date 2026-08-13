import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MainLayout } from './main-layout';

describe('MainLayout', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayout],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders the header', () => {
    const fixture = TestBed.createComponent(MainLayout);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-header-component')).toBeTruthy();
  });
});
