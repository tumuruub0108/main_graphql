import { DateResolver, DateTimeResolver, VoidResolver } from 'graphql-scalars';
import type { Context } from '$/types';
import type { Resolvers } from '$/types/generated';
import getEmployee from './employee/queries/getEmployee';
import site from './site';
import createSite from './site/mutations/createSite';
import deleteSite from './site/mutations/deleteSite';
import updateSite from './site/mutations/updateSite';
import getSite from './site/queries/getSite';
import listSite from './site/queries/listSite';
import siteEmployee from './siteEmployee';
import createSiteEmployee from './siteEmployee/mutations/createSiteEmployee';
import deleteSiteEmployee from './siteEmployee/mutations/deleteSiteEmployee';
import updateSiteEmployee from './siteEmployee/mutations/updateSiteEmployee';
import getSiteEmployee from './siteEmployee/queries/getSiteEmployee';
import listSiteEmployee from './siteEmployee/queries/listSiteEmployee';
import sponsor from './sponsor';
import createSponsor from './sponsor/mutations/createSponsor';
import deleteSponsor from './sponsor/mutations/deleteSponsor';
import updateSponsor from './sponsor/mutations/updateSponsor';
import getSponsor from './sponsor/queries/getSponsor';
import listSponsor from './sponsor/queries/listSponsor';
import sponsorEmployee from './sponsorEmployee';
import createSponsorEmployee from './sponsorEmployee/mutations/createSponsorEmployee';
import deleteSponsorEmployee from './sponsorEmployee/mutations/deleteSponsorEmployee';
import updateSponsorEmployee from './sponsorEmployee/mutations/updateSponsorEmployee';
import getSponsorEmployee from './sponsorEmployee/queries/getSponsorEmployee';
import listSponsorEmployee from './sponsorEmployee/queries/listSponsorEmployee';
import study from './study';
import createStudy from './study/mutations/createStudy';
import deleteStudy from './study/mutations/deleteStudy';
import updateStudy from './study/mutations/updateStudy';
import getStudy from './study/queries/getStudy';
import listStudy from './study/queries/listStudy';

const resolvers: Resolvers<Context> = {
  Void: VoidResolver,
  Date: DateResolver,
  DateTime: DateTimeResolver,
  Query: {
    listStudy: listStudy,
    getStudy: getStudy,
    listSite: listSite,
    getSite: getSite,
    listSponsor: listSponsor,
    getSponsor: getSponsor,
    listSiteEmployee: listSiteEmployee,
    getSiteEmployee: getSiteEmployee,
    listSponsorEmployee: listSponsorEmployee,
    getSponsorEmployee: getSponsorEmployee,
    getEmployee: getEmployee,
  },
  Mutation: {
    createStudy: createStudy,
    deleteStudy: deleteStudy,
    updateStudy: updateStudy,
    createSite: createSite,
    deleteSite: deleteSite,
    updateSite: updateSite,
    createSponsor: createSponsor,
    deleteSponsor: deleteSponsor,
    updateSponsor: updateSponsor,
    createSiteEmployee: createSiteEmployee,
    deleteSiteEmployee: deleteSiteEmployee,
    updateSiteEmployee: updateSiteEmployee,
    createSponsorEmployee: createSponsorEmployee,
    deleteSponsorEmployee: deleteSponsorEmployee,
    updateSponsorEmployee: updateSponsorEmployee,
  },
  Site: site,
  Study: study,
  Sponsor: sponsor,
  SiteEmployee: siteEmployee,
  SponsorEmployee: sponsorEmployee,
};

export default resolvers;
