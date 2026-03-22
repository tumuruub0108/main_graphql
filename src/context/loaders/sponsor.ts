import type { PrismaClient } from '@prisma/client';

export const getSponsorByID = (prisma: PrismaClient) => (ids: readonly string[]) =>
  prisma.sponsor.findMany({
    where: {
      id: {
        in: ids as string[],
      },
    },
  });
