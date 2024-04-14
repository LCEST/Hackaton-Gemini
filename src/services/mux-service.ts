import { Buffer } from 'buffer';
import { MUX_API_URL } from "../app/constants";
import type { APIMuxPostResponse } from "../types/muxApi";

const { MUX_TOKEN_ID, MUX_TOKEN_SECRET } = import.meta.env;

const usPwd = `${MUX_TOKEN_ID}:${MUX_TOKEN_SECRET}`;

export async function postAsset(): Promise<APIMuxPostResponse> {
  const res = await fetch(MUX_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(usPwd).toString('base64')}`
    },
    body: JSON.stringify({
      input: [
        {
          url: "https://muxed.s3.amazonaws.com/leds.mp4" 
          // url: "https://drive.google.com/file/d/1HRAF_eOZgTl88lOcaqj99rTouC2Xq6Hq/view?usp=drive_link" 
        }
      ],
      playback_policy: [
        "public"
      ],
      encoding_tier: "baseline"
    })
  });

  if (!res.ok) {
    const errorMsg = `Failed to upload mux video: ${res.status} - ${res.statusText}`;
    throw new Error(errorMsg);
  }

  return await res.json() as APIMuxPostResponse;
}
