import { PrismaClient } from "@prisma/client";
import {
  Body,
  createHandler,
  HttpCode,
  Post,
  ValidationPipe,
} from "next-api-decorators";
import { CreateStationsDTO } from "@/pages/api/v1/download/dto/createStations.dto";
import { downloadCsv } from "@/pages/api/v1/download/helpers/dowloadCsv";
const prisma = new PrismaClient();

// This class is for download csv file by remote URL
class DownloadStations {
  // POST /v1/download/station
  @Post()
  @HttpCode(201)
  async createStations(@Body(ValidationPipe) body: CreateStationsDTO) {
    const stations: { data: string[] } = await downloadCsv(body);
    // Will be refactored after adding `prisma orm`
    console.log(stations.data.length);
    stations.data.map(async (station: any, index: number) => {});
    return 12;
  }
}

export default createHandler(DownloadStations);
