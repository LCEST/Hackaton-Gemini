import fs from "fs/promises";
import { VertexAI } from "@google-cloud/vertexai";
import dotenv from "dotenv";

dotenv.config();

// Configuration for Vertex/Gemini
const projectLocation: string = process.env.PROJECT_LOCATION!;
const projectId: string = process.env.PROJECT_ID!;
const model: string = process.env.MODEL!;

// Function to take a file and return a base64 string
async function getFileAsBase64(filePath: string): Promise<string> {
  const fileData = await fs.readFile(filePath);
  return fileData.toString("base64");
}

// Function to get the MIME type of a file required by Gemini
function getMimeType(filePath: string): string | null {
  const extensionToMimeType: { [key: string]: string } = {
    png: "image/png",
    jpeg: "image/jpeg",
    jpg: "image/jpeg",
    webp: "image/webp",
    heic: "image/heic",
    heif: "image/heif",
    mov: "video/mov",
    mpeg: "video/mpeg",
    mp4: "video/mp4",
    mpg: "video/mpg",
    avi: "video/avi",
    wmv: "video/wmv",
    mpegps: "video/mpegps",
    flv: "video/flv",
  };

  const extension = filePath.split(".").pop()!.toLowerCase();
  return extensionToMimeType[extension] || null;
}

// Function to call the Gemini API
async function callGeminiAPI(
  inputFilePath: string,
): Promise<string> {





  // Initialize Vertex with your Cloud project and location
  const vertexAI = new VertexAI({
    project: projectId,
    location: projectLocation,
  });

  // Instantiate the model
  const generativeVisionModel = vertexAI.preview.getGenerativeModel({
    model,
  });

  // Construct the request with the user prompt
  const textPart = {
    text: `Act as a top global coach in the sport of weightlifting. Provide observations and advice, and recommend exercises to improve the front squat exercise. Also, provide an overall rating of the exercise. Present your comments in the following format (video start time, video end time):Rules:
    You must be as precise as possible in evaluating the exercise and the exact times so that your clients continue to trust you and you do not go bankrupt due to your failures.
    You must respond in JSON format under this structure:
    {
        "observations": [
            {
                "id": "int",
                "title": "string",
                "timeStart": "time",
                "timeEnd": "time",
                "comment": "string",
                "score": "int 1-10",
                "isPositive": "bool"
            }
        ],
        "advices": [
            {
                "id": "int",
                "advice": "string"
            }
        ],
        "recommended_exercises": [
            {
                "id": "int",
                "exercise": "string",
                "description": "string"
            }
        ],
        "ratings": {
            "score": "int 1-10",
            "description": "string"
        }
    }`,
  };
  let requestPart: any[] = [textPart];

  // Gemini requires the file in base64 and with a mimetype
  const base64File = await getFileAsBase64(inputFilePath);
  const mimeType = getMimeType(inputFilePath);

  const filePart = {
    inlineData: {
      data: base64File,
      mimeType: mimeType,
    },
  };

  // Push the file information to requestPart
  requestPart.push(filePart);

  const request = {
    contents: [{ role: "user", parts: requestPart }],
  };

  // Create the response stream and process the API request
  let aggregatedResponse;
  try {
    const responseStream = await generativeVisionModel.generateContentStream(request);
    aggregatedResponse = await responseStream.response;
  } catch (error) {
    return `There was an error processing the API request: ${error}`;
  }
  // Eliminando los marcadores
  let cleanJsonString = aggregatedResponse.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
  
  // Parseando el JSON limpio
  let jsonObject = JSON.parse(cleanJsonString);

 
  return jsonObject;
}

export { callGeminiAPI };
