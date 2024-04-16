export interface IMuxVideoUploadResponse {
    data: Data;
}

export interface Data {
    url:                string;
    timeout:            number;
    status:             string;
    new_asset_settings: NewAssetSettings;
    id:                 string;
    cors_origin:        string;
}

export interface NewAssetSettings {
    playback_policies: string[];
    encoding_tier:     string;
    mp4_support:       string;
}
