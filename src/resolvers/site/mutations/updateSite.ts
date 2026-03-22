import type { MutationResolvers } from '$/types/generated';

const updateSite: NonNullable<MutationResolvers['updateSite']> = async (_parent, arg, ctx) => {
  await ctx.prisma.site.update({
    where: { id: arg.id },
    data: arg.input,
  });

  return { success: true };
};

export default updateSite;
