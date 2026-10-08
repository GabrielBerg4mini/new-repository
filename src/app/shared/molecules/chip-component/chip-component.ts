import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-chip-component',
  templateUrl: './chip-component.html',
  styleUrl: './chip-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipComponent {}
