// store/quiz/quiz.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { QuizState } from './models';
import {
  completeQuiz,
  loadQuestionsSuccess,
  nextQuestion,
  previousQuestion,
  resetQuiz,
  setAnswer,
} from './actions';

export const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  selectedAnswers: [],
  completed: false,
};

export const quizReducer = createReducer(
  initialState,
  on(loadQuestionsSuccess, (state, { questions }) => ({
    ...state,
    questions,
  })),
  on(setAnswer, (state, { questionIndex, answer }) => {
    const selectedAnswers = [...state.selectedAnswers];
    selectedAnswers[questionIndex] = answer;
    return { ...state, selectedAnswers };
  }),
  on(nextQuestion, (state) => ({
    ...state,
    currentQuestionIndex: state.currentQuestionIndex + 1,
  })),
  on(previousQuestion, (state) => ({
    ...state,
    currentQuestionIndex: state.currentQuestionIndex - 1,
  })),
  on(resetQuiz, (state) => ({
    ...initialState,
    questions: state.questions,
  })),
  on(completeQuiz, (state) => ({
    ...state,
    completed: true,
  }))
);
