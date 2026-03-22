import type { ZodFormattedError } from 'zod';

export const formatErrors = (errors: ZodFormattedError<Map<string, string>, string>) =>
  Object.entries(errors)
    .map(([name, value]) => {
      if (value && '_errors' in value) {
        return `${name}: ${value._errors.join(', ')}`;
      }
      return '';
    })
    .filter(Boolean);

export const queryString = <T extends Record<string, unknown>>(query: T) =>
  new URLSearchParams(
    Object.entries(query).reduce((acc, [key, value]) => {
      if (query[key] === undefined || query[key] === null || query[key] === '') {
        return acc;
      }
      return { ...acc, [key]: value };
    }, {}),
  ).toString();
