import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { parseClientToken, CLIENT_COOKIE } from '@/lib/auth';
import { computeStatus } from '@/lib/codes';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ code: string }> },
) {
  const token = req.cookies.get(CLIENT_COOKIE)?.value;
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const session = parseClientToken(token);
  if (!session) {
    return NextResponse.json({ error: 'Invalid session' }, { status: 401 });
  }

  const { code } = await params;

  const found = await prisma.code.findUnique({
    where: { code: code.toUpperCase() },
  });

  if (!found) {
    return NextResponse.json({ error: 'Code not found' }, { status: 404 });
  }

  if (found.clientId !== session.clientId) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const status = computeStatus(found);
  if (status !== 'unused') {
    return NextResponse.json(
      { error: 'Only unused codes can be voided', status },
      { status: 409 },
    );
  }

  const updated = await prisma.code.update({
    where: { code: code.toUpperCase() },
    data: { status: 'voided' },
  });

  return NextResponse.json({ success: true, code: updated });
}
