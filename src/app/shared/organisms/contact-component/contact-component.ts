import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideArrowUpRight, LucideMapPin } from '@lucide/angular';
import { Reveal } from '@/app/shared/directives/reveal/reveal';
import { TranslatePipe } from '@/app/shared/pipes/translate/translate';
import { SectionTitleComponent } from '../../molecules/section-title-component/section-title-component';
import { CONTACT_LINKS } from './contact-component.data';

@Component({
  selector: 'app-contact-component',
  imports: [Reveal, TranslatePipe, SectionTitleComponent, LucideArrowUpRight, LucideMapPin],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  protected readonly links = CONTACT_LINKS;
  protected readonly year = new Date().getFullYear();
}
