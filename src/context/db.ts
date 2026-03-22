import { PrismaClient } from '@prisma/client';
import env from '$/env';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// Create PostgreSQL pool
const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

// Create Prisma adapter
const adapter = new PrismaPg(pool);


const prisma = new PrismaClient({
  adapter,
  log: env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

export default prisma;
