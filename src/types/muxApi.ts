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
