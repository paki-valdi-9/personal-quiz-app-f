import { Component } from '@angular/core';
import { QuestionnaireViewComponent } from './view/questionnaire-view.component';

@Component({
  selector: 'quiz-questionnaire',
  template: '<quiz-app-questionnaire-view></quiz-app-questionnaire-view>',
  imports: [QuestionnaireViewComponent],
})
export class QuestionnaireComponent {}
