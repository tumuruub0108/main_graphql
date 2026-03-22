import type { SiteEmployeeResolvers } from '$/types/generated';

const site: NonNullable<SiteEmployeeResolvers['site']> = async (parent, _arg, ctx) =>
  await ctx.siteByIDLoader.load(parent.siteId);

const specialties: NonNullable<SiteEmployeeResolvers['specialties']> = async (parent, _arg, ctx) =>
  await ctx.siteEmployeeSpecialtyByEmployeeIDLoader.load(parent.id);

const resolver: SiteEmployeeResolvers = {
  site,
  specialties,
};

export default resolver;
