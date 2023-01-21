import * as Papa from "papaparse";

export async function createTripsCsvFile(data: any): Promise<void> {
  const results: any = Papa.parse(data);
  const stationsIds = await getIdsStations();
}
