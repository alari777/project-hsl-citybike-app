import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// This function gets all available stations
export const getSlugStation = async (fid: string): Promise<any> => {
  return true;
};
