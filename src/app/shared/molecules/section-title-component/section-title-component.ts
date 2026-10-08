import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Reveal } from '@/app/shared/directives/reveal/reveal';

@Component({
  imports: [Reveal],
  selector: 'app-section-title-component',
  templateUrl: './section-title-component.html',
  styleUrl: './section-title-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTitleComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
}
