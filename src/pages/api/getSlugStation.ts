import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// This function gets all available stations
export const getSlugStation = async (fid: string): Promise<string> => {
  // Find just one record station.
  // It is like: `select` query with `limit 1`.
  const station = await prisma.stations.findMany({
    where: {
      fid: Number(fid),
    },
    include: {
      _count: {
        select: {
          Trips_Trips_departureStationIdToStations: true, // amount of starting
          Trips_Trips_returnStationIdToStations: true, // amount of ending
        },
      },
    },
  });

  const totalDepartureDistance =
    await prisma.$queryRaw`SELECT SUM(d.coveredDistance) as dCoveredDistance FROM Trips AS d WHERE d.departureStationId = ${Number(
      fid
    )}`;
  const totalReturnDistance =
    await prisma.$queryRaw`SELECT SUM(r.coveredDistance) as rCoveredDistance FROM Trips AS r WHERE r.returnStationId = ${Number(
      fid
    )}`;

  // Top 5 most popular return stations for journeys starting from the station
  const topReturnStations = await prisma.trips.groupBy({
    by: ['returnStationId'],
    _count: {
      returnStationId: true,
    },
    where: {
      departureStationId: Number(fid),
    },
    orderBy: {
      _count: {
        returnStationId: 'desc',
      },
    },
    take: 5,
  });

  // Top 5 most popular departure stations for journeys ending at the station
  const topDepartureStations = await prisma.trips.groupBy({
    by: ['departureStationId'],
    _count: {
      departureStationId: true,
    },
    where: {
      returnStationId: Number(fid),
    },
    orderBy: {
      _count: {
        departureStationId: 'desc',
      },
    },
    take: 5,
  });

  await prisma.$disconnect();

  return JSON.stringify([
    station,
    totalDepartureDistance,
    totalReturnDistance,
    topReturnStations,
    topDepartureStations,
  ]);
};
