import { cookies } from 'next/headers';
import { prisma } from '@/lib/db';
import { isAdminAuthenticated, ADMIN_COOKIE } from '@/lib/auth';
import { AdminLoginForm, ClientsTable, CodesTable } from './_components/AdminClient';

export default async function AdminPage() {
  const jar         = await cookies();
  const adminToken  = jar.get(ADMIN_COOKIE)?.value;
  const authed      = isAdminAuthenticated(adminToken);

  if (!authed) {
    return <AdminLoginForm />;
  }

  const [clients, codes] = await Promise.all([
    prisma.client.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.code.findMany({
      orderBy: { createdAt: 'desc' },
      include: { client: { select: { name: true } } },
    }),
  ]);

  // Serialize dates for client components
  const serializedClients = clients.map((c: (typeof clients)[0]) => ({
    ...c,
    createdAt: c.createdAt.toISOString() as unknown as Date,
  }));

  const serializedCodes = codes.map((c) => ({
    ...c,
    createdAt: c.createdAt.toISOString() as unknown as Date,
    expiresAt: c.expiresAt.toISOString() as unknown as Date,
    usedAt: c.usedAt ? (c.usedAt.toISOString() as unknown as Date) : null,
    client: c.client,
  }));

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#060609',
        color: '#f0f0f5',
        padding: '0 24px',
      }}
    >
      {/* Header */}
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          paddingTop: 32,
          paddingBottom: 24,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          marginBottom: 40,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(37,99,235,0.12)',
              border: '1px solid rgba(37,99,235,0.28)',
              borderRadius: 100,
              padding: '4px 12px',
              marginBottom: 10,
            }}
          >
            <span style={{ fontSize: 11, color: '#60a5fa', letterSpacing: '0.06em', fontWeight: 600 }}>
              ADMIN
            </span>
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 800, margin: 0, color: '#f0f0f5' }}>
            Calls From Clicks
          </h1>
        </div>

        <div style={{ display: 'flex', gap: 16, fontSize: 14, color: 'rgba(240,240,245,0.45)' }}>
          <span>{clients.length} clients</span>
          <span>{codes.length} codes</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1100, margin: '0 auto', paddingBottom: 64 }}>
        <ClientsTable clients={serializedClients as never} />
        <CodesTable codes={serializedCodes as never} />
      </div>
    </div>
  );
}
