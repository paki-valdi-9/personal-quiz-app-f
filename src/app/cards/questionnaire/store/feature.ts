import { createFeature } from '@ngrx/store';
import { FEATURE_KEYS } from '@persona-quiz-app-f/app/constants/feature-keys';
import { quizReducer } from './reducer';

export const QuestionnaireFeature = createFeature({
  name: FEATURE_KEYS.QUESTIONNAIRE,
  reducer: quizReducer,
});
