import type { PrismaClient } from '@prisma/client';

export const getStudyByID = (prisma: PrismaClient) => (ids: readonly string[]) =>
  prisma.study.findMany({
    where: {
      id: {
        in: ids as string[],
      },
    },
  });

export const getStudyBySiteID = (prisma: PrismaClient) => async (ids: readonly string[]) => {
  // prisma.study.findMany({
  //   where: {
  //     sites: {
  //       some: {
  //         id: {
  //           in: ids as string[],
  //         },
  //       },
  //     },
  //   },
  // });

  const sites = await prisma.site.findMany({
    where: {
      id: { in: ids as string[] },
    },
    include: {
      studies: true,
    },
  });

  return sites.map((site) => site.studies);
};

export const getStudiesBySponsorID = (prisma: PrismaClient) => async (ids: readonly string[]) =>
  Promise.all(ids.map((id) => prisma.study.findMany({ where: { sponsorId: id } })));
