import { Question } from '../cards/questionnaire/store/models';

export const LANDING_PAGE_CONSTANTS = {
  gameName: 'Personal Quiz App',
  title: `Welcome to the Personal Quiz App`,
  subtitle: 'Please click on the button to start the quiz',
  description: `This is a simple quiz app that will help you learn more about myself. 
  The quiz consists of a series of questions that you will need to answer. Once you have answered all the questions, 
  you will receive a personalized summarized result. Please click on the button Meet Me! to start the quiz.`,
  featuresTitle: 'Our Features and Vision',
};

export const FEATURES_CONTENT = {
  feature1: {
    title: 'Technical Showcase',
    description: 'Should demonstrates some of my Angular skills.',
    icon: 'terminal',
  },
  feature2: {
    title: 'Personal Touch',
    description:
      'The quiz adds a unique, interactive element that helps users to better get to know me.',
    icon: 'face',
  },
  feature3: {
    title: 'Future Vision',
    description:
      'Should show my process of thinking implementing application and where do I see it in the future.',
    icon: 'lightbulb',
  },
};

export const questions: Question[] = [
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
  {
    id: 3,
    text: 'What is Pakoo?',
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
