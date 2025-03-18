import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireViewComponent } from './view/questionnaire-view.component';
import { Store } from '@ngrx/store';
import {
  selectCurrentQuestionIndex,
  selectIsQuizCompleted,
  selectIsQuizResultView,
  selectProgress,
  selectQuestions,
  selectSelectedAnswers,
} from './store/selectors';
import { loadQuestions } from './store/actions';

@Component({
  selector: 'quiz-questionnaire',
  template: `<quiz-app-questionnaire-view
    [questions]="questions$ | async"
    [currentQuestionIndex]="currentQuestionIndex$ | async"
    [selectedAnswers]="selectedAnswers$ | async"
    [progress]="progress$ | async"
    [isQuizCompleted]="isQuizCompleted$ | async"
    [isQuizResultView]="isQuizResultView$ | async"
  >
  </quiz-app-questionnaire-view>`,
  imports: [CommonModule, QuestionnaireViewComponent],
})
export class QuestionnaireComponent implements OnInit {
  protected questions$ = this.store.select(selectQuestions);
  protected currentQuestionIndex$ = this.store.select(
    selectCurrentQuestionIndex
  );
  protected selectedAnswers$ = this.store.select(selectSelectedAnswers);
  protected progress$ = this.store.select(selectProgress);
  protected isQuizCompleted$ = this.store.select(selectIsQuizCompleted);
  protected isQuizResultView$ = this.store.select(selectIsQuizResultView);

  ngOnInit(): void {
    this.store.dispatch(loadQuestions());
  }

  constructor(private readonly store: Store) {}
}
