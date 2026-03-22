import { GraphQLError } from 'graphql';
import type { QueryResolvers } from '$/types/generated';

const getEmployee: NonNullable<QueryResolvers['getEmployee']> = async (_parent, arg, ctx) => {
  let employee = await ctx.prisma.siteEmployee.findUnique({
    where: { email: arg.email },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      dateOfBirth: true,
      profile: true,
      phone: true,
      gender: true,
    },
  });
  if (!employee) {
    employee = await ctx.prisma.sponsorEmployee.findUnique({
      where: { email: arg.email },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        dateOfBirth: true,
        profile: true,
        phone: true,
        gender: true,
      },
    });
  }
  if (!employee) {
    return Promise.reject(new GraphQLError('Employee not found'));
  }
  return employee;
};

export default getEmployee;
