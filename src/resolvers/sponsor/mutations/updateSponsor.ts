import type { MutationResolvers } from '$/types/generated';

const updateSponsor: NonNullable<MutationResolvers['updateSponsor']> = async (
  _parent,
  arg,
  ctx,
) => {
  await ctx.prisma.sponsor.update({
    where: { id: arg.id },
    data: arg.input,
  });

  return { success: true };
};

export default updateSponsor;
