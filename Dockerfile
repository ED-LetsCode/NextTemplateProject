#syntax=docker/dockerfile:1.4
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY --link package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps --link /app/node_modules ./node_modules
COPY --link  . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Disable next telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Generate prisma client
RUN npx prisma generate

# If using npm comment out above and use below instead
RUN npm run build

# Create Logs folder
RUN mkdir -p /app/logs

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Disable next telemetry
ENV NEXT_TELEMETRY_DISABLED 1

RUN \
  addgroup --system --gid 1001 nodejs; \
  adduser --system --uid 1001 nextjs

COPY --from=builder --link /app/public ./public

# Copy the environment file
COPY .env ./.env.local

COPY --from=builder --link --chown=1001:1001 /app/.next/standalone ./
COPY --from=builder --link --chown=1001:1001 /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME localhost

CMD ["node", "server.js"]