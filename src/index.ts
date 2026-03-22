import 'module-alias/register';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import { createSchema, createYoga } from 'graphql-yoga';
import helmet from 'helmet';
import morgan from 'morgan';
import createContext from '$/context';
import env from '$/env';
import resolvers from '$/resolvers';

const typeDefs = loadSchemaSync('./src/schemas/**/*.graphql', {
  loaders: [new GraphQLFileLoader()],
});

const yoga = createYoga({
  landingPage: false,
  graphqlEndpoint: '/',
  context: createContext,
  schema: createSchema({ typeDefs, resolvers }),
});

const app = express();

app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: {
      policy: 'credentialless',
    },
  }),
);
app.use(compression());
app.disable('x-powered-by');
app.use(morgan('tiny'));

app.use('/', yoga);

app.listen(env.PORT, () => {
  console.log(`⚡️ Server is running at http://localhost:${env.PORT}`);
});
