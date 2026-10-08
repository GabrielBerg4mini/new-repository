import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTitleComponent } from './section-title-component';

describe('SectionTitleComponent', () => {
  let component: SectionTitleComponent;
  let fixture: ComponentFixture<SectionTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionTitleComponent);
    fixture.componentRef.setInput('eyebrow', '01');
    fixture.componentRef.setInput('title', 'Title');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should render the title', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.textContent).toContain('Title');
  });
});
