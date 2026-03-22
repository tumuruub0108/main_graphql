import DataLoader from 'dataloader';
import prisma from './db';
import { getSiteByID, getSiteBySponsorEmployeeID, getSiteByStudyID } from './loaders/site';
import { getSiteEmployeeByID, getSiteEmployeeBySiteID } from './loaders/siteEmployee';
import {
  getSiteEmployeeSpecialtyByEmployeeID,
  getSiteEmployeeSpecialtyByID,
} from './loaders/siteEmployeeSpecialty';
import { getSponsorByID } from './loaders/sponsor';
import { getSponsorEmployeeByID, getSponsorEmployeeBySiteID } from './loaders/sponsorEmployee';
import { getStudiesBySponsorID, getStudyByID, getStudyBySiteID } from './loaders/study';
import type { YogaInitialContext } from 'graphql-yoga';

const createContext = (_initCtx: YogaInitialContext) => ({
  prisma: prisma,
  siteByIDLoader: new DataLoader(getSiteByID(prisma)),
  siteEmployeeByIDLoader: new DataLoader(getSiteEmployeeByID(prisma)),
  siteEmployeeBySiteIDLoader: new DataLoader(getSiteEmployeeBySiteID(prisma)),
  siteBySponsorEmployeeIDLoader: new DataLoader(getSiteBySponsorEmployeeID(prisma)),
  SiteByStudyIDLoader: new DataLoader(getSiteByStudyID(prisma)),
  sponsorByIdLoader: new DataLoader(getSponsorByID(prisma)),
  sponsorEmployeeByIDLoader: new DataLoader(getSponsorEmployeeByID(prisma)),
  sponsorEmployeeBySiteIDLoader: new DataLoader(getSponsorEmployeeBySiteID(prisma)),
  siteEmployeeSpecialtyByIDLoader: new DataLoader(getSiteEmployeeSpecialtyByID(prisma)),
  siteEmployeeSpecialtyByEmployeeIDLoader: new DataLoader(
    getSiteEmployeeSpecialtyByEmployeeID(prisma),
  ),
  studyByIDLoader: new DataLoader(getStudyByID(prisma)),
  studyBySiteIDLoader: new DataLoader(getStudyBySiteID(prisma)),
  studiesBySponsorIDLoader: new DataLoader(getStudiesBySponsorID(prisma)),
});

export default createContext;
