import type { SiteResolvers } from '$/types/generated';
const studies: NonNullable<SiteResolvers['studies']> = (parent, _arg, ctx) =>
  ctx.studyBySiteIDLoader.load(parent.id);

const employees: NonNullable<SiteResolvers['employees']> = (parent, _arg, ctx) =>
  ctx.siteEmployeeBySiteIDLoader.load(parent.id);

const monitors: NonNullable<SiteResolvers['monitors']> = (parent, _arg, ctx) =>
  ctx.sponsorEmployeeBySiteIDLoader.load(parent.id);

const resolver: SiteResolvers = {
  employees,
  monitors,
  studies,
};

export default resolver;
