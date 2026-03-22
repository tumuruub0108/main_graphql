import type { PrismaClient } from '@prisma/client';

export const getSiteEmployeeSpecialtyByID = (prisma: PrismaClient) => (ids: readonly number[]) =>
  prisma.siteEmployeeSpecialty.findMany({
    where: {
      id: {
        in: ids as number[],
      },
    },
  });

export const getSiteEmployeeSpecialtyByEmployeeID =
  (prisma: PrismaClient) => async (ids: readonly number[]) =>
    Promise.all(
      ids.map((id) => prisma.siteEmployeeSpecialty.findMany({ where: { employeeId: id } })),
    );
