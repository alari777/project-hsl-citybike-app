import {
  createHandler,
  Get,
  Param,
  ParseNumberPipe,
  Query,
} from 'next-api-decorators';

class SearchParams {
  @Get('/:page')
  async searchTrips(
    @Query('search') search: string,
    @Param('page', ParseNumberPipe) page: number,
    @Query('distance', ParseNumberPipe) distance: number,
    @Query('duration', ParseNumberPipe) duration: number
  ) {
    return true;
  }
}

export default createHandler(SearchParams);
