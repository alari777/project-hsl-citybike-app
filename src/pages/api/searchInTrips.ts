import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// This function makes search by stations in `Trips` table
export const searchInTrips = async (
  pageNumber: number,
  filterDistance: number = 10,
  filterDuration: number = 10,
  search = ''
) => {
  const skip = pageNumber * 100;
  const take = 100;
  const trips = await prisma.trips.findMany({
    where: {
      OR: [
        {
          Stations_Trips_departureStationIdToStations: {
            nameFi: {
              contains: search,
            },
          },
        },
        {
          Stations_Trips_returnStationIdToStations: {
            nameFi: {
              contains: search,
            },
          },
        },
      ],
    },
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

  await prisma.$disconnect();
  return trips;
};
