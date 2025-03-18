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
import { selectCurrentQuestionIndex, selectQuestions } from './selectors';

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
              {
                text: 'A JavaScript framework',
                isCorrect: false,
                icon: 'question_mark',
              },
              {
                text: 'A TypeScript-based framework',
                isCorrect: true,
                icon: 'question_mark',
              },
              {
                text: 'A database system',
                isCorrect: false,
                icon: 'question_mark',
              },
            ],
          },
          {
            id: 2,
            text: 'What is Pako?',
            answers: [
              { text: 'Me', isCorrect: true, icon: 'question_mark' },
              { text: 'Not me', isCorrect: false, icon: 'question_mark' },
              {
                text: 'Gurantee its notme',
                isCorrect: false,
                icon: 'question_mark',
              },
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
