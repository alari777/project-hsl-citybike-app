import {
  Body,
  createHandler,
  HttpCode,
  Post,
  ValidationPipe,
} from "next-api-decorators";

// This class is for download csv file by remote URL
class DownloadStations {
  // POST /v1/download/station
  @Post()
  @HttpCode(201)
  async createStations(@Body(ValidationPipe) body: any) {
    return 12;
  }
}

export default createHandler(DownloadStations);
