import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTrips = async () => {
  console.debug('getTrips');
};
