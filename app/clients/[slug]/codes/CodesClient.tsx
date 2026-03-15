'use client';

import { useState } from 'react';
import type { SerializedCode } from '@/lib/code-utils';

type Tab = 'active' | 'used' | 'voided';

interface Props {
  codes: SerializedCode[];
  slug: string;
}

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { label: string; color: string }> = {
    unused:  { label: 'ACTIVE',  color: '#3ecf8e' },
    used:    { label: 'USED',    color: '#4f8ef7' },
    voided:  { label: 'VOIDED',  color: '#f26464' },
    expired: { label: 'EXPIRED', color: 'rgba(240,240,245,0.35)' },
  };
  const { label, color } = map[status] ?? { label: status.toUpperCase(), color: '#f0f0f5' };
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 800,
        letterSpacing: '0.08em',
        color,
        background: `${color}22`,
        border: `1px solid ${color}55`,
        borderRadius: 100,
        padding: '2px 8px',
      }}
    >
      {label}
    </span>
  );
}

function CodeCard({
  code,
  onVoid,
}: {
  code: SerializedCode;
  onVoid?: (code: string) => void;
}) {
  const [voidLoading, setVoidLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleVoid() {
    if (!confirm(`Void code ${code.code}? This cannot be undone.`)) return;
    setVoidLoading(true);
    const res = await fetch(`/api/codes/void/${code.code}`, { method: 'POST' });
    if (res.ok) {
      onVoid?.(code.code);
    } else {
      const data = await res.json();
      alert(data.error ?? 'Failed to void code');
    }
    setVoidLoading(false);
  }

  function handleCopy() {
    navigator.clipboard.writeText(code.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 14,
        padding: '18px 18px 16px',
        marginBottom: 12,
      }}
    >
      {/* Top row: code + copy (active only) + status */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: 20,
              fontWeight: 800,
              color: '#f0f0f5',
              letterSpacing: '0.08em',
            }}
          >
            {code.code}
          </span>
          {code.status === 'unused' && (
            <button
              onClick={handleCopy}
              title="Copy code"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '2px 4px',
                color: copied ? '#3ecf8e' : 'rgba(240,240,245,0.35)',
                display: 'flex',
                alignItems: 'center',
                fontSize: 13,
                fontWeight: 600,
                transition: 'color 0.15s',
              }}
            >
              {copied ? '✓ Copied' : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </button>
          )}
        </div>
        <StatusBadge status={code.status} />
      </div>

      {/* Details grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6px 12px',
          marginBottom: 12,
        }}
      >
        <Detail label="Customer" value={code.clientName} />
        <Detail label="Job Type" value={code.jobType} />
        <Detail label="Amount" value={`$${parseFloat(code.amount || '0').toLocaleString()}`} />
        <Detail label="Created" value={fmt(code.createdAt)} />
        <Detail label="Expires" value={fmt(code.expiresAt)} />
        {code.usedAt && <Detail label="Used" value={fmt(code.usedAt)} />}
      </div>

      {/* Void button (active only) */}
      {code.status === 'unused' && onVoid && (
        <button
          onClick={handleVoid}
          disabled={voidLoading}
          style={{
            width: '100%',
            padding: '10px',
            background: 'rgba(242,100,100,0.1)',
            border: '1px solid rgba(242,100,100,0.3)',
            borderRadius: 8,
            color: '#f26464',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          {voidLoading ? 'Voiding…' : 'Void Code'}
        </button>
      )}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p style={{ fontSize: 11, color: 'rgba(240,240,245,0.38)', margin: '0 0 2px', fontWeight: 600, letterSpacing: '0.04em' }}>
        {label.toUpperCase()}
      </p>
      <p style={{ fontSize: 14, color: '#f0f0f5', margin: 0, fontWeight: 500 }}>{value}</p>
    </div>
  );
}

export default function CodesClient({ codes: initialCodes, slug }: Props) {
  const [codes, setCodes]       = useState(initialCodes);
  const [tab, setTab]           = useState<Tab>('active');
  const [showExpired, setShowExpired] = useState(false);

  function handleVoid(code: string) {
    setCodes((prev) =>
      prev.map((c) => (c.code === code ? { ...c, status: 'voided' } : c)),
    );
  }

  const byTab: Record<Tab, SerializedCode[]> = {
    active: codes.filter((c) => c.status === 'unused'),
    used:   codes.filter((c) => c.status === 'used'),
    voided: codes.filter((c) => c.status === 'voided'),
  };

  const expiredCodes = codes.filter((c) => c.status === 'expired');

  const displayed = byTab[tab];

  return (
    <div style={{ minHeight: '100vh', background: '#060609', color: '#f0f0f5', padding: '0 16px' }}>
      {/* Header */}
      <div style={{ paddingTop: 'env(safe-area-inset-top, 20px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 0 20px' }}>
          <a
            href={`/clients/${slug}`}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8,
              color: '#f0f0f5',
              padding: '8px 12px',
              cursor: 'pointer',
              fontSize: 14,
              textDecoration: 'none',
            }}
          >
            ← Back
          </a>
          <h1 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>My Codes</h1>
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          gap: 4,
          background: 'rgba(255,255,255,0.04)',
          borderRadius: 10,
          padding: 4,
          marginBottom: 20,
        }}
      >
        {(['active', 'used', 'voided'] as Tab[]).map((t) => {
          const count = byTab[t].length;
          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                flex: 1,
                padding: '10px 6px',
                background: tab === t ? 'rgba(37,99,235,0.25)' : 'transparent',
                border: tab === t ? '1px solid rgba(37,99,235,0.4)' : '1px solid transparent',
                borderRadius: 8,
                color: tab === t ? '#60a5fa' : 'rgba(240,240,245,0.45)',
                fontSize: 14,
                fontWeight: tab === t ? 700 : 500,
                cursor: 'pointer',
                textTransform: 'capitalize',
              }}
            >
              {t === 'active' ? 'Active' : t.charAt(0).toUpperCase() + t.slice(1)}
              {count > 0 && (
                <span
                  style={{
                    marginLeft: 6,
                    fontSize: 11,
                    background: tab === t ? 'rgba(37,99,235,0.4)' : 'rgba(255,255,255,0.1)',
                    borderRadius: 100,
                    padding: '1px 6px',
                    color: tab === t ? '#60a5fa' : 'rgba(240,240,245,0.5)',
                  }}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Code list */}
      {displayed.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '48px 16px',
            color: 'rgba(240,240,245,0.35)',
          }}
        >
          <p style={{ fontSize: 16, margin: 0 }}>No {tab} codes</p>
        </div>
      ) : (
        displayed.map((code) => (
          <CodeCard key={code.id} code={code} onVoid={tab === 'active' ? handleVoid : undefined} />
        ))
      )}

      {/* Expired toggle (shown at bottom) */}
      {expiredCodes.length > 0 && (
        <div style={{ marginTop: 24, marginBottom: 32 }}>
          <button
            onClick={() => setShowExpired((v) => !v)}
            style={{
              width: '100%',
              padding: '12px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 10,
              color: 'rgba(240,240,245,0.4)',
              fontSize: 14,
              cursor: 'pointer',
            }}
          >
            {showExpired
              ? `Hide ${expiredCodes.length} expired codes ↑`
              : `Show ${expiredCodes.length} expired codes ↓`}
          </button>

          {showExpired && (
            <div style={{ marginTop: 12 }}>
              {expiredCodes.map((code) => (
                <CodeCard key={code.id} code={code} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
