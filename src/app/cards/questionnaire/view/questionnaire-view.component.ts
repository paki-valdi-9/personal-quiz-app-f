import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { QuestionComponent } from '../components/question/question.component';
import { AnswerComponent } from '../components/answer/answer.component';
import { Answer, Question } from '../store/models';
@Component({
  selector: 'quiz-app-questionnaire-view',
  templateUrl: './questionnaire-view.component.html',
  styleUrls: ['./questionnaire-view.component.scss'],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    QuestionComponent,
    AnswerComponent,
  ],
})
export class QuestionnaireViewComponent {
  currentQuestionIndex = 0;
  isCurrentQuestionAnswerSelected = false;
  selectedAnswers: Answer[] = [];

  public onBackClick = () => {
    this.router.navigate(['/meet-me'], {
      replaceUrl: true,
      onSameUrlNavigation: 'reload',
    });
  };

  public onQuestionnaireBackClick = () => {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.isCurrentQuestionAnswerSelected = false;
    }
  };

  public onQuestionnaireForwardClick = () => {
    if (this.isCurrentQuestionAnswerSelected) {
      this.currentQuestionIndex++;
      this.isCurrentQuestionAnswerSelected = false;
    }
  };

  public questions: Question[] = [
    // TODO: refactor this using prod questions
    {
      id: 1,
      text: 'What is Angular?',
      answers: [
        { text: 'A JavaScript framework', isCorrect: false },
        { text: 'A TypeScript-based framework', isCorrect: true },
        { text: 'A database system', isCorrect: false },
      ],
    },
    {
      id: 2,
      text: 'What is Pako?',
      answers: [
        { text: 'Me', isCorrect: true },
        { text: 'Not me', isCorrect: false },
        { text: 'Gurantee its notme', isCorrect: false },
      ],
    },
  ];

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  handleAnswer(isSelected: boolean, answer: Answer) {
    if (this.selectedAnswers[this.currentQuestionIndex] === answer) {
      this.selectedAnswers[this.currentQuestionIndex] = null;
      return;
    }
    this.selectedAnswers[this.currentQuestionIndex] = answer;
    this.isCurrentQuestionAnswerSelected = isSelected;

    answer.icon = answer.isCorrect ? 'check' : 'close';
  }

  constructor(private readonly router: Router) {}
}
