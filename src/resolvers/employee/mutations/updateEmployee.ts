import type { MutationResolvers } from '$/types/generated';

const updateEmployee: NonNullable<MutationResolvers['updateEmployee']> = async (
    _parent,
    arg,
    ctx,
) => {
    await ctx.prisma.employee.update({
        where: { id: arg.id },
        data: {
            ...arg.input,
        },
    });

    return { success: true };
};

export default updateEmployee;
