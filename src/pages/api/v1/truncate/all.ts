import {
  createHandler,
  Delete
} from 'next-api-decorators';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class TruncateAllTables {
  // DELETE /api/v1/truncate/all
  @Delete()
  async truncateTables() {
    await prisma.trips.deleteMany({});
    await prisma.stations.deleteMany({});

    await prisma.$disconnect();
  }
}

export default createHandler(TruncateAllTables);
