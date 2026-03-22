import type { ZodError } from 'zod';

export const formatErrors = (error: ZodError) => {
  const flattened = error.flatten((issue) => issue.message);

  // flattened.fieldErrors is a Record<string, string[] | undefined>
  return Object.entries(flattened.fieldErrors)
    .map(([name, messages]) => {
      return messages ? `${name}: ${messages}` : '';
    })
    .filter(Boolean);
};

export const queryString = <T extends Record<string, unknown>>(query: T) =>
  new URLSearchParams(
    Object.entries(query).reduce((acc, [key, value]) => {
      if (query[key] === undefined || query[key] === null || query[key] === '') {
        return acc;
      }
      return { ...acc, [key]: value };
    }, {}),
  ).toString();
