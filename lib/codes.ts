import { prisma } from './db';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function randomSuffix(length = 4): string {
  let out = '';
  for (let i = 0; i < length; i++) {
    out += CHARS[Math.floor(Math.random() * CHARS.length)];
  }
  return out;
}

/** Generate a unique code in the format: 0001-KR-FHDS */
export async function generateUniqueCode(
  clientNumber: string,
  jobTypeShort: string,
): Promise<string> {
  const abbr = jobTypeShort.toUpperCase().slice(0, 3);
  for (let attempt = 0; attempt < 100; attempt++) {
    const code = `${clientNumber}-${abbr}-${randomSuffix()}`;
    const existing = await prisma.code.findUnique({ where: { code } });
    if (!existing) return code;
  }
  throw new Error('Failed to generate a unique code after 100 attempts');
}

/** Suggest a 2-3 char abbreviation from a job type string */
export function suggestJobTypeShort(jobType: string): string {
  const words = jobType.trim().split(/\s+/).filter(Boolean);
  if (words.length === 1) {
    return words[0].slice(0, 3).toUpperCase();
  }
  return words
    .slice(0, 3)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

/** Lazy expiry — if stored status is "unused" but expiresAt passed, return "expired" */
export function computeStatus(code: {
  status: string;
  expiresAt: Date | string;
}): string {
  if (
    code.status === 'unused' &&
    new Date() > new Date(code.expiresAt)
  ) {
    return 'expired';
  }
  return code.status;
}

export type SerializedCode = {
  id: number;
  code: string;
  jobType: string;
  jobTypeShort: string;
  clientName: string;
  amount: string;
  status: string;
  createdAt: string;
  expiresAt: string;
  usedAt: string | null;
  clientId: number;
};

/** Apply lazy expiry and serialize dates for client-side use */
export function serializeCode(code: {
  id: number;
  code: string;
  jobType: string;
  jobTypeShort: string;
  clientName: string;
  amount: string;
  status: string;
  createdAt: Date;
  expiresAt: Date;
  usedAt: Date | null;
  clientId: number;
}): SerializedCode {
  return {
    ...code,
    status: computeStatus(code),
    createdAt: code.createdAt.toISOString(),
    expiresAt: code.expiresAt.toISOString(),
    usedAt: code.usedAt ? code.usedAt.toISOString() : null,
  };
}
