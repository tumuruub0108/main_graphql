// import { v4 as uuidv4 } from 'uuid';
import type { MutationResolvers } from '$/types/generated';

const deleteSiteEmployee: NonNullable<MutationResolvers['deleteSiteEmployee']> = async (
  _parent,
  arg,
  ctx,
) => {
  await ctx.prisma.siteEmployee.delete({
    where: {
      id: arg.id,
    },
  });

  return { success: true };
};

export default deleteSiteEmployee;
