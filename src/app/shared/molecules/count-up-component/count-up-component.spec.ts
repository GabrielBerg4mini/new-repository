import { TestBed } from '@angular/core/testing';

import { CountUpComponent } from './count-up-component';

describe('CountUpComponent', () => {
  it('ends on the final value, keeping decimals, separator and suffix', async () => {
    const fixture = TestBed.createComponent(CountUpComponent);
    fixture.componentRef.setInput('value', '3,5+');
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent.trim()).toBe('3,5+');
  });
});
