import { PrismaClient } from '@prisma/client';
import { NotFoundException } from 'next-api-decorators';

const prisma = new PrismaClient();

// This function gets all available stations
export const getStations = async () => {
  const stations = await prisma.stations.findMany();

  await prisma.$disconnect();
  return JSON.stringify(stations);
};
