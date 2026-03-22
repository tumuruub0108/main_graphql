/* eslint-disable n/no-unpublished-import */
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'src/**/*.graphql',
  generates: {
    'src/types/generated.ts': {
      config: {
        enumsAsConst: true,
        useIndexSignature: true,
        nonOptionalTypename: false,
        maybeValue: 'T | null',
        inputMaybeValue: 'T | undefined',
        contextType: '$/types#Context',
        scalars: {
          Date: 'Date',
          DateTime: 'Date',
          Void: 'undefined',
        },
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};

export default config;
