import * as Papa from "papaparse";
import { InternalServerErrorException } from "next-api-decorators";

type DownloadCsvType = {
  data: string[];
};

type JsonBodyType = {
  url: string;
};

// This function downloads remote CSV file
export async function DownloadCsv(body: string): Promise<DownloadCsvType> {
  try {
    const jsonBody: JsonBodyType = JSON.parse(body);
    const { url } = jsonBody;
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
