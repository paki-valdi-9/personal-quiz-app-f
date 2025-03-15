import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'quiz-app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  imports: [MatIconModule],
})
export class FeatureComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() icon: string;
}
