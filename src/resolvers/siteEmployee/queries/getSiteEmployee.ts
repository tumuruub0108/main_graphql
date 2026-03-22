import { GraphQLError } from 'graphql';
import type { QueryResolvers } from '$/types/generated';

const getSiteEmployee: NonNullable<QueryResolvers['getSiteEmployee']> = async (
  _parent,
  arg,
  ctx,
) => {
  const siteEmployee = await ctx.prisma.siteEmployee.findUnique({ where: { id: arg.id } });
  if (!siteEmployee) {
    return Promise.reject(new GraphQLError('SiteEmployee not found'));
  }
  return siteEmployee;
};

export default getSiteEmployee;
