import { PrismaClient } from "@prisma/client";
import {
  Body,
  createHandler,
  HttpCode,
  Post,
  ValidationPipe,
} from "next-api-decorators";
import { CreateStationsDTO } from "@/pages/api/v1/download/stations/dto/createStations.dto";
import { downloadCsv } from "@/pages/api/v1/download/stations/helpers/dowloadCsv";
const prisma = new PrismaClient();

type StationType = {
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

// This class is for download csv file by remote URL
class DownloadStations {
  // POST /v1/download/station
  @Post()
  @HttpCode(201)
  async createStations(@Body(ValidationPipe) body: CreateStationsDTO) {
    const stations: { data: string[] } = await downloadCsv(body);
    const prepareArr: StationType[] = [];
    stations.data.map(async (station: any) => {
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
    });
    const result = await prisma.stations.createMany({
      data: prepareArr,
    });
    await prisma.$disconnect();
    return result;
  }
}

export default createHandler(DownloadStations);
