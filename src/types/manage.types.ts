export type StationType = {
  id?: number;
  fid?: number;
  nameFi: string;
  nameSwe: string;
  nameEn: string;
  addressFi?: string;
  addressSwe?: string;
  cityFi?: string;
  citySwe?: string;
  operator?: string;
  capacities?: number;
  coordinateX?: number;
  coordinateY?: number;
  _count?: {
    Trips_Trips_departureStationIdToStations?: number | undefined;
    Trips_Trips_returnStationIdToStations?: number | undefined;
  };
};

export type OneStationType = {
  id: number;
  nameFi: string;
  nameSwe: string;
  nameEn: string;
  addressFi: string;
  addressSwe: string;
  cityFi: string;
  citySwe: string;
  operator: string;
  capacities: number;
  coordinateX: number;
  coordinateY: number;
};

export type OneTripType = {
  departureDate: Date | undefined;
  returnDate: Date | undefined;
  departureStationId: number;
  returnStationId: number;
  coveredDistance: number;
  duration: number;
};
