import {
  Body,
  createHandler,
  Get,
  HttpCode,
  Post,
  Query,
  ValidationPipe,
} from 'next-api-decorators';

class Trip {
  // GET /api/v1/trip/trip
  @Get()
  async fetchTrip(@Query('id') id: string) {}

  // POST /api/v1/trip/trip
  @Post()
  @HttpCode(201)
  async createTrip(@Body(ValidationPipe) body: any) {}
}

export default createHandler(Trip);
