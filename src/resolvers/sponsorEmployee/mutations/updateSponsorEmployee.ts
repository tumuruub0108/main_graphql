import type { MutationResolvers } from '$/types/generated';

const updateSponsorEmployee: NonNullable<MutationResolvers['updateSponsorEmployee']> = async (
  _parent,
  arg,
  ctx,
) => {
  await ctx.prisma.sponsorEmployee.update({
    where: { id: arg.id },
    data: arg.input,
  });

  return { success: true };
};

export default updateSponsorEmployee;
