import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideBriefcase } from '@lucide/angular';
import { Reveal } from '@/app/shared/directives/reveal/reveal';
import { TranslatePipe } from '@/app/shared/pipes/translate/translate';
import { SectionTitleComponent } from '../../molecules/section-title-component/section-title-component';
import { EXPERIENCE_ITEMS } from './experience-component.data';

@Component({
  selector: 'app-experience-component',
  imports: [Reveal, TranslatePipe, SectionTitleComponent, LucideBriefcase],
  templateUrl: './experience-component.html',
  styleUrl: './experience-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  protected readonly items = EXPERIENCE_ITEMS;
}
