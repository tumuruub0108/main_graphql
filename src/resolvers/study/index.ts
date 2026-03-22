import type { StudyResolvers } from '$/types/generated';

const sponsor: NonNullable<StudyResolvers['sponsor']> = async (parent, _arg, ctx) =>
  await ctx.sponsorByIdLoader.load(parent.sponsorId);

const sites: NonNullable<StudyResolvers['sites']> = async (parent, _arg, ctx) =>
  await ctx.SiteByStudyIDLoader.load(parent.id);

const resolver: StudyResolvers = {
  sponsor,
  sites,
};

export default resolver;
