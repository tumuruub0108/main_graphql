import type { MutationResolvers } from '$/types/generated';

const updateSiteEmployee: NonNullable<MutationResolvers['updateSiteEmployee']> = async (
  _parent,
  arg,
  ctx,
) => {
  await ctx.prisma.siteEmployee.update({
    where: { id: arg.id },
    data: { specialties: { deleteMany: {} } },
  });
  await ctx.prisma.siteEmployee.update({
    where: { id: arg.id },
    data: {
      ...arg.input,
      specialties: {
        createMany: {
          data: arg.input.specialties ?? [],
        },
      },
    },
  });

  return { success: true };
};

export default updateSiteEmployee;
