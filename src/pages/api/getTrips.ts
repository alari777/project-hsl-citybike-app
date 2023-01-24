import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTrips = async () => {
  console.debug('getTrips');
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
    skip: 0,
    take: 100,
  });

  if (!trips) {
    await prisma.$disconnect();
    throw new NotFoundException('Trip not found.');
  }
};
