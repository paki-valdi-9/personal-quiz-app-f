import { Component, Input } from '@angular/core';
import { Question } from '../../store/models';

@Component({
  selector: 'quiz-app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() question!: Question;
}
