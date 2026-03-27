import { GraphQLError } from 'graphql';
import type { QueryResolvers } from '$/types/generated';

const getEmployee: NonNullable<QueryResolvers['getEmployee']> = async (
    _parent,
    arg,
    ctx,
) => {
    const employee = await ctx.prisma.employee.findUnique({ where: { id: arg.id } });
    if (!employee) {
        return Promise.reject(new GraphQLError('SiteEmployee not found'));
    }
    return employee;
};

export default getEmployee;
