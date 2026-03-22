import { GraphQLError } from 'graphql';
import type { QueryResolvers } from '$/types/generated';

const getSponsor: NonNullable<QueryResolvers['getSponsor']> = async (_parent, arg, ctx) => {
  const sponsor = await ctx.prisma.sponsor.findUnique({ where: { id: arg.id } });
  if (!sponsor) {
    return Promise.reject(new GraphQLError('Sponsor not found'));
  }
  return sponsor;
};

export default getSponsor;
