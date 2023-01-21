import { PrismaClient } from "@prisma/client";

type StationId = {
  id: number;
};

export async function getIdsStations(): Promise<number[]> {
  const prisma = new PrismaClient();
  const stations: StationId[] = await prisma.stations.findMany({
    select: { id: true },
  });

  await prisma.$disconnect();

  return stations.map((station) => {
    return station.id;
  });
}
