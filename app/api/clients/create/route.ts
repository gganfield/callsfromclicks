import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(req: NextRequest) {
  // API key guard
  const apiKey = req.headers.get('x-api-key');
  if (!apiKey || apiKey !== process.env.CLIENTS_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { name, phone, slug } = await req.json();

    if (!name || !phone || !slug) {
      return NextResponse.json(
        { error: 'name, phone, and slug are required' },
        { status: 400 },
      );
    }

    const slugClean = slug.toLowerCase().replace(/[^a-z0-9-]/g, '-');

    const existing = await prisma.client.findUnique({ where: { slug: slugClean } });
    if (existing) {
      return NextResponse.json({ error: 'Slug already taken' }, { status: 409 });
    }

    // Assign the next clientNumber (1-indexed, padded to 4 digits)
    const count = await prisma.client.count();
    const clientNumber = String(count + 1).padStart(4, '0');

    const client = await prisma.client.create({
      data: {
        clientNumber,
        slug: slugClean,
        name,
        phone,
        status: 'pending_first_login',
      },
    });

    return NextResponse.json(client, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
