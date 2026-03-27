import type { QueryResolvers } from '$/types/generated';

const listEmployee: NonNullable<QueryResolvers['listEmployee']> = async (
    _parent,
    _arg,
    ctx,
) => {
    const employees = await ctx.prisma.employee.findMany({});
    return employees;
};

export default listEmployee;
