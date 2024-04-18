import { Buffer } from 'buffer';
import { MUX_API_VIDEO_UPLOADS,MUX_API_VIDEO_ASSETS } from "../app/constants";
import type { IMuxVideoUploadGetResponse, IMuxVideoUploadResponse, IMuxVideoAssetsGetResponse } from "../types/muxApi";

const { MUX_TOKEN_ID, MUX_TOKEN_SECRET } = import.meta.env;
const usPwd = `${MUX_TOKEN_ID}:${MUX_TOKEN_SECRET}`;

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Basic ${Buffer.from(usPwd).toString('base64')}`,
}

/**
 * POST a video upload and get it's data
 * @returns Post upload response object from MUX api
 */
export async function postUpload(): Promise<IMuxVideoUploadResponse> {
  const res = await fetch(MUX_API_VIDEO_UPLOADS, {
    method: 'POST',
    headers,
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

/**
 * Get data from a specific asset
 * @param uploadId - upload id
 * @returns Get upload data from MUX api
 */
export async function getUpload(uploadId: string): Promise<IMuxVideoUploadGetResponse> {
  const res = await fetch(`${MUX_API_VIDEO_UPLOADS}/${uploadId}`, {
    method: 'GET',
    headers,
  });
  if (!res.ok) {
    const errorMsg = `Failed to get mux asset: ${res.status} - ${res.statusText}`;
    throw new Error(errorMsg);
  }

  return await res.json() as IMuxVideoUploadGetResponse;
}

export async function getAsset(assetId: string): Promise<IMuxVideoAssetsGetResponse> {
  const res = await fetch(`${MUX_API_VIDEO_ASSETS}/${assetId}`, {
    method: 'GET',
    headers,
  });
  if (!res.ok) {
    const errorMsg = `Failed to get mux asset: ${res.status} - ${res.statusText}`;
    throw new Error(errorMsg);
  }

  return await res.json() as IMuxVideoAssetsGetResponse;
}
