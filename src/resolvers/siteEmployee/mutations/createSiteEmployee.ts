import type { MutationResolvers } from '$/types/generated';

const createSiteEmployee: NonNullable<MutationResolvers['createSiteEmployee']> = async (
  _parent,
  arg,
  ctx,
) => {
  await ctx.prisma.siteEmployee.create({
    data: {
      ...arg.input,
      specialties: {
        createMany: {
          data: arg.input.specialties,
        },
      },
    },
  });

  return { success: true };
};

export default createSiteEmployee;
