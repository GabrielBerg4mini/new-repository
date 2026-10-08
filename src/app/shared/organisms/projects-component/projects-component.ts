import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideFolderGit2 } from '@lucide/angular';
import { Reveal } from '@/app/shared/directives/reveal/reveal';
import { TranslatePipe } from '@/app/shared/pipes/translate/translate';
import { ChipComponent } from '../../molecules/chip-component/chip-component';
import { SectionTitleComponent } from '../../molecules/section-title-component/section-title-component';
import { PROJECT_ITEMS } from './projects-component.data';

@Component({
  selector: 'app-projects-component',
  imports: [Reveal, TranslatePipe, ChipComponent, SectionTitleComponent, LucideFolderGit2],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly projects = PROJECT_ITEMS;
}
