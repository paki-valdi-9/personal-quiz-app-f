// store/quiz/quiz.effects.ts
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
import { Question } from './models';
import { Store } from '@ngrx/store';
import {
  selectCurrentQuestionIndex,
  selectQuestions,
  selectQuestionsLength,
} from './selectors';
import { of } from 'rxjs';

@Injectable()
export class QuizEffects {
  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadQuestions),
      map(() => {
        const questions: Question[] = [
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
