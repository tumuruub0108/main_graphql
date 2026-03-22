import type { QueryResolvers } from '$/types/generated';

const listSite: NonNullable<QueryResolvers['listSite']> = async (_parent, _arg, ctx) => {
  const sites = await ctx.prisma.site.findMany({});
  return sites;
};

export default listSite;
