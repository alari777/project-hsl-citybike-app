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
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class Trip {
  // GET /api/v1/trip/trip
  @Get()
  async fetchTrip(@Query('id') id: string) {}

  // POST /api/v1/trip/trip
  @Post()
  @HttpCode(201)
  async createTrip(@Body(ValidationPipe) body: any) {}

  // DELETE /api/v1/trip/trip
  @Delete()
  @HttpCode(201)
  async deleteTrip(@Body(ValidationPipe) body: any) {}

  // PATCH /api/v1/trip/trip
  @Patch()
  @HttpCode(201)
  async updateTrip(@Body(ValidationPipe) body: any) {}
}

export default createHandler(Trip);
