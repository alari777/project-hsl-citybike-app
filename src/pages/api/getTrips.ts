import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTrips = async () => {
  console.debug('getTrips');
  const trips = await prisma.trips.findMany({
    include: {
      Stations_Trips_departureStationIdToStations: {
        select: {
          nameFi: true,
        },
      },
      Stations_Trips_returnStationIdToStations: {
        select: {
          nameFi: true,
        },
      },
    },
    skip: 0,
    take: 100,
  });
};
