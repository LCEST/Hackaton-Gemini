import type { ICuePoint, ICuePointData } from "../types/cuePoint";
import type { IObservation } from "../types/endpointTypes";

let cuePoints = [] as ICuePoint[];

const addCuePoint = (cuePointTime: number, cuePointValue: ICuePointData) => {
  const cuePoint = cuePoints.find((cue) => cue.time === cuePointTime);

  if (cuePoint)
    cuePoint.value.push(cuePointValue);
  else
    cuePoints.push({time: cuePointTime, value: [cuePointValue]});
}

export function formatCuePoints(rawObservations: IObservation[]): ICuePoint[] {
  cuePoints = [];
  rawObservations.forEach(({ id, timeStart, timeEnd }) => {
    const [startMinute = 0, startSecond = 0] = timeStart.split(":") // "01:32" => ["01":"32"]
    const [endMinute = 0, endSecond = 0] = timeEnd.split(":") 

    const cuePointStart = +startSecond + (+startMinute*60); // Sum of 01:32 = 92 (in secs)
    const cuePointEnd = +endSecond + (+endMinute*60);

    const cuePointId = `observation-${id}`;
    const cuePointValue = {
      id: cuePointId,
      endTime: +endSecond + (+endMinute*60),
      duration: cuePointEnd - cuePointStart
    };

    addCuePoint(cuePointStart, cuePointValue);
  });

  return cuePoints;
}
