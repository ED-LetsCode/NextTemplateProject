import { PrismaClient } from "@prisma/client";

// A Global Prisma client instance. Everytime you import prisma from '@prisma/client',
// the same client instance will be reused.
// https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices

declare global {
  //   eslint-disable-next-line no-var, no-unused-vars
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
