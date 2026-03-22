import { GraphQLError } from 'graphql';
import type { QueryResolvers } from '$/types/generated';

const getStudy: NonNullable<QueryResolvers['getStudy']> = async (_parent, arg, ctx) => {
  const study = await ctx.prisma.study.findUnique({ where: { id: arg.id } });
  if (!study) {
    return Promise.reject(new GraphQLError('Study not found'));
  }
  return study;
};

export default getStudy;
