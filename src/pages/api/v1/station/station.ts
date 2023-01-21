import {
  Body,
  createHandler,
  Delete,
  Get,
  HttpCode,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from 'next-api-decorators';

class Station {
  // GET /api/v1/station/station
  @Get()
  async fetchStation(@Query('fid') fid: string) {}

  // POST /api/v1/station/station
  @Post()
  @HttpCode(201)
  async createStation(@Body(ValidationPipe) body: any) {}

  // DELETE /api/v1/station/station
  @Delete()
  @HttpCode(201)
  async deleteStation(@Body(ValidationPipe) body: any) {}

  // PATCH /api/v1/station/station
  @Patch()
  @HttpCode(201)
  async updateStation(@Body(ValidationPipe) body: any) {}
}

export default createHandler(Station);
