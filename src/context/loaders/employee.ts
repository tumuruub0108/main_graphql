import type { PrismaClient } from '@prisma/client';

export const getEmployeeByID = (prisma: PrismaClient) => (ids: readonly number[]) =>
    prisma.employee.findMany({
        where: {
            id: {
                in: ids as number[],
            },
        },
    });


/*
export const getSiteEmployeeBySiteID = (prisma: PrismaClient) => async (ids: readonly string[]) =>
    Promise.all(ids.map((id) => prisma.employee.findMany({ where: { siteId: id } })));
*/