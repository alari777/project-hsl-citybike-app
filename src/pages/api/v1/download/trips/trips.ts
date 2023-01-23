import {
  Body,
  createHandler,
  Get,
  HttpCode,
  Post,
  ValidationPipe,
} from 'next-api-decorators';
import { downloadTripsCsv } from '@/pages/api/v1/download/trips/helpers/downloadTripsCsv';
import { loadDataInfileToDB } from '@/pages/api/v1/download/trips/helpers/loadDataInfileToDB';
import { createTripsCsvFile } from '@/pages/api/v1/download/trips/helpers/createTripsCsvFile';
import { CreateTripsDTO } from '@/pages/api/v1/download/trips/dto/createTrips.dto';

class FetchTrips {
  @Post()
  @HttpCode(201)
  async fetchTripsRemotely(@Body(ValidationPipe) body: CreateTripsDTO) {
    const { url } = body;
    const csvText = await downloadTripsCsv(url);
    await createTripsCsvFile(csvText);

    return {
      isDone: true,
    };
  }

  @Get()
  async createTripsFromCSV() {
    const result = await loadDataInfileToDB();
    console.log(result);
    return {
      loadDataInfileToDB: result,
    };
  }
}

export default createHandler(FetchTrips);
