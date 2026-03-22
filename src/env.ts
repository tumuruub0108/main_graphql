import dotenv from 'dotenv';
import { z } from 'zod';
import { formatErrors } from '$/utils';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.string().default('8080').transform(Number),
});

const _envs = envSchema.safeParse(process.env);

if (!_envs.success) {
  console.error(formatErrors(_envs.error.format()).join('\n'));
  throw new Error('❌ Invalid environment variables:');
}

const env = _envs.data;
export default env;
