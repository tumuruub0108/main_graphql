import { v4 as uuidv4 } from 'uuid';
import type { MutationResolvers } from '$/types/generated';

const createStudy: NonNullable<MutationResolvers['createStudy']> = async (_parent, arg, ctx) => {
  const id = uuidv4();

  await ctx.prisma.study.create({
    data: {
      id: id,
      ...arg.input,
    },
  });

  return { success: true };
};

export default createStudy;
