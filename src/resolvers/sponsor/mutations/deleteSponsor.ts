// import { v4 as uuidv4 } from 'uuid';
import type { MutationResolvers } from '$/types/generated';

const deleteSponsor: NonNullable<MutationResolvers['deleteSponsor']> = async (
  _parent,
  arg,
  ctx,
) => {
  await ctx.prisma.sponsor.delete({
    where: {
      id: arg.id,
    },
  });

  return { success: true };
};

export default deleteSponsor;
