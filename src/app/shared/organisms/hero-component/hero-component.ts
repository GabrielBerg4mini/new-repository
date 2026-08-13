import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@/app/shared/pipes/translate/translate';

@Component({
  selector: 'app-hero-component',
  imports: [RouterLink, NgOptimizedImage, TranslatePipe],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
