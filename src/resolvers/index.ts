import { DateResolver, DateTimeResolver, VoidResolver } from 'graphql-scalars';
import type { Context } from '$/types';
import type { Resolvers } from '$/types/generated';
import employee from './employee';


import createEmployee from './employee/mutations/createEmployee'
import deleteEmployee from './employee/mutations/deleteEmployee'
import updateEmployee from './employee/mutations/updateEmployee'
import getEmployee from './employee/queries/getEmployee';
import listEmployee from './employee/queries/listEmployee';

const resolvers: Resolvers<Context> = {
  Void: VoidResolver,
  Date: DateResolver,
  DateTime: DateTimeResolver,
  Query: {
    listEmployee: listEmployee,
    getEmployee: getEmployee,
  },
  Mutation: {
    createEmployee: createEmployee,
    deleteEmployee: deleteEmployee,
    updateEmployee: updateEmployee,
  },

  Employee: employee
};

export default resolvers;
