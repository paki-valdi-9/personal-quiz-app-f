import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MockService } from 'ng-mocks';
import { QuestionnaireViewComponent } from './questionnaire-view.component';
import { getQuizResultMessage } from '../store/utils';
import { Answer } from '../store/models';

import {
  nextQuestion,
  previousQuestion,
  resetQuiz,
  setAnswer,
} from '../store/actions';
import { RESULT_VIEW_MESSAGE } from '@personal-quiz-app-f/app/types/constants';

jest.mock('../store/utils', () => ({
  getQuizResultMessage: jest.fn(),
}));

describe('QuestionnaireViewComponent', () => {
  let store: Store;
  let router: Router;
  let component: QuestionnaireViewComponent;

  beforeEach(() => {
    store = MockService(Store);
    router = MockService(Router);
    component = new QuestionnaireViewComponent(store, router);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('#onQuestionnaireBackClick', () => {
    it('should navigate to previous question on back button click', () => {
      const dispatchSpy = jest.spyOn(store, 'dispatch');
      component.onQuestionnaireBackClick();
      expect(dispatchSpy).toHaveBeenCalledWith(previousQuestion());
    });
  });

  describe('#onQuestionnaireForwardClick', () => {
    it('should navigate to next question on back button click', () => {
      const dispatchSpy = jest.spyOn(store, 'dispatch');
      component.onQuestionnaireForwardClick();
      expect(dispatchSpy).toHaveBeenCalledWith(nextQuestion());
    });
  });

  describe('#handleAnswer', () => {
    it('should dispatch setAnswer with new selectedAnswer', () => {
      const dispatchSpy = jest.spyOn(store, 'dispatch');
      const answer: Answer = { icon: '', text: '', isCorrect: false };
      const newSelectedAnswer: Answer = {
        icon: 'check',
        text: 'hello',
        isCorrect: true,
      };

      component.currentQuestionIndex = 0;
      component.selectedAnswers = [answer];
      component.handleAnswer(newSelectedAnswer);

      expect(dispatchSpy).toHaveBeenCalledWith(
        setAnswer({ questionIndex: 0, answer: newSelectedAnswer })
      );
    });

    it('should dispatch setAnswer with null as answer', () => {
      const dispatchSpy = jest.spyOn(store, 'dispatch');
      const answer: Answer = { icon: '', text: '', isCorrect: false };

      component.currentQuestionIndex = 0;
      component.selectedAnswers = [answer];
      component.handleAnswer(answer);

      expect(dispatchSpy).toHaveBeenCalledWith(
        setAnswer({ questionIndex: 0, answer: null })
      );
    });
  });

  describe('#getQuizResultMessage', () => {
    it('should return string from getQuizResultMessage', () => {
      const mockMessage = RESULT_VIEW_MESSAGE.message100to80;
      (getQuizResultMessage as jest.Mock).mockReturnValue(mockMessage);
      component.selectedAnswers = [
        { isCorrect: true, text: 'Answer 1', icon: '' },
      ];
      const result = component.getQuizResultMessage();

      expect(result).toBe(mockMessage);
    });
  });

  describe('#resetQuiz', () => {
    it('should restart the quiz from the beginning', () => {
      const dispatchSpy = jest.spyOn(store, 'dispatch');
      component.resetQuiz();
      expect(dispatchSpy).toHaveBeenCalledWith(resetQuiz());
    });
  });

  describe('#onBackClick', () => {
    it('should navigate you to meet-me page', () => {
      const dispatchSpy = jest.spyOn(store, 'dispatch');
      const navigateSpy = jest.spyOn(router, 'navigate');

      component.onBackClick();

      expect(dispatchSpy).toHaveBeenCalledWith(resetQuiz());
      expect(navigateSpy).toHaveBeenCalledWith(['/meet-me'], {
        replaceUrl: true,
        onSameUrlNavigation: 'reload',
      });
    });
  });
});
