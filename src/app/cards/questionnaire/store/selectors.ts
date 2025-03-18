// store/quiz/quiz.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuizState } from './models';
import { FEATURE_KEYS } from '@persona-quiz-app-f/app/constants/feature-keys';

export const selectQuizState = createFeatureSelector<QuizState>(
  FEATURE_KEYS.QUESTIONNAIRE
);

export const selectQuestions = createSelector(
  selectQuizState,
  (state) => state.questions
);

export const selectQuestionsLength = createSelector(
  selectQuestions,
  (questions) => questions.length
);

export const selectCurrentQuestionIndex = createSelector(
  selectQuizState,
  (state) => state.currentQuestionIndex
);

export const selectSelectedAnswers = createSelector(
  selectQuizState,
  (state) => state.selectedAnswers
);

export const selectProgress = createSelector(
  selectQuizState,
  (state) =>
    (state.selectedAnswers.filter((a) => a).length / state.questions.length) *
    100
);

export const selectIsQuizCompleted = createSelector(
  selectQuizState,
  (state) => state.completed
);
