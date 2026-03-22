import type { PrismaClient } from '@prisma/client';

export const getSponsorEmployeeByID = (prisma: PrismaClient) => (ids: readonly number[]) =>
  prisma.sponsorEmployee.findMany({
    where: {
      id: {
        in: ids as number[],
      },
    },
  });

export const getSponsorEmployeeBySiteID =
  (prisma: PrismaClient) => async (ids: readonly string[]) =>
    Promise.all(ids.map((id) => prisma.sponsorEmployee.findMany({ where: { sponsorId: id } })));
