import {
  questions,
  RESULT_VIEW_MESSAGE,
} from '@personal-quiz-app-f/app/types/constants';
import { Answer } from './models';

export const correctAnswersCount = (selectedAnswers: Answer[]): number => {
  return selectedAnswers.filter((answer) => answer.isCorrect).length;
};

export const percentageOfCrrectAnswers = (selectedAnswers: Answer[]): number =>
  Math.round((correctAnswersCount(selectedAnswers) / questions.length) * 100);

export const getQuizResultMessage = (selectedAnswers: Answer[]): string => {
  const percentage = percentageOfCrrectAnswers(selectedAnswers);

  if (percentage >= 80) {
    return RESULT_VIEW_MESSAGE.message100to80;
  } else if (percentage >= 60) {
    return RESULT_VIEW_MESSAGE.message79to60;
  } else if (percentage >= 40) {
    return RESULT_VIEW_MESSAGE.message59to40;
  } else {
    return RESULT_VIEW_MESSAGE.message39to0;
  }
};
