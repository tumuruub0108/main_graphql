import type { QueryResolvers } from '$/types/generated';

const listSponsor: NonNullable<QueryResolvers['listSponsor']> = async (_parent, _arg, ctx) => {
  const sponsors = await ctx.prisma.sponsor.findMany({});
  return sponsors;
};

export default listSponsor;
