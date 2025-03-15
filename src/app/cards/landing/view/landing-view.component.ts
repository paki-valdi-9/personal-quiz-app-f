import {
  FEATURES_CONTENT,
  LANDING_PAGE_CONSTANTS,
} from './../../../types/constants';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FeatureComponent } from '../components/feature/feature.component';

@Component({
  selector: 'quiz-app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.scss'],
  imports: [MatCardModule, MatButtonModule, MatIconModule, FeatureComponent],
})
export class LandingViewComponent {
  LANDING_PAGE_CONSTANTS = LANDING_PAGE_CONSTANTS;
  FEATURES_CONTENT = FEATURES_CONTENT;
}
