export interface Answer {
  text: string;
  icon?: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}
