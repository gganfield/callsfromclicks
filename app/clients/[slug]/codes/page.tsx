import { redirect, notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import { getAuthenticatedClient } from '@/lib/auth';
import { serializeCode } from '@/lib/codes';
import CodesClient from './CodesClient';

export default async function CodesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const client = await prisma.client.findUnique({ where: { slug } });
  if (!client) notFound();

  const authed = await getAuthenticatedClient(slug);
  if (!authed) redirect(`/clients/${slug}`);

  const rawCodes = await prisma.code.findMany({
    where: { clientId: authed.id },
    orderBy: { createdAt: 'desc' },
  });

  const codes = rawCodes.map(serializeCode) as any[];

  return <CodesClient codes={codes} slug={slug} />;
}
