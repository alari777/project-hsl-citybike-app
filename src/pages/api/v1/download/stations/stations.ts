import { PrismaClient } from '@prisma/client';
import {
  Body,
  createHandler,
  HttpCode,
  Post,
  ValidationPipe,
} from 'next-api-decorators';
import { CreateStationsDTO } from '@/pages/api/v1/download/stations/dto/createStations.dto';
import { downloadCsv } from '@/pages/api/v1/download/stations/helpers/dowloadCsv';
import { prepareData } from '@/pages/api/v1/download/stations/helpers/prepareData';
import { DownloadCsvType } from '@/pages/api/v1/download/stations/types/download.stations.types';
const prisma = new PrismaClient();

// This class is for download csv file by remote URL
class DownloadStations {
  // POST /v1/download/station
  @Post()
  @HttpCode(201)
  async createStations(@Body(ValidationPipe) body: CreateStationsDTO) {
    const stations: DownloadCsvType = await downloadCsv(body);
    const data = prepareData(stations);
    const result = await prisma.stations.createMany({
      data,
    });
    await prisma.$disconnect();
    return result;
  }
}

export default createHandler(DownloadStations);
