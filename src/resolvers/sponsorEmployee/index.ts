import type { SponsorEmployeeResolvers } from '$/types/generated';
const sites: NonNullable<SponsorEmployeeResolvers['sites']> = async (parent, _arg, ctx) =>
  await ctx.siteBySponsorEmployeeIDLoader.load(parent.id);

const sponsor: NonNullable<SponsorEmployeeResolvers['sponsor']> = async (parent, _arg, ctx) =>
  await ctx.sponsorByIdLoader.load(parent.sponsorId);
const resolver: SponsorEmployeeResolvers = {
  sponsor,
  sites,
};

export default resolver;
