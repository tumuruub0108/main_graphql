import { GraphQLError } from 'graphql';
import type { QueryResolvers } from '$/types/generated';

const getSponsorEmployee: NonNullable<QueryResolvers['getSponsorEmployee']> = async (
  _parent,
  arg,
  ctx,
) => {
  const sponsorEmployee = await ctx.prisma.sponsorEmployee.findUnique({ where: { id: arg.id } });
  if (!sponsorEmployee) {
    return Promise.reject(new GraphQLError('SponsorEmployee not found'));
  }
  return sponsorEmployee;
};

export default getSponsorEmployee;
