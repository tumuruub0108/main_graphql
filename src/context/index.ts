import DataLoader from 'dataloader';
import prisma from './db';
import { getEmployeeByID, } from './loaders/employee';
import type { YogaInitialContext } from 'graphql-yoga';

const createContext = (_initCtx: YogaInitialContext) => ({
  prisma: prisma,
  employeeByIDLoader: new DataLoader(getEmployeeByID(prisma)),
});

export default createContext;
