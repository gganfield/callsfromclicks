// Browser-safe utility functions — no Prisma imports

export type SerializedCode = {
  id: string;
  code: string;
  clientId: string;
  jobType: string;
  jobTypeShort: string;
  clientName: string;
  amount: number;
  status: string;
  createdAt: string;
  expiresAt: string;
  usedAt: string | null;
};

export function suggestJobTypeShort(jobType: string): string {
  const words = jobType.trim().split(/\s+/);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return jobType.slice(0, 2).toUpperCase();
}

export function computeStatus(status: string, expiresAt: string): string {
  if (status === 'used' || status === 'voided') return status;
  if (new Date(expiresAt) < new Date()) return 'expired';
  return status;
}
