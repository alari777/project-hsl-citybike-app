import { PrismaClient } from "@prisma/client";
import { StationId } from "@/pages/api/v1/download/trips/types/download.trips.types";

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
