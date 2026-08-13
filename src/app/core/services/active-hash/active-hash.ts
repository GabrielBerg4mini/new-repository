import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ActiveHashService {
  private readonly hashSignal = signal(typeof window === 'undefined' ? '' : window.location.hash);
  readonly activeHash = this.hashSignal.asReadonly();

  constructor() {
    window.addEventListener('hashchange', () => this.hashSignal.set(window.location.hash));
  }

  isActive(href: string): boolean {
    return this.hashSignal() === href;
  }
}
