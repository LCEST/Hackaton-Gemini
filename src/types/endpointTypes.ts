export interface IObservation {
  id: number;
  title: string;
  timeStart: string;
  timeEnd: string;
  comment: string;
  score: number;
  isPositive: boolean;
};

export interface IAdvice {
  id: number,
  advice: string;
}

export interface IRecommendedExercise {
  id: number,
  exercise: string;
  description: string;
}

export interface IRating {
  score: number;
  description: string;
}

export interface GeminiResponse {
  observations: IObservation[],
  advices: IAdvice[],
  recommended_exercises: IRecommendedExercise[],
  rating: IRating
}
