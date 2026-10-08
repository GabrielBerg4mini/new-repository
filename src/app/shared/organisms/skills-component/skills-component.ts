import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideCode, LucideLayers, LucideWrench } from '@lucide/angular';
import { Reveal } from '@/app/shared/directives/reveal/reveal';
import { TranslatePipe } from '@/app/shared/pipes/translate/translate';
import { ChipComponent } from '../../molecules/chip-component/chip-component';
import { SectionTitleComponent } from '../../molecules/section-title-component/section-title-component';
import { SKILL_GROUPS } from './skills-component.data';

@Component({
  selector: 'app-skills-component',
  imports: [
    Reveal,
    TranslatePipe,
    ChipComponent,
    SectionTitleComponent,
    LucideCode,
    LucideWrench,
    LucideLayers,
  ],
  templateUrl: './skills-component.html',
  styleUrl: './skills-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  protected readonly groups = SKILL_GROUPS;
}
