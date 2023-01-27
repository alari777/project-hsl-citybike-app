import { PrismaClient, Prisma } from '@prisma/client';

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
  const topDepartureStations: any = await prisma.$queryRaw(
    Prisma.sql`SELECT t.departureStationId, s2.nameFi as name1, t.returnStationId, s1.nameFi as name2, COUNT(t.returnStationId) AS DepartureCount FROM Trips AS t LEFT JOIN Stations AS s1 ON s1.id = ${Number(
      fid
    )} LEFT JOIN Stations AS s2 ON s2.id = t.returnStationId WHERE t.departureStationId = ${Number(
      fid
    )} GROUP BY t.returnStationId ORDER BY DepartureCount DESC LIMIT 5`
  );

  const arr2: any = [];
  topDepartureStations.map((item: any) => {
    const foo = {
      returnStationId: item.returnStationId,
      name1: item.name1,
      departureStationId: item.departureStationId,
      name2: item.name2,
      DepartureCount: Number(item.DepartureCount),
    };
    arr2.push(foo);
  });

  const topReturnStations: any =
    await prisma.$queryRaw`SELECT t.departureStationId, s2.nameFi as name1, t.returnStationId, s1.nameFi as name2, COUNT(t.departureStationId) AS DepartureCount FROM Trips AS t  LEFT JOIN Stations AS s1 ON s1.id = ${Number(
      fid
    )}  LEFT JOIN Stations AS s2 ON s2.id = t.departureStationId  WHERE t.returnStationId = ${Number(
      fid
    )} GROUP BY t.departureStationId ORDER BY DepartureCount DESC LIMIT 5`;

  // Top 5 most popular departure stations for journeys ending at the station
  const arr1: any = [];
  topReturnStations.map((item: any) => {
    const foo = {
      departureStationId: item.departureStationId,
      name1: item.name1,
      returnStationId: item.returnStationId,
      name2: item.name2,
      DepartureCount: Number(item.DepartureCount),
    };
    arr1.push(foo);
  });

  await prisma.$disconnect();

  return JSON.stringify([
    station,
    totalDepartureDistance,
    totalReturnDistance,
    arr1,
    arr2,
  ]);
};
