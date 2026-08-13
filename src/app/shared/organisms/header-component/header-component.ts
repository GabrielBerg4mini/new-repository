import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideMenu, LucideMoon, LucideSun, LucideX } from '@lucide/angular';
import { NavLinkComponent } from '@/app/shared/molecules/nav-link-component/nav-link-component';
import { TranslatePipe } from '@/app/shared/pipes/translate/translate';
import { ThemeService } from '@/app/core/services/theme/theme';
import { Locale, TranslationService } from '@/app/core/services/translation/translation';
import { ActiveHashService } from '@/app/core/services/active-hash/active-hash';
import { NAV_LINKS, RESUME_LINK } from './header-component.data';

@Component({
  selector: 'app-header-component',
  imports: [
    RouterLink,
    LucideMenu,
    LucideX,
    LucideSun,
    LucideMoon,
    NavLinkComponent,
    TranslatePipe,
  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnDestroy {
  protected readonly navLinks = NAV_LINKS;
  protected readonly resumeLink = RESUME_LINK;

  protected readonly theme = inject(ThemeService);
  protected readonly translation = inject(TranslationService);
  protected readonly activeHash = inject(ActiveHashService);

  protected readonly isMobileMenuOpen = signal(false);
  protected readonly isChangingLanguage = signal(false);

  private languageStepTimeout?: ReturnType<typeof setTimeout>;
  private languageFadeTimeout?: ReturnType<typeof setTimeout>;

  protected readonly rootRowClass = computed(
    () =>
      `px-5 md:px-20 py-6 flex justify-between items-center transition-all duration-300 ease-out ${
        this.isChangingLanguage() ? 'opacity-60 translate-y-0.5' : 'opacity-100 translate-y-0'
      }`,
  );

  protected readonly navListClass = computed(
    () =>
      `flex gap-8 transition-all duration-300 ease-out ${
        this.isChangingLanguage() ? 'opacity-75 translate-y-0.5' : 'opacity-100 translate-y-0'
      }`,
  );

  protected readonly mobileListClass = computed(
    () =>
      `flex flex-col gap-3 px-8 py-4 border-t border-border transition-all duration-300 ease-out ${
        this.isChangingLanguage() ? 'opacity-75 translate-y-0.5' : 'opacity-100 translate-y-0'
      }`,
  );

  protected readonly mobileNavClass = computed(
    () =>
      `overflow-hidden transition-all duration-300 ease-out origin-top md:hidden ${
        this.isMobileMenuOpen()
          ? 'max-h-64 translate-y-0 opacity-100'
          : 'max-h-0 -translate-y-3 opacity-0'
      }`,
  );

  protected readonly langLabelClass = computed(
    () =>
      `transition-all duration-300 ease-out ${
        this.isChangingLanguage() ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
      }`,
  );

  protected readonly sunIconClass = computed(
    () =>
      `absolute inset-0 m-auto transition-[opacity,transform] duration-500 ease-in-out motion-safe:transform-gpu motion-safe:will-change-transform ${
        this.theme.theme() === 'dark'
          ? 'opacity-100 scale-100 rotate-0 translate-y-0'
          : 'opacity-0 scale-50 rotate-90 -translate-y-1'
      }`,
  );

  protected readonly moonIconClass = computed(
    () =>
      `absolute inset-0 m-auto transition-[opacity,transform] duration-500 ease-in-out motion-safe:transform-gpu motion-safe:will-change-transform ${
        this.theme.theme() === 'dark'
          ? 'opacity-0 scale-50 -rotate-90 translate-y-1'
          : 'opacity-100 scale-100 rotate-0 translate-y-0'
      }`,
  );

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((current) => !current);
  }

  onToggleLanguage(): void {
    const next: Locale = this.translation.locale() === 'en' ? 'pt' : 'en';
    clearTimeout(this.languageStepTimeout);
    clearTimeout(this.languageFadeTimeout);
    this.isChangingLanguage.set(true);
    this.languageStepTimeout = setTimeout(() => {
      this.translation.setLocale(next);
      this.languageFadeTimeout = setTimeout(() => this.isChangingLanguage.set(false), 150);
    }, 120);
  }

  ngOnDestroy(): void {
    clearTimeout(this.languageStepTimeout);
    clearTimeout(this.languageFadeTimeout);
  }
}
