#!/usr/bin/env node
/**
 * cleanup.js — Delete expired referral codes from the database.
 *
 * Deletes all Code records where:
 *   - status is 'unused'  (lazy-expired: never written as "expired" to DB)
 *   - expiresAt is in the past
 *
 * Usage:
 *   DATABASE_URL=file:./prisma/dev.db node cleanup.js
 *
 * Or with a .env file loaded manually:
 *   node -e "require('dotenv').config({ path: '.env.local' })" cleanup.js
 */

const { PrismaClient } = require('@prisma/client');

async function main() {
  const prisma = new PrismaClient();

  try {
    const now = new Date();

    const result = await prisma.code.deleteMany({
      where: {
        status: 'unused',
        expiresAt: { lt: now },
      },
    });

    console.log(`✓ Deleted ${result.count} expired code${result.count !== 1 ? 's' : ''}.`);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  console.error('Cleanup failed:', err.message);
  process.exit(1);
});
