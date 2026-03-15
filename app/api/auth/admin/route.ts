import { NextRequest, NextResponse } from 'next/server';
import { adminCookieHeader } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (!password) {
      return NextResponse.json({ error: 'Password required' }, { status: 400 });
    }

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    const res = NextResponse.json({ success: true });
    res.headers.append('Set-Cookie', adminCookieHeader());
    return res;
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
