import type { PrismaClient } from '@prisma/client';

export const getSiteByID = (prisma: PrismaClient) => (ids: readonly string[]) =>
  prisma.site.findMany({
    where: {
      id: {
        in: ids as string[],
      },
    },
  });

export const getSiteBySponsorEmployeeID =
  (prisma: PrismaClient) => async (ids: readonly number[]) => {
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

    const sites = await prisma.sponsorEmployee.findMany({
      where: {
        id: { in: ids as number[] },
      },
      include: {
        sites: true,
      },
    });

    return sites.map((site) => site.sites);
  };

export const getSiteByStudyID = (prisma: PrismaClient) => async (ids: readonly string[]) => {
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

  const sites = await prisma.study.findMany({
    where: {
      id: { in: ids as string[] },
    },
    include: {
      sites: true,
    },
  });

  return sites.map((site) => site.sites);
};
