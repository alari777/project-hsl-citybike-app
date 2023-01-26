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

  await prisma.$disconnect();

  return JSON.stringify([station, totalDepartureDistance]);
};
