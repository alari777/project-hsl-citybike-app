import {
  createHandler,
  Get,
  Param,
  ParseNumberPipe,
  Query,
} from 'next-api-decorators';
import { searchInTrips } from '@/pages/api/searchInTrips';

class SearchParams {
  @Get('/:page')
  async searchTrips(
    @Param('page', ParseNumberPipe) page: number,
    @Query('distance', ParseNumberPipe) distance: number,
    @Query('duration', ParseNumberPipe) duration: number,
    @Query('search') search: string
  ) {
    return await searchInTrips(page, distance, duration, search);
  }
}

export default createHandler(SearchParams);
