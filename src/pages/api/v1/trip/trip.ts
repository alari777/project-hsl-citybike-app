import { createHandler, Get, Query } from 'next-api-decorators';

class Trip {
  // GET /api/v1/trip/trip
  @Get()
  async fetchTrip(@Query('id') id: string) {}
}

export default createHandler(Trip);
