import {
  Body,
  createHandler,
  HttpCode,
  Post,
  ValidationPipe,
} from "next-api-decorators";
import { CreateStationsDTO } from "@/pages/api/v1/download/dto/createStations.dto";
import { downloadCsv } from "@/pages/api/v1/download/helpers/dowloadCsv";

// This class is for download csv file by remote URL
class DownloadStations {
  // POST /v1/download/station
  @Post()
  @HttpCode(201)
  async createStations(@Body(ValidationPipe) body: CreateStationsDTO) {
    await downloadCsv(body);
    return 12;
  }
}

export default createHandler(DownloadStations);
