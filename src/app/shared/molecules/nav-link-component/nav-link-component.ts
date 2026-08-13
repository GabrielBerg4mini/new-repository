import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-nav-link-component',
  imports: [],
  templateUrl: './nav-link-component.html',
  styleUrl: './nav-link-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavLinkComponent {
  readonly href = input.required<string>();
  readonly label = input.required<string>();
  readonly active = input(false);
  readonly transitioning = input(false);

  private readonly gradientText =
    'bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500';
  private readonly gradientHoverText =
    'hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:via-sky-400 hover:to-blue-500';
  private readonly gradientUnderline =
    "after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:rounded-full after:bg-gradient-to-r after:from-cyan-400 after:via-sky-400 after:to-blue-500 after:transition-all after:duration-300 after:ease-out after:content-['']";

  readonly linkClass = computed(() =>
    [
      'relative inline-flex items-center pb-1 text-sm transition-all duration-300 ease-out',
      this.gradientUnderline,
      `hover:after:w-full ${this.gradientHoverText}`,
      this.active()
        ? `${this.gradientText} font-semibold after:w-full`
        : 'text-foreground-muted hover:text-gray-300',
      this.transitioning() ? 'opacity-80 translate-y-px' : 'opacity-100 translate-y-0',
    ].join(' '),
  );
}
