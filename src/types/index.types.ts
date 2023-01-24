export type TripType = {
  id: number;
  departureDate: string;
  coveredDistance: string;
  duration: string;
  returnDate: string;
  departureStationId?: number;
  returnStationId?: number;
  Stations_Trips_departureStationIdToStations: { nameFi: string };
  Stations_Trips_returnStationIdToStations: { nameFi: string };
};
