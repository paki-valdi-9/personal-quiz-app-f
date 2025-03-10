import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreComponent {}
