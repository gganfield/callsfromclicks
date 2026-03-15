import path from 'path';
import { defineConfig } from 'prisma/config';

const dbUrl = process.env.DATABASE_URL ?? 'file:./prisma/dev.db';
const dbFilePath = path.resolve(
  dbUrl.startsWith('file:') ? dbUrl.slice(5) : dbUrl,
);

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    url: `file:${dbFilePath}`,
  },
});
