// import { v4 as uuidv4 } from 'uuid';
import type { MutationResolvers } from '$/types/generated';

const deleteSite: NonNullable<MutationResolvers['deleteSite']> = async (_parent, arg, ctx) => {
  await ctx.prisma.site.delete({
    where: {
      id: arg.id,
    },
  });

  return { success: true };
};

export default deleteSite;
