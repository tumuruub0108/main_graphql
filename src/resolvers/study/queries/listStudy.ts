import type { QueryResolvers } from '$/types/generated';

const listStudy: NonNullable<QueryResolvers['listStudy']> = async (_parent, _arg, ctx) => {
  const studies = await ctx.prisma.study.findMany({});
  return studies;
};

export default listStudy;
