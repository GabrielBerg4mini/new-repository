import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@/app/shared/organisms/header-component/header-component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayout {}
