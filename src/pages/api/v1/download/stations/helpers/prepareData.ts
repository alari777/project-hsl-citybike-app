import { StationType } from "@/pages/api/v1/download/stations/types/download.stations.types";

export function prepareData(stations: { data: string[][] }): StationType[] {
  const prepareArr: StationType[] = [];
  stations.data.map((station: string[]) => {
    if (!isNaN(Number(station[1]))) {
      prepareArr.push({
        id: Number(station[1]),
        nameFi: station[2],
        nameSwe: station[3],
        nameEn: station[4],
        addressFi: station[5],
        addressSwe: station[6],
        cityFi: station[7],
        citySwe: station[8],
        operator: station[9],
        capacities: Number(station[10]),
        coordinateX: parseFloat(station[11]),
        coordinateY: parseFloat(station[12]),
      });
    } else {
      console.log(station);
    }
    return station;
  });

  return prepareArr;
}
