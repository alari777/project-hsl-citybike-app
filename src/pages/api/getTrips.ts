import { PrismaClient } from '@prisma/client';
import { NotFoundException } from 'next-api-decorators';

const prisma = new PrismaClient();

export const getTrips = async (pageNumber: number) => {
  const skip = pageNumber * 100;
  const take = 100;
  // To get first 100 trips-records from DB.
  // Also response per each trip has 2 short joined object with related stations:
  // `departure` and `return`
  const trips = await prisma.trips.findMany({
    include: {
      // NameFi of departure station
      Stations_Trips_departureStationIdToStations: {
        select: {
          nameFi: true,
        },
      },
      // NameFi of return station
      Stations_Trips_returnStationIdToStations: {
        select: {
          nameFi: true,
        },
      },
    },
    skip: skip,
    take: take,
  });

  if (!trips) {
    await prisma.$disconnect();
    throw new NotFoundException('Trip not found.');
  }

  await prisma.$disconnect();
  return JSON.stringify(trips);
};
