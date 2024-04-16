import { Buffer } from 'buffer';
import { MUX_API_VIDEO_UPLOADS } from "../app/constants";
import type { IMuxVideoUploadResponse } from "../types/muxApi";

export async function postUpload(tokenId: string, tokenSecret: string): Promise<IMuxVideoUploadResponse> {
  const usPwd = `${tokenId}:${tokenSecret}`;
  const res = await fetch(MUX_API_VIDEO_UPLOADS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(usPwd).toString('base64')}`
    },
    body: JSON.stringify({
      new_asset_settings: {
        playback_policy: ["public"]
      },
      cors_origin: "*",
      encoding_tier: "baseline",
    }),
  });
  if (!res.ok) {
    const errorMsg = `Failed to post mux upload video: ${res.status} - ${res.statusText}`;
    throw new Error(errorMsg);
  }

  return await res.json() as IMuxVideoUploadResponse;
}
