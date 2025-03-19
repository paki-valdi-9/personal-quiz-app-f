import { RESULT_VIEW_MESSAGE } from '@personal-quiz-app-f/app/types/constants';
import { Answer } from './models';
import {
  correctAnswersCount,
  getQuizResultMessage,
  percentageOfCrrectAnswers,
} from './utils';

describe('Questionnaire', () => {
  const selectedAnswers: Answer[] = [
    {
      text: '',
      icon: '',
      isCorrect: true,
    },
    {
      text: '',
      icon: '',
      isCorrect: false,
    },
    {
      text: '',
      icon: '',
      isCorrect: true,
    },
  ];
  describe('#percentageOfCorrectAnswers', () => {
    it('should return percentage value of correct answers', () => {
      expect(percentageOfCrrectAnswers(selectedAnswers)).toEqual(20);
    });

    it('should return percentage value 0 when no selected answers', () => {
      expect(percentageOfCrrectAnswers([])).toEqual(0);
    });
  });

  describe('#correctAnswersCount', () => {
    it('should return number of correct selected answers', () => {
      expect(correctAnswersCount(selectedAnswers)).toEqual(2);
    });

    it('should return 0 when no correct answers are selected', () => {
      expect(correctAnswersCount([])).toEqual(0);
    });
  });

  describe('#getQuizResultMessage', () => {
    const generateCorrectAnswers = (count: number): Answer[] =>
      Array.from({ length: count }, () => ({
        text: '',
        icon: '',
        isCorrect: true,
      }));
    it('should return 100to80 message', () => {
      expect(getQuizResultMessage(generateCorrectAnswers(8))).toEqual(
        RESULT_VIEW_MESSAGE.message100to80
      );
    });

    it('should return 79to60 message', () => {
      expect(getQuizResultMessage(generateCorrectAnswers(6))).toEqual(
        RESULT_VIEW_MESSAGE.message79to60
      );
    });

    it('should return 59to40 message', () => {
      expect(getQuizResultMessage(generateCorrectAnswers(4))).toEqual(
        RESULT_VIEW_MESSAGE.message59to40
      );
    });

    it('should return 39to0 message', () => {
      expect(getQuizResultMessage(generateCorrectAnswers(3))).toEqual(
        RESULT_VIEW_MESSAGE.message39to0
      );
    });
  });
});
