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

export const RESULT_VIEW_MESSAGE = {
  message100to80:
    'Congrats! You met me! 🎉 You must be a true expert (or just really lucky). Either way, you nailed it!',
  message79to60:
    "Almost there! You're getting to know me! 😄 A few more tries, and you'll be a pro. Keep going!",
  message59to40:
    "Hmm... You're halfway to knowing me! 🤔 Not bad, but there's still some mystery left. Want to try again?",
  message39to0:
    "Oops! Did we just meet? 😅 Don't worry, first impressions can be tricky. Let's try again and see if you can crack the code!",
};

export const questions: Question[] = [
  {
    id: 1,
    text: 'What word would you use to define me?',
    answers: [
      {
        text: 'Lazy',
        isCorrect: false,
        icon: 'question_mark',
      },
      {
        text: 'Interesting',
        isCorrect: true,
        icon: 'question_mark',
      },
      {
        text: 'Meh',
        isCorrect: false,
        icon: 'question_mark',
      },
    ],
  },
  {
    id: 2,
    text: 'What is my favourite programming field?',
    answers: [
      { text: 'Web Development', isCorrect: true, icon: 'question_mark' },
      { text: 'Mobile Development', isCorrect: false, icon: 'question_mark' },
      {
        text: 'Both',
        isCorrect: false,
        icon: 'question_mark',
      },
    ],
  },
  {
    id: 3,
    text: 'What do you think is my favourite TV series?',
    answers: [
      { text: 'The Office US', isCorrect: true, icon: 'question_mark' },
      { text: 'Friends', isCorrect: false, icon: 'question_mark' },
      {
        text: 'The Big Band Theory',
        isCorrect: false,
        icon: 'question_mark',
      },
    ],
  },
  {
    id: 4,
    text: 'What is my favourite sitcom?',
    answers: [
      { text: 'The Big Band Theory', isCorrect: false, icon: 'question_mark' },
      { text: 'Friends', isCorrect: true, icon: 'question_mark' },
      {
        text: 'How I Met Your Mother',
        isCorrect: false,
        icon: 'question_mark',
      },
    ],
  },
  {
    id: 5,
    text: 'Where do I live?',
    answers: [
      {
        text: 'Bratislava/Slovakia',
        isCorrect: true,
        icon: 'question_mark',
      },
      {
        text: 'Lisbon/Portugal',
        isCorrect: false,
        icon: 'question_mark',
      },
      {
        text: 'San Marino/Italy',
        isCorrect: false,
        icon: 'question_mark',
      },
    ],
  },
  {
    id: 6,
    text: 'Which country do I originate from?',
    answers: [
      { text: 'Slovakia', isCorrect: false, icon: 'question_mark' },
      { text: 'Serbia', isCorrect: true, icon: 'question_mark' },
      {
        text: 'Croatia',
        isCorrect: false,
        icon: 'question_mark',
      },
    ],
  },
  {
    id: 7,
    text: 'What is my nationality?',
    answers: [
      { text: 'Slovak', isCorrect: true, icon: 'question_mark' },
      { text: 'Serbian', isCorrect: false, icon: 'question_mark' },
      {
        text: 'Croatian',
        isCorrect: false,
        icon: 'question_mark',
      },
    ],
  },
  {
    id: 8,
    text: 'What is my off-work favourite activity?',
    answers: [
      { text: 'Bicycle', isCorrect: false, icon: 'question_mark' },
      { text: 'Hiking', isCorrect: false, icon: 'question_mark' },
      {
        text: 'Gym',
        isCorrect: true,
        icon: 'question_mark',
      },
    ],
  },
  {
    id: 9,
    text: 'Do I like playing chess?',
    answers: [
      { text: 'Yes', isCorrect: true, icon: 'question_mark' },
      { text: 'Hell No!', isCorrect: false, icon: 'question_mark' },
    ],
  },
  {
    id: 10,
    text: 'What is my most nearby career goal?',
    answers: [
      {
        text: 'Stay on the same level',
        isCorrect: false,
        icon: 'question_mark',
      },
      {
        text: `I don't know. I'm confused`,
        isCorrect: false,
        icon: 'question_mark',
      },
      {
        text: 'To master web development',
        isCorrect: true,
        icon: 'question_mark',
      },
    ],
  },
];
