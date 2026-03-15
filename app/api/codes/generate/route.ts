import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { parseClientToken, CLIENT_COOKIE } from '@/lib/auth';
import { generateUniqueCode } from '@/lib/codes';

export async function POST(req: NextRequest) {
  const token = req.cookies.get(CLIENT_COOKIE)?.value;
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const session = parseClientToken(token);
  if (!session) {
    return NextResponse.json({ error: 'Invalid session' }, { status: 401 });
  }

  try {
    const { slug, jobType, jobTypeShort, clientName, amount } = await req.json();

    if (!slug || !jobType || !jobTypeShort || !clientName || !amount) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 });
    }

    if (session.slug !== slug) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const client = await prisma.client.findUnique({
      where: { id: session.clientId, slug },
    });
    if (!client) {
      return NextResponse.json({ error: 'Client not found' }, { status: 404 });
    }

    const abbr = jobTypeShort.toUpperCase().slice(0, 3);
    const code = await generateUniqueCode(client.clientNumber, abbr);

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);

    const saved = await prisma.code.create({
      data: {
        clientId: client.id,
        code,
        jobType,
        jobTypeShort: abbr,
        clientName,
        amount,
        status: 'unused',
        expiresAt,
      },
    });

    return NextResponse.json(saved, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
