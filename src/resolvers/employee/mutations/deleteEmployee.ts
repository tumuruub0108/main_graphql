// import { v4 as uuidv4 } from 'uuid';
import type { MutationResolvers } from '$/types/generated';

const deleteEmployee: NonNullable<MutationResolvers['deleteEmployee']> = async (
    _parent,
    arg,
    ctx,
) => {
    await ctx.prisma.employee.delete({
        where: {
            id: arg.id,
        },
    });

    return { success: true };
};

export default deleteEmployee;
