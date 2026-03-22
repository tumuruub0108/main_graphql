import type { SponsorResolvers } from '$/types/generated';

const studies: NonNullable<SponsorResolvers['studies']> = (parent, _arg, ctx) =>
  ctx.studiesBySponsorIDLoader.load(parent.id);

const employees: NonNullable<SponsorResolvers['employees']> = (parent, _arg, ctx) =>
  ctx.sponsorEmployeeBySiteIDLoader.load(parent.id);

const resolver: SponsorResolvers = {
  employees,
  studies,
};

export default resolver;
