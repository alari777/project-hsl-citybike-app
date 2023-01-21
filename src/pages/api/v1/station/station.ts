import { createHandler, Get, Query } from 'next-api-decorators';

class Station {
  // GET /api/v1/station/station
  @Get()
  async fetchStation(@Query('fid') fid: string) {}
}

export default createHandler(Station);
