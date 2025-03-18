import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map } from 'rxjs/operators';
import { concatLatestFrom } from '@ngrx/operators';
import {
  completeQuiz,
  loadQuestions,
  loadQuestionsSuccess,
  nextQuestion,
} from './actions';
import { Store } from '@ngrx/store';
import { selectCurrentQuestionIndex, selectQuestions } from './selectors';
import { questions } from '@persona-quiz-app-f/app/types/constants';

@Injectable()
export class QuizEffects {
  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadQuestions),
      map(() => {
        return loadQuestionsSuccess({ questions });
      })
    )
  );

  completeQuiz$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nextQuestion),
      concatLatestFrom(() => [
        this.store.select(selectQuestions),
        this.store.select(selectCurrentQuestionIndex),
      ]),
      filter(([, questions, currentIndex]) => {
        const nextIndex = currentIndex + 1;
        return nextIndex > questions.length;
      }),
      map(() => completeQuiz())
    )
  );

  constructor(private readonly store: Store, private actions$: Actions) {}
}
