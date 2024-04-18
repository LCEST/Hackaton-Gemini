import type { GeminiResponse } from "../types/endpointTypes";

export const localGeminiResponse = {
  "observations": [
    {
      "id": 1,
      "title": 'Starting Position',
      "timeStart": '00:00',
      "timeEnd": '00:05',
      "comment": 'The athlete starts in a good position, with his feet shoulder-width apart, his toes slightly pointed out, and his knees slightly bent. His back is straight, his head is up, and his eyes are looking forward.',
      "score": 10,
      "isPositive": true
    },
    {
      "id": 2,
      "title": 'The Dip',
      "timeStart": '00:05',
      "timeEnd": '00:10',
      "comment": 'The athlete begins to dip down by bending his hips and knees. He keeps his back straight and his head up.',
      "score": 10,
      "isPositive": true
    },
    {
      "id": 3,
      "title": 'The Drive',
      "timeStart": '00:10',
      "timeEnd": '00:15',
      "comment": 'The athlete drives up through his heels, extending his hips and knees. He keeps his back straight and his head up.',
      "score": 10,
      "isPositive": true
    },
    {
      "id": 4,
      "title": 'The Catch',
      "timeStart": '00:15',
      "timeEnd": '00:20',
      "comment": 'The athlete catches the bar in a good position, with his feet shoulder-width apart, his knees slightly bent, and his back straight. His head is up and his eyes are looking forward.',
      "score": 10,
      "isPositive": true
    },
    {
      "id": 5,
      "title": 'The Recovery',
      "timeStart": '00:20',
      "timeEnd": '00:25',
      "comment": 'The athlete recovers by standing up and walking away from the bar. He keeps his back straight and his head up.',
      "score": 10,
      isPositive: true
    }
  ],
  "advices": [
    { "id": 1, "advice": 'Keep your core engaged throughout the lift.' },
    {
      "id": 2,
      "advice": 'Drive through your heels when you come out of the dip.'
    },
    {
      "id": 3,
      "advice": 'Catch the bar in a stable position with your feet shoulder-width apart and your knees slightly bent.'
    },
    {
      "id": 4,
      "advice": 'Recover by standing up and walking away from the bar with your back straight and your head up.'
    }
  ],
  "recommended_exercises": [
    {
      "id": 1,
      "exercise": 'Back squat',
      "description": 'The back squat is a compound exercise that works the muscles of the legs, hips, and the back. It is a great exercise for building strength and muscle mass.'
    },
    {
      "id": 2,
      "exercise": 'Front squat',
      "description": 'The front squat is a variation of the back squat that works the muscles of the legs, hips, and the shoulders. It is a great exercise for building strength and muscle mass in the upper body.'
    },
    {
      "id": 3,
      "exercise": 'Overhead squat',
      "description": 'The overhead squat is a variation of the back squat that works the muscles of the legs, hips, and the shoulders. It is a great exercise for building strength and muscle mass in the upper body.'
    }
  ],
  "rating": {
    "score": 10,
    "description": 'Overall, the athlete performed the front squat correctly. He had good form and technique, and he was able to lift the weight safely and effectively.'
  }
} as GeminiResponse;

const hola = () => {
  console.log(localGeminiResponse);
}

hola();
