import {
  createHandler,
  Get,
  Param,
  ParseNumberPipe,
} from 'next-api-decorators';
import { getTrips } from '@/pages/api/getTrips';

class TripParams {
  @Get('/:page')
  async getFewTrips(@Param('page', ParseNumberPipe) page: number) {
    return await getTrips(page);
  }
}

export default createHandler(TripParams);
