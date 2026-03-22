import type { QueryResolvers } from '$/types/generated';

const listSponsorEmployee: NonNullable<QueryResolvers['listSponsorEmployee']> = async (
  _parent,
  _arg,
  ctx,
) => {
  const sponsorEmployees = await ctx.prisma.sponsorEmployee.findMany({});
  return sponsorEmployees;
};

export default listSponsorEmployee;
