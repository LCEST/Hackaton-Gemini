export interface ICuePoint {
  time:   number;
  value:  ICuePointData[];
}

export interface ICuePointData {
  id: string;
  endTime: number;
  duration: number;
}
