import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { computeStatus } from '@/lib/codes';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ code: string }> },
) {
  const { code } = await params;

  const found = await prisma.code.findUnique({
    where: { code: code.toUpperCase() },
    include: { client: { select: { name: true } } },
  });

  if (!found) {
    return NextResponse.json({ found: false }, { status: 404 });
  }

  const status = computeStatus(found);

  return NextResponse.json({
    found: true,
    id: found.id,
    code: found.code,
    jobType: found.jobType,
    jobTypeShort: found.jobTypeShort,
    clientName: found.clientName,
    amount: found.amount,
    status,
    createdAt: found.createdAt,
    expiresAt: found.expiresAt,
    usedAt: found.usedAt,
    contractorName: found.client.name,
  });
}
