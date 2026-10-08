import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';

const DURATION_MS = 1800;
const VALUE_PATTERN = /^(\d+)(?:([.,])(\d+))?(.*)$/;

@Component({
  selector: 'app-count-up-component',
  templateUrl: './count-up-component.html',
  styleUrl: './count-up-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountUpComponent {
  /** Final value such as `20`, `3.5+` or `3,5+`: number, optional decimals, optional suffix. */
  readonly value = input.required<string>();

  private readonly progress = signal(0);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);

  protected readonly display = computed(() => {
    const match = VALUE_PATTERN.exec(this.value());
    if (!match) return this.value();
    const [, integer, separator = '.', decimals = '', suffix] = match;
    const target = Number(`${integer}.${decimals || '0'}`);
    const current = (target * this.progress()).toFixed(decimals.length);
    return current.replace('.', separator) + suffix;
  });

  constructor() {
    afterNextRender(() => {
      const reduceMotion =
        typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion || typeof IntersectionObserver === 'undefined') {
        this.progress.set(1);
        return;
      }
      let frame = 0;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();
          this.animate((id) => (frame = id));
        },
        { threshold: 0.4 },
      );
      observer.observe(this.host);
      this.destroyRef.onDestroy(() => {
        observer.disconnect();
        cancelAnimationFrame(frame);
      });
    });
  }

  private animate(trackFrame: (id: number) => void): void {
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / DURATION_MS, 1);
      this.progress.set(1 - Math.pow(1 - t, 3));
      if (t < 1) trackFrame(requestAnimationFrame(step));
    };
    trackFrame(requestAnimationFrame(step));
  }
}
