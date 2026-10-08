import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucidePlus } from '@lucide/angular';
import { Reveal } from '@/app/shared/directives/reveal/reveal';
import { TranslatePipe } from '@/app/shared/pipes/translate/translate';
import { CountUpComponent } from '../../molecules/count-up-component/count-up-component';
import { SectionTitleComponent } from '../../molecules/section-title-component/section-title-component';

@Component({
  selector: 'app-about-component',
  imports: [CountUpComponent, Reveal, TranslatePipe, SectionTitleComponent, LucidePlus],
  templateUrl: './about-component.html',
  styleUrl: './about-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly stats = [0, 1, 2, 3] as const;
}
