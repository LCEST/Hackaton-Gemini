export interface IMuxVideoUploadResponse {
    data: UploadUrlData;
}

export interface UploadUrlData {
    url:                string;
    timeout:            number;
    status:             string;
    new_asset_settings: NewAssetSettings;
    id:                 string;
    cors_origin:        string;
}

export interface IMuxVideoUploadGetResponse {
    data: UploadData;
}

export interface UploadData {
    timeout:            number;
    status:             string;
    new_asset_settings: NewAssetSettings;
    id:                 string;
    asset_id:           string;
}

export interface NewAssetSettings {
    playback_policies: string[];
    encoding_tier:     string;
    mp4_support:       string;
}

export interface IMuxVideoAssetsGetResponse {
    data: AssetsData;
}

export interface AssetsData {
    tracks:                Track[];
    status:                string;
    resolution_tier:       string;
    playback_ids:          PlaybackID[];
    passthrough:           string;
    mp4_support:           string;
    max_stored_resolution: string;
    max_stored_frame_rate: number;
    max_resolution_tier:   string;
    master_access:         string;
    id:                    string;
    encoding_tier:         string;
    duration:              number;
    created_at:            string;
    aspect_ratio:          string;
}

export interface PlaybackID {
    policy: string;
    id:     string;
}

export interface Track {
    type:            string;
    max_width?:      number;
    max_height?:     number;
    max_frame_rate?: number;
    id:              string;
    duration:        number;
    max_channels?:   number;
}
