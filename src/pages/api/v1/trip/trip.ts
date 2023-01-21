import {
  Body,
  createHandler,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from 'next-api-decorators';
import { PrismaClient } from '@prisma/client';
import { CreateTripDTO } from '@/pages/api/v1/trip/dto/createTrip.dto';
import { DeleteTripDTO } from '@/pages/api/v1/trip/dto/deleteTrip.dto';
import { UpdateTripDTO } from '@/pages/api/v1/trip/dto/updateTrip.dto';

const prisma = new PrismaClient();

class Trip {
  // GET /api/v1/trip/trip
  @Get()
  async fetchTrip(@Query('id') id: string) {
    // Include section: is making operator like `join`.
    // In order to get full related information about `departure` and `return` stations.
    const trip = await prisma.trips.findFirst({
      include: {
        Stations_Trips_departureStationIdToStations: true,
        Stations_Trips_returnStationIdToStations: true,
      },
    });

    if (!trip) {
      await prisma.$disconnect();
      throw new NotFoundException('Trip not found.');
    }

    await prisma.$disconnect();
    return trip;
  }

  // POST /api/v1/trip/trip
  @Post()
  @HttpCode(201)
  async createTrip(@Body(ValidationPipe) body: CreateTripDTO) {
    const result = await prisma.trips.create({
      data: body,
    });

    await prisma.$disconnect();

    return result;
  }

  // DELETE /api/v1/trip/trip
  @Delete()
  @HttpCode(201)
  async deleteTrip(@Body(ValidationPipe) body: DeleteTripDTO) {
    const { id } = body;
    const result = await prisma.trips.delete({
      where: {
        id,
      },
    });

    await prisma.$disconnect();

    return result;
  }

  // PATCH /api/v1/trip/trip
  @Patch()
  @HttpCode(201)
  async updateTrip(@Body(ValidationPipe) body: UpdateTripDTO) {
    const { id } = body;
    const result = await prisma.trips.update({
      where: {
        id,
      },
      data: {
        ...body,
      },
    });

    await prisma.$disconnect();

    return result;
  }
}

export default createHandler(Trip);
