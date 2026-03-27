import type { MutationResolvers } from '$/types/generated';

const createEmployee: NonNullable<MutationResolvers['createEmployee']> = async (
    _parent,
    arg,
    ctx,
) => {
    await ctx.prisma.employee.create({
        data: {
            ...arg.input
        },
    });

    return { success: true };
};

export default createEmployee;
