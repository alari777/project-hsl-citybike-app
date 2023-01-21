import * as Papa from "papaparse";

export async function createTripsCsvFile(data: any): Promise<void> {
  const results: any = Papa.parse(data);

  // To get IDs of stations in order to check each trip
  const stationsIds = await getIdsStations();

  const trips: any = [];
  results.data.filter((trip: any, index: number) => {
    if (
      // There are guards in order to prepare valid data for `Stations table`
      index !== 0 &&
      // Duration > 10.0s.
      // !!!I found that at least one record is `DECIMAL`!!!
      parseFloat(trip[7]) > 10 &&
      // Covered Distance > 10.0m. !!!I found that at least one record is `DECIMAL`!!!
      // !!!I found that at least one record is `DECIMAL`!!!
      parseFloat(trip[6]) > 10 &&
      stationsIds.includes(Number(trip[2])) && // Departure ID station is existing
      stationsIds.includes(Number(trip[4])) // Return ID station is existing
    ) {
      trips.push({
        departureDate: trip[0],
        returnDate: trip[1],
        departureStationId: Number(trip[2]),
        returnStationId: Number(trip[4]),
        coveredDistance: parseFloat(trip[6]),
        duration: parseFloat(trip[7]),
      });
      return trip;
    }
  });
}
