import { questions } from '@persona-quiz-app-f/app/types/constants';
import { Answer } from './models';

export const correctAnswersCount = (selectedAnswers: Answer[]): number => {
  return selectedAnswers.filter((answer) => answer.isCorrect).length;
};

export const percentageOfCrrectAnswers = (selectedAnswers: Answer[]): number =>
  Math.round((correctAnswersCount(selectedAnswers) / questions.length) * 100);

export const getQuizResultMessage = (selectedAnswers: Answer[]): string => {
  const percentage = percentageOfCrrectAnswers(selectedAnswers);

  if (percentage >= 80) {
    return 'Congrats! You met me! 🎉 You must be a true expert (or just really lucky). Either way, you nailed it!';
  } else if (percentage >= 60) {
    return "Almost there! You're getting to know me! 😄 A few more tries, and you'll be a pro. Keep going!";
  } else if (percentage >= 40) {
    return "Hmm... You're halfway to knowing me! 🤔 Not bad, but there's still some mystery left. Want to try again?";
  } else {
    return "Oops! Did we just meet? 😅 Don't worry, first impressions can be tricky. Let's try again and see if you can crack the code!";
  }
};
