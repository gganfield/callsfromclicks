import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { hashPassword, clientCookieHeader } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { slug, password } = await req.json();

    if (!slug || !password) {
      return NextResponse.json(
        { error: 'slug and password are required' },
        { status: 400 },
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters' },
        { status: 400 },
      );
    }

    const client = await prisma.client.findUnique({ where: { slug } });
    if (!client) {
      return NextResponse.json({ error: 'Client not found' }, { status: 404 });
    }

    if (client.status !== 'pending_first_login') {
      return NextResponse.json(
        { error: 'Password already set' },
        { status: 409 },
      );
    }

    const passwordHash = await hashPassword(password);

    const updated = await prisma.client.update({
      where: { slug },
      data: { passwordHash, status: 'active' },
    });

    const res = NextResponse.json({ success: true });
    res.headers.append('Set-Cookie', clientCookieHeader(updated.id, slug));
    return res;
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
