# Main GraphQL service

This statement means that the service acts as a gateway.

```bash
cp .env.example .env
```

To generate AUTH_SECRET

```bash
openssl rand -base64 32
```


# Graphql
GraphQL: String! (Required)

GraphQL schema to perfectly match your Prisma model



# Prisma
Prisma: String? (Optional)

yarn prisma generate (Generate client (VERY IMPORTANT))
After changing schema.prisma, installing Prisma, fixing config. If something breaks → run this first. this is very important

yarn prisma migrate dev (Run migrations (create DB tables))
creates migration files, updates database, regenerates client

yarn prisma db push (Push schema (NO migrations))
Updates DB directly. use When prototyping, not caring about migration history

yarn prisma migrate reset (Reset database)
Deletes everything and recreates, Useful when debugging, Dangerous (data loss)

yarn prisma format (Format schema)
Cleans your schema.prisma

yarn prisma validate (Validate schema)
Checks for errors without running anything

Minimal command
yarn prisma generate

yarn prisma migrate dev

yarn prisma studio

yarn prisma db push

yarn prisma migrate reset