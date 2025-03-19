import { quizReducer, initialState } from './reducer';
import { Answer, Question, QuizState } from './models';

import {
  completeQuiz,
  loadQuestionsSuccess,
  nextQuestion,
  previousQuestion,
  resetQuiz,
  setAnswer,
} from './actions';
import { questions } from '@personal-quiz-app-f/app/types/constants';

describe('quizReducer', () => {
  it('should return the initial state when an unknown action is passed', () => {
    const action = { type: 'UNKNOWN' } as any;
    const state = quizReducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  describe('#loadQuestionsSuccess', () => {
    it('should handle loadQuestionsSuccess action', () => {
      const questions: Question[] = [
        { id: 1, text: 'Question 1', answers: [] },
      ];
      const action = loadQuestionsSuccess({ questions });
      const state = quizReducer(initialState, action);
      expect(state.questions).toEqual(questions);
    });
  });
  describe('#setAnswer', () => {
    it('should handle setAnswer action', () => {
      const questionIndex = 0;
      const answer: Answer = { text: 'Answer 1', isCorrect: true, icon: '' };
      const action = setAnswer({ questionIndex, answer });
      const state = quizReducer(initialState, action);
      expect(state.selectedAnswers[questionIndex]).toEqual(answer);
    });
  });

  describe('#nextQuestion', () => {
    it('should handle nextQuestion action', () => {
      const action = nextQuestion();
      const state = quizReducer(initialState, action);
      expect(state.currentQuestionIndex).toBe(
        initialState.currentQuestionIndex + 1
      );
    });
  });

  describe('#previousQuestion', () => {
    it('should handle previousQuestion action', () => {
      const modifiedState: QuizState = {
        ...initialState,
        currentQuestionIndex: 1,
      };
      const action = previousQuestion();
      const state = quizReducer(modifiedState, action);
      expect(state.currentQuestionIndex).toBe(
        modifiedState.currentQuestionIndex - 1
      );
      expect(state.isQuizResultView).toBe(false);
    });
  });
  describe('#resetQuiz', () => {
    it('should handle resetQuiz action', () => {
      const modifiedState: QuizState = {
        ...initialState,
        questions: [{ id: 1, text: 'Question 1', answers: [] }],
        currentQuestionIndex: 2,
        selectedAnswers: [{ text: 'Answer 1', isCorrect: true, icon: '' }],
        completed: true,
        isQuizResultView: true,
      };
      const action = resetQuiz();
      const state = quizReducer(modifiedState, action);
      expect(state).toEqual({
        ...initialState,
        questions: modifiedState.questions,
      });
    });
  });

  describe('#completeQuiz', () => {
    it('should handle completeQuiz action', () => {
      const action = completeQuiz();
      const state = quizReducer(initialState, action);
      expect(state.completed).toBe(true);
      expect(state.isQuizResultView).toBe(true);
    });
  });
});
