import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '@/app/shared/organisms/hero-component/hero-component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
