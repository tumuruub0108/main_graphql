import type { QueryResolvers } from '$/types/generated';

const listSiteEmployee: NonNullable<QueryResolvers['listSiteEmployee']> = async (
  _parent,
  _arg,
  ctx,
) => {
  const siteEmployees = await ctx.prisma.siteEmployee.findMany({});
  return siteEmployees;
};

export default listSiteEmployee;
