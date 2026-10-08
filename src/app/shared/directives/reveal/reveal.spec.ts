import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { Reveal } from './reveal';

@Component({ imports: [Reveal], template: '<div appReveal="200">content</div>' })
class Host {}

describe('Reveal', () => {
  it('adds the reveal class and the stagger delay', async () => {
    const fixture = TestBed.createComponent(Host);
    await fixture.whenStable();
    const el: HTMLElement = fixture.nativeElement.querySelector('div');
    expect(el.classList).toContain('reveal');
    expect(el.style.transitionDelay).toBe('200ms');
  });
});
