import type { MutationResolvers } from '$/types/generated';

const createSponsorEmployee: NonNullable<MutationResolvers['createSponsorEmployee']> = async (
  _parent,
  arg,
  ctx,
) => {
  await ctx.prisma.sponsorEmployee.create({
    data: {
      ...arg.input,
    },
  });

  return { success: true };
};

export default createSponsorEmployee;
