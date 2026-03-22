import type { PrismaClient } from '@prisma/client';

export const getSiteEmployeeByID = (prisma: PrismaClient) => (ids: readonly number[]) =>
  prisma.siteEmployee.findMany({
    where: {
      id: {
        in: ids as number[],
      },
    },
  });

export const getSiteEmployeeBySiteID = (prisma: PrismaClient) => async (ids: readonly string[]) =>
  Promise.all(ids.map((id) => prisma.siteEmployee.findMany({ where: { siteId: id } })));
