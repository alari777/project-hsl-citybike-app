import {
  createHandler,
  Get,
  Param,
  ParseNumberPipe,
} from 'next-api-decorators';
import { getStations } from '@/pages/api/getStations';

class StationParams {
  // GET /api/v1/station/[[...params]]
  // e.g. /api/v1/station/0
  @Get('/:page')
  async getFewStations(@Param('page', ParseNumberPipe) page: number) {
    return await getStations(page);
  }
}

export default createHandler(StationParams);
