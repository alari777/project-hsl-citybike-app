import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

type Top5Type = {
  departureStationId: number;
  name1: string;
  returnStationId: number;
  name2: string;
  DepartureCount: number;
};

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

  // For: the average distance of a journey starting from the station
  const totalDepartureDistance =
    await prisma.$queryRaw`SELECT SUM(d.coveredDistance) as dCoveredDistance FROM Trips AS d WHERE d.departureStationId = ${Number(
      fid
    )}`;

  // For: the average distance of a journey ending at the station
  const totalReturnDistance =
    await prisma.$queryRaw`SELECT SUM(r.coveredDistance) as rCoveredDistance FROM Trips AS r WHERE r.returnStationId = ${Number(
      fid
    )}`;

  // Top 5 most popular return stations for journeys starting from the station
  const topReturnStations: Top5Type[] =
    await prisma.$queryRaw`SELECT t.departureStationId, s2.nameFi as name1, t.returnStationId, s1.nameFi as name2, COUNT(t.departureStationId) AS DepartureCount FROM Trips AS t  LEFT JOIN Stations AS s1 ON s1.fid = ${Number(
      fid
    )}  LEFT JOIN Stations AS s2 ON s2.fid = t.departureStationId  WHERE t.returnStationId = ${Number(
      fid
    )} GROUP BY t.departureStationId ORDER BY DepartureCount DESC LIMIT 5`;

  const top5Return: Top5Type[] = [];
  topReturnStations.map((item) => {
    const foo = {
      departureStationId: item.departureStationId,
      name1: item.name1,
      returnStationId: item.returnStationId,
      name2: item.name2,
      DepartureCount: Number(item.DepartureCount),
    };
    top5Return.push(foo);
  });

  // Top 5 most popular departure stations for journeys ending at the station
  const topDepartureStations: Top5Type[] = await prisma.$queryRaw(
    Prisma.sql`SELECT t.departureStationId, s2.nameFi as name1, t.returnStationId, s1.nameFi as name2, COUNT(t.returnStationId) AS DepartureCount FROM Trips AS t LEFT JOIN Stations AS s1 ON s1.fid = ${Number(
      fid
    )} LEFT JOIN Stations AS s2 ON s2.fid = t.returnStationId WHERE t.departureStationId = ${Number(
      fid
    )} GROUP BY t.returnStationId ORDER BY DepartureCount DESC LIMIT 5`
  );

  const top5Departure: Top5Type[] = [];
  topDepartureStations.map((item) => {
    const foo = {
      returnStationId: item.returnStationId,
      name1: item.name1,
      departureStationId: item.departureStationId,
      name2: item.name2,
      DepartureCount: Number(item.DepartureCount),
    };
    top5Departure.push(foo);
  });

  await prisma.$disconnect();

  return JSON.stringify([
    station,
    totalDepartureDistance,
    totalReturnDistance,
    top5Return,
    top5Departure,
  ]);
};
