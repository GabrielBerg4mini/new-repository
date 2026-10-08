import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '@/app/shared/directives/reveal/reveal';
import { TranslatePipe } from '@/app/shared/pipes/translate/translate';
import { PhotoMeComponent } from '../../molecules/photo-me-component/photo-me-component';

@Component({
  selector: 'app-hero-component',
  imports: [Reveal, RouterLink, TranslatePipe, PhotoMeComponent],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
