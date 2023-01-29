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
import { CreateStationDTO } from '@/pages/api/v1/station/dto/createStation.dto';
import { DeleteStationDTO } from '@/pages/api/v1/station/dto/deleteStation.dto';
import { UpdateStationDTO } from '@/pages/api/v1/station/dto/updateStation.dto';

const prisma = new PrismaClient();

class Station {
  // GET /api/v1/stations/station
  @Get()
  async fetchStation(@Query('fid') fid: string) {
    // Find just one record.
    // It is like: `select` query with `limit 1`.
    const station = await prisma.stations.findFirst({
      where: {
        fid: Number(fid),
      },
    });

    if (!station) {
      await prisma.$disconnect();
      // HttpCode is 404
      throw new NotFoundException('Station not found.');
    }

    await prisma.$disconnect();
    return station;
  }

  // POST /api/v1/stations/station
  @Post()
  @HttpCode(201)
  async createStation(@Body(ValidationPipe) body: CreateStationDTO) {
    const result = await prisma.stations.create({
      data: body,
    });

    await prisma.$disconnect();

    return result;
  }

  // DELETE /api/v1/stations/station
  @Delete()
  @HttpCode(201)
  async deleteStation(@Body(ValidationPipe) body: DeleteStationDTO) {
    const { fid } = body;
    const result = await prisma.stations.delete({
      where: {
        fid,
      },
    });

    await prisma.$disconnect();

    return result;
  }

  // PATCH /api/v1/stations/station
  @Patch()
  @HttpCode(201)
  async updateStation(@Body(ValidationPipe) body: UpdateStationDTO) {
    const { fid } = body;
    const result = await prisma.stations.update({
      where: {
        fid,
      },
      data: {
        ...body,
      },
    });

    await prisma.$disconnect();

    return result;
  }
}

export default createHandler(Station);
