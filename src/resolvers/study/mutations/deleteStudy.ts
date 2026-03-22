import type { MutationResolvers } from '$/types/generated';

const deleteStudy: NonNullable<MutationResolvers['deleteStudy']> = async (_parent, arg, ctx) => {
  await ctx.prisma.study.delete({
    where: {
      id: arg.id,
    },
  });

  return { success: true };
};

export default deleteStudy;
