import { DateResolver, DateTimeResolver, VoidResolver } from 'graphql-scalars';
import type { Context } from '$/types';
import type { Resolvers } from '$/types/generated';
import siteEmployee from './siteEmployee';
import createSiteEmployee from './siteEmployee/mutations/createSiteEmployee';
import deleteSiteEmployee from './siteEmployee/mutations/deleteSiteEmployee';
import updateSiteEmployee from './siteEmployee/mutations/updateSiteEmployee';
import getSiteEmployee from './siteEmployee/queries/getSiteEmployee';
import listSiteEmployee from './siteEmployee/queries/listSiteEmployee';


const resolvers: Resolvers<Context> = {
  Void: VoidResolver,
  Date: DateResolver,
  DateTime: DateTimeResolver,
  Query: {
    listSiteEmployee: listSiteEmployee,
    getSiteEmployee: getSiteEmployee,
  },
  Mutation: {
    createSiteEmployee: createSiteEmployee,
    deleteSiteEmployee: deleteSiteEmployee,
    updateSiteEmployee: updateSiteEmployee,
  },
  SiteEmployee: siteEmployee,
};

export default resolvers;
