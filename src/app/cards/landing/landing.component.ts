import { Component } from '@angular/core';
import { LandingViewComponent } from './view/landing-view.component';

@Component({
  standalone: true,
  selector: 'quiz-app-landing',
  template: '<quiz-app-landing-view></quiz-app-landing-view>',
  imports: [LandingViewComponent],
})
export class LandingComponent {}
