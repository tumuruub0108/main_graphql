FROM node:18-alpine3.16 AS deps
WORKDIR /app
COPY package.json yarn.lock* ./
RUN yarn --frozen-lockfilex

FROM node:18-alpine3.16 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn generate && yarn prisma generate && yarn build

FROM node:18-alpine3.16 AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 yoga
COPY --from=builder --chown=yoga:nodejs /app/dist ./
COPY --from=builder --chown=yoga:nodejs /app/src/schemas ./src/schemas
COPY --from=builder --chown=yoga:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=yoga:nodejs /app/package.json ./package.json
USER yoga
EXPOSE 8081
CMD ["yarn", "start"]
