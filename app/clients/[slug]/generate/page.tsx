import { redirect, notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import { getAuthenticatedClient } from '@/lib/auth';
import GenerateCodeClient from './GenerateCodeClient';

export default async function GeneratePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const client = await prisma.client.findUnique({ where: { slug } });
  if (!client) notFound();

  const authed = await getAuthenticatedClient(slug);
  if (!authed) redirect(`/clients/${slug}`);

  return (
    <GenerateCodeClient slug={slug} clientNumber={authed.clientNumber} />
  );
}
