import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from '../../store/models';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'quiz-app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
  imports: [MatButtonModule, MatIconModule],
})
export class AnswerComponent {
  @Input() answer!: Answer;
  @Input() isSelected = false;
  @Input() isCorrect = false;
  @Input() isCompleted: boolean;

  @Output() answerSelected = new EventEmitter<boolean>();

  onAnswerClick() {
    this.answerSelected.emit(true);
  }
}
