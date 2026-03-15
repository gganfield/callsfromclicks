import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { computeStatus } from '@/lib/codes';

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ code: string }> },
) {
  const { code } = await params;

  const found = await prisma.code.findUnique({
    where: { code: code.toUpperCase() },
  });

  if (!found) {
    return NextResponse.json({ error: 'Code not found' }, { status: 404 });
  }

  const status = computeStatus(found);

  if (status !== 'unused') {
    return NextResponse.json(
      { error: `Code is ${status}`, status },
      { status: 409 },
    );
  }

  const updated = await prisma.code.update({
    where: { code: code.toUpperCase() },
    data: { status: 'used', usedAt: new Date() },
  });

  return NextResponse.json({ success: true, code: updated });
}
