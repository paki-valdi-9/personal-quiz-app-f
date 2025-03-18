import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { QuestionComponent } from '../components/question/question.component';
import { AnswerComponent } from '../components/answer/answer.component';
import { Answer, Question } from '../store/models';
import { Store } from '@ngrx/store';
import {
  nextQuestion,
  previousQuestion,
  resetQuiz,
  setAnswer,
} from '../store/actions';
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
    MatProgressBarModule,
  ],
})
export class QuestionnaireViewComponent {
  @Input() questions: Question[];
  @Input() currentQuestionIndex: number;
  @Input() selectedAnswers: Answer[];
  @Input() progress: number;
  @Input() isQuizCompleted: boolean;
  @Input() isQuizResultView: boolean;

  constructor(private store: Store, private router: Router) {}

  onQuestionnaireBackClick() {
    this.store.dispatch(previousQuestion());
  }

  onQuestionnaireForwardClick() {
    this.store.dispatch(nextQuestion());
  }

  handleAnswer(answer: Answer) {
    this.store.dispatch(
      setAnswer({
        questionIndex: this.currentQuestionIndex,
        answer:
          this.selectedAnswers[this.currentQuestionIndex] !== answer
            ? answer
            : null,
      })
    );
  }

  resetQuiz() {
    this.store.dispatch(resetQuiz());
  }

  public onBackClick = () => {
    this.store.dispatch(resetQuiz());
    this.router.navigate(['/meet-me'], {
      replaceUrl: true,
      onSameUrlNavigation: 'reload',
    });
  };
}
