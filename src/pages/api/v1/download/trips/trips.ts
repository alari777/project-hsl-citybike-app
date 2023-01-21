import {
  Body,
  createHandler,
  HttpCode,
  Post,
  ValidationPipe,
} from 'next-api-decorators';
import { downloadTripsCsv } from '@/pages/api/v1/download/trips/helpers/downloadTripsCsv';
import { loadDataInfileToDB } from '@/pages/api/v1/download/trips/helpers/loadDataInfileToDB';
import { createTripsCsvFile } from '@/pages/api/v1/download/trips/helpers/createTripsCsvFile';
import { CreateTripsDTO } from '@/pages/api/v1/download/trips/dto/createTrips.dto';

class DownloadTrips {
  @Post()
  @HttpCode(201)
  async createTrips(@Body(ValidationPipe) body: CreateTripsDTO) {
    const { url } = body;
    const csvText = await downloadTripsCsv(url);
    await createTripsCsvFile(csvText);
    const result = await loadDataInfileToDB();

    return {
      loadDataInfileToDB: result,
    };
  }
}

export default createHandler(DownloadTrips);
