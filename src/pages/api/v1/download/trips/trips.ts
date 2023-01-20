import {
  Body,
  createHandler,
  HttpCode,
  Post,
  ValidationPipe,
} from "next-api-decorators";

class DownloadTrips {
  @Post()
  @HttpCode(201)
  async createTrips(@Body(ValidationPipe) body: any) {
    const { url } = body;
    const csvText = await downloadTripsCsv(url);
    await createNewCsvFile(csvText);
    const result = await loadDataInfileToDB();

    return {
      loadDataInfileToDB: result,
    };
  }
}

export default createHandler(DownloadTrips);
