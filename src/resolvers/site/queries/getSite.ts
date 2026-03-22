import { GraphQLError } from 'graphql';
import type { QueryResolvers } from '$/types/generated';

const getSite: NonNullable<QueryResolvers['getSite']> = async (_parent, arg, ctx) => {
  const site = await ctx.prisma.site.findUnique({ where: { id: arg.id } });
  if (!site) {
    return Promise.reject(new GraphQLError('Site not found'));
  }
  return site;
};

export default getSite;
