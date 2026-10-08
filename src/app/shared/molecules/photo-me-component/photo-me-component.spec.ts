import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoMeComponent } from './photo-me-component';

describe('PhotoMeComponent', () => {
  let component: PhotoMeComponent;
  let fixture: ComponentFixture<PhotoMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoMeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoMeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
