import type { MutationResolvers } from '$/types/generated';

const deleteSponsorEmployee: NonNullable<MutationResolvers['deleteSponsorEmployee']> = async (
  _parent,
  arg,
  ctx,
) => {
  await ctx.prisma.sponsorEmployee.delete({
    where: {
      id: arg.id,
    },
  });

  return { success: true };
};

export default deleteSponsorEmployee;
