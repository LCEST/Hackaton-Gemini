import type { APIRoute } from "astro";
import { callGeminiAPI } from "../../services/generativeVisionService";
import type { GeminiResponse } from "../../types/endpointTypes";

let geminiAnalysis = {};

export const POST: APIRoute = async ({ request }) => {
  // Get the file form the FormData
  const formData = await request.formData();
  const file = formData.get('file') as File;

  // Convert file to base64
  const fileBuffer = await file.arrayBuffer()
  const b64 = Buffer.from(fileBuffer).toString('base64');

  // Get Gemini response and stringify it
  const geminiRes = await callGeminiAPI(b64, file.type);
  const jsonRes = JSON.stringify(geminiRes);
  geminiAnalysis = geminiRes as GeminiResponse;

  return new Response(jsonRes);
}

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(geminiAnalysis));
}
