import * as Papa from "papaparse";
import { InternalServerErrorException } from "next-api-decorators";
import {
  BodyType,
  DownloadCsvType,
} from "@/pages/api/v1/download/stations/types/download.stations.types";

// This function downloads remote CSV file
export async function downloadCsv(body: BodyType): Promise<DownloadCsvType> {
  try {
    const { url } = body;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "content-type": "text/csv;charset=UTF-8",
      },
    });
    if (response.status === 200) {
      const res = await response.text();
      // It is parsing and returning object response using `papaparse` package
      return Papa.parse(res);
    } else {
      return {
        data: [],
      };
    }
  } catch (err: any) {
    console.error(err.message);
    throw new InternalServerErrorException("Something goes wrong ..");
  }
}
