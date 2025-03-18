// store/quiz/quiz.actions.ts
import { createAction, props } from '@ngrx/store';
import { Answer, Question } from './models';

export const ACTION_TYPES = {
  LOAD_QUESTIONS: '[Quiz] Load Questions',
  LOAD_QUESTIONS_SUCCESS: '[Quiz] Load Questions Success',
  LOAD_QUESTIONS_FAILURE: '[Quiz] Load Questions Failure',
  NEXT_QUESTION: '[Quiz] Next Question',
  PREVIOUS_QUESTION: '[Quiz] Previous Question',
  RESET_QUIZ: '[Quiz] Reset Quiz',
  COMPLETE_QUIZ: '[Quiz] Complete Quiz',
  SET_ANSWER: '[Quiz] Set Answer',
};

export const loadQuestions = createAction(ACTION_TYPES.LOAD_QUESTIONS);
export const loadQuestionsSuccess = createAction(
  ACTION_TYPES.LOAD_QUESTIONS_SUCCESS,
  props<{ questions: Question[] }>()
);
export const loadQuestionsFailure = createAction(
  ACTION_TYPES.LOAD_QUESTIONS_FAILURE
);
export const setAnswer = createAction(
  ACTION_TYPES.SET_ANSWER,
  props<{ questionIndex: number; answer: Answer }>()
);
export const nextQuestion = createAction(ACTION_TYPES.NEXT_QUESTION);
export const previousQuestion = createAction(ACTION_TYPES.PREVIOUS_QUESTION);
export const resetQuiz = createAction(ACTION_TYPES.RESET_QUIZ);
export const completeQuiz = createAction(ACTION_TYPES.COMPLETE_QUIZ);
