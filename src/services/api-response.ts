import type { GeminiResponse } from "../types/endpointTypes";

export const localGeminiResponse = {
    "observations": [
        {
            "id": 1,
            "title": "Bar Placement",
            "timeStart": "00:02",
            "timeEnd": "00:06",
            "comment": "The bar is positioned correctly across the front deltoids and fingertips are tucked under to secure it.",
            "score": 9,
            "isPositive": true
        },
        {
            "id": 2,
            "title": "Elbow Position",
            "timeStart": "00:06",
            "timeEnd": "00:10",
            "comment": "Elbows are held high and parallel to the ground throughout the movement.",
            "score": 8,
            "isPositive": true
        },
        {
            "id": 3,
            "title": "Back Angle",
            "timeStart": "00:06",
            "timeEnd": "00:12",
            "comment": "The back maintains a neutral and upright position throughout the squat.",
            "score": 7,
            "isPositive": true
        },
        {
            "id": 4,
            "title": "Depth",
            "timeStart": "00:08",
            "timeEnd": "00:12",
            "comment": "Squat depth is slightly above parallel. Aim to reach at least parallel for optimal engagement.",
            "score": 6,
            "isPositive": false
        },
        {
            "id": 5,
            "title": "Knee Tracking",
            "timeStart": "00:08",
            "timeEnd": "00:12",
            "comment": "Knees track over the toes, which can put stress on the knee joint. Focus on pushing the hips back and keeping the knees in line with the feet.",
            "score": 5,
            "isPositive": false
        }
    ],
    "advices": [
        {
            "id": 1,
            "advice": "Focus on achieving greater squat depth by pushing the hips back further and engaging the posterior chain muscles."
        },
        {
            "id": 2,
            "advice": "Maintain awareness of knee tracking and ensure they stay aligned with the feet during the squat."
        },
        {
            "id": 3,
            "advice": "Consider incorporating pause squats at the bottom of the movement to reinforce proper depth and stability."
        }
    ],
    "recommended_exercises": [
        {
            "id": 1,
            "exercise": "Goblet Squats",
            "description": "Hold a dumbbell or kettlebell close to the chest and perform squats to improve form and core engagement."
        },
        {
            "id": 2,
            "exercise": "Box Squats",
            "description": "Squat down to a box or bench to ensure consistent depth and proper hip hinge movement."
        },
        {
            "id": 3,
            "exercise": "Hip Mobility Drills",
            "description": "Perform exercises like hip flexor stretches and banded distractions to improve hip mobility and squat mechanics."
        }
    ],
    "rating": {
        "score": 7,
        "description": "The front squat technique demonstrates good bar placement, elbow position, and back angle. However, there are opportunities for improvement in squat depth and knee tracking. With focused practice and attention to the provided advice and recommended exercises, you can enhance your front squat performance and achieve better results."
    }
} as GeminiResponse;
