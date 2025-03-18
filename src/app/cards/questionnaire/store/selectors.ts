import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuizState } from './models';
import { FEATURE_KEYS } from '@persona-quiz-app-f/app/constants/feature-keys';
import { correctAnswersCount } from './utils';

export const selectQuizFeature = createFeatureSelector<QuizState>(
  FEATURE_KEYS.QUESTIONNAIRE
);

export const selectQuestions = createSelector(
  selectQuizFeature,
  (state) => state.questions
);

export const selectQuestionsLength = createSelector(
  selectQuestions,
  (questions) => questions.length
);

export const selectIsQuizResultView = createSelector(
  selectQuizFeature,
  (state) => state.isQuizResultView
);

export const selectCurrentQuestionIndex = createSelector(
  selectQuizFeature,
  (state) => state.currentQuestionIndex
);

export const selectSelectedAnswers = createSelector(
  selectQuizFeature,
  (state) => state.selectedAnswers
);

export const selectProgress = createSelector(
  selectSelectedAnswers,
  selectQuestions,
  (selectedAnswers, questions) =>
    (selectedAnswers.filter((a) => a).length / questions.length) * 100
);

export const selectIsQuizCompleted = createSelector(
  selectQuizFeature,
  (state) => state.completed
);

export const selectNumberOfCorrectAnswers = createSelector(
  selectSelectedAnswers,
  (selectedAnswers) => correctAnswersCount(selectedAnswers)
);
