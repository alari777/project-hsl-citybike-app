import {
  createHandler,
  Get,
  Param,
  ParseNumberPipe,
  Query,
} from 'next-api-decorators';
import { getTrips } from '@/pages/api/getTrips';

class TripParams {
  @Get('/:page')
  async getFewTrips(
    @Param('page', ParseNumberPipe) page: number,
    @Query('distance', ParseNumberPipe) distance: number,
    @Query('duration', ParseNumberPipe) duration: number
  ) {
    return await getTrips(page, distance, duration);
  }
}

export default createHandler(TripParams);
