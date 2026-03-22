import DataLoader from 'dataloader';
import prisma from './db';
import { getSiteEmployeeByID, getSiteEmployeeBySiteID } from './loaders/siteEmployee';
import type { YogaInitialContext } from 'graphql-yoga';

const createContext = (_initCtx: YogaInitialContext) => ({
  prisma: prisma,
  siteEmployeeByIDLoader: new DataLoader(getSiteEmployeeByID(prisma)),
  siteEmployeeBySiteIDLoader: new DataLoader(getSiteEmployeeBySiteID(prisma)),
});

export default createContext;
