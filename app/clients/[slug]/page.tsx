import { notFound } from 'next/navigation';
import Link from 'next/link';
import { prisma } from '@/lib/db';
import { getAuthenticatedClient } from '@/lib/auth';
import LoginForm from './_components/LoginForm';
import SetupPasswordForm from './_components/SetupPasswordForm';

// ── Icon helpers (inline SVG) ──────────────────────────────────────────────

function IconPlus() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function IconList() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

function IconCheckCircle() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

// ── Dashboard UI (server-rendered) ─────────────────────────────────────────

function Dashboard({ client, slug }: { client: { name: string; clientNumber: string }; slug: string }) {
  const actions = [
    {
      href: `/clients/${slug}/generate`,
      icon: <IconPlus />,
      label: 'Generate Referral Code',
      desc: 'Create a new code for a customer',
      color: '#2563EB',
      colorSoft: 'rgba(37,99,235,0.12)',
      colorBorder: 'rgba(37,99,235,0.3)',
    },
    {
      href: `/clients/${slug}/codes`,
      icon: <IconList />,
      label: 'My Code History',
      desc: 'View and manage all your codes',
      color: '#4f8ef7',
      colorSoft: 'rgba(79,142,247,0.12)',
      colorBorder: 'rgba(79,142,247,0.3)',
    },
    {
      href: '/verify',
      icon: <IconCheckCircle />,
      label: 'Verify a Code',
      desc: 'Check and redeem a referral code',
      color: '#3ecf8e',
      colorSoft: 'rgba(62,207,142,0.12)',
      colorBorder: 'rgba(62,207,142,0.3)',
    },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#060609',
        color: '#f0f0f5',
        display: 'flex',
        flexDirection: 'column',
        padding: '0 16px',
      }}
    >
      {/* Header */}
      <div
        style={{
          paddingTop: 'env(safe-area-inset-top, 24px)',
          paddingBottom: 0,
        }}
      >
        <div
          style={{
            padding: '20px 0 0',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            marginBottom: 32,
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(37,99,235,0.12)',
              border: '1px solid rgba(37,99,235,0.28)',
              borderRadius: 100,
              padding: '5px 14px',
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 11, color: '#60a5fa', letterSpacing: '0.06em', fontWeight: 600 }}>
              CALLS FROM CLICKS
            </span>
          </div>

          <h1
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: '#f0f0f5',
              margin: 0,
              marginBottom: 4,
            }}
          >
            {client.name}
          </h1>
          <p style={{ fontSize: 14, color: 'rgba(240,240,245,0.45)', margin: 0, marginBottom: 20 }}>
            Client #{client.clientNumber}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.08em',
            color: 'rgba(240,240,245,0.4)',
            marginBottom: 14,
          }}
        >
          QUICK ACTIONS
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {actions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${action.colorBorder}`,
                  borderRadius: 14,
                  padding: '20px 20px',
                  cursor: 'pointer',
                  transition: 'background 0.15s',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: action.colorSoft,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: action.color,
                    flexShrink: 0,
                  }}
                >
                  {action.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: '#f0f0f5',
                      marginBottom: 3,
                    }}
                  >
                    {action.label}
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(240,240,245,0.45)' }}>
                    {action.desc}
                  </div>
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(240,240,245,0.3)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: '24px 0',
          paddingBottom: 'max(24px, env(safe-area-inset-bottom, 24px))',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: 12, color: 'rgba(240,240,245,0.22)' }}>
          callsfromclicks.com
        </p>
      </div>
    </div>
  );
}

// ── Page entry ─────────────────────────────────────────────────────────────

export default async function ClientPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const client = await prisma.client.findUnique({ where: { slug } });
  if (!client) notFound();

  const authed = await getAuthenticatedClient(slug);

  if (authed) {
    return <Dashboard client={authed} slug={slug} />;
  }

  if (client.status === 'pending_first_login') {
    return <SetupPasswordForm slug={slug} clientName={client.name} />;
  }

  return <LoginForm slug={slug} clientName={client.name} />;
}
