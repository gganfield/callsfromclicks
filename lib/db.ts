import path from 'path';
import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

function buildPrismaClient(): PrismaClient {
  const dbUrl = process.env.DATABASE_URL ?? 'file:./prisma/dev.db';
  const dbFilePath = path.resolve(
    dbUrl.startsWith('file:') ? dbUrl.slice(5) : dbUrl,
  );

  const adapter = new PrismaLibSql({ url: `file:${dbFilePath}` });

  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });
}

export const prisma = globalForPrisma.prisma ?? buildPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
