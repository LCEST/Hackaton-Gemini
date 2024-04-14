export interface APIMuxPostResponse {
    data: Data;
}

export interface Data {
    status:        string;
    playback_ids:  PlaybackID[];
    encoding_tier: string;
    mp4_support:   string;
    master_access: string;
    id:            string;
    created_at:    string;
}

export interface PlaybackID {
    policy: string;
    id:     string;
}
