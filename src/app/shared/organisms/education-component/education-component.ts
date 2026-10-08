import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideGraduationCap, LucideLanguages } from '@lucide/angular';
import { Reveal } from '@/app/shared/directives/reveal/reveal';
import { TranslatePipe } from '@/app/shared/pipes/translate/translate';
import { SectionTitleComponent } from '../../molecules/section-title-component/section-title-component';

@Component({
  selector: 'app-education-component',
  imports: [Reveal, TranslatePipe, SectionTitleComponent, LucideGraduationCap, LucideLanguages],
  templateUrl: './education-component.html',
  styleUrl: './education-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  protected readonly languages = [0, 1] as const;
}
