import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// This function gets all available stations
export const getStations = async (pageNumber: number) => {
  const skip = pageNumber * 100;
  const take = 100;
  const stations = await prisma.stations.findMany({
    skip: skip,
    take: take,
  });

  await prisma.$disconnect();
  return JSON.stringify(stations);
};
