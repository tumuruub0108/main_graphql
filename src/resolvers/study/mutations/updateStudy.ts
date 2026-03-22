import type { MutationResolvers } from '$/types/generated';

const updateStudy: NonNullable<MutationResolvers['updateStudy']> = async (_parent, arg, ctx) => {
  await ctx.prisma.study.update({
    where: { id: arg.id },
    data: arg.input,
  });

  return { success: true };
};

export default updateStudy;
