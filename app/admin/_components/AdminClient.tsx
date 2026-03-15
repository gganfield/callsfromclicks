'use client';

import { useState } from 'react';


// ── Admin Login Form ────────────────────────────────────────────────────────

export function AdminLoginForm() {
  const [password, setPassword]       = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError]             = useState('');
  const [loading, setLoading]         = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await fetch('/api/auth/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      window.location.reload();
    } else {
      const data = await res.json();
      setError(data.error ?? 'Invalid password');
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#060609',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 380,
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 16,
          padding: '32px 24px',
        }}
      >
        <h1 style={{ fontSize: 22, fontWeight: 700, color: '#f0f0f5', textAlign: 'center', marginBottom: 24 }}>
          Admin Access
        </h1>
        <form onSubmit={handleSubmit}>
          <div style={{ position: 'relative', marginBottom: 8 }}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin password"
              autoFocus
              style={{
                width: '100%',
                padding: '14px 48px 14px 16px',
                background: 'rgba(255,255,255,0.06)',
                border: error ? '1px solid rgba(242,100,100,0.6)' : '1px solid rgba(255,255,255,0.12)',
                borderRadius: 10,
                color: '#f0f0f5',
                fontSize: 16,
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              style={{
                position: 'absolute',
                right: 14,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 4,
                color: 'rgba(240,240,245,0.45)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {showPassword ? (
                // Eye-off
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                // Eye
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
          {error && <p style={{ fontSize: 13, color: '#f26464', marginBottom: 12 }}>{error}</p>}
          <button
            type="submit"
            disabled={loading || !password}
            style={{
              width: '100%',
              padding: '14px',
              background: '#2563EB',
              color: '#fff',
              border: 'none',
              borderRadius: 10,
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer',
              marginTop: 8,
            }}
          >
            {loading ? 'Checking…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}

// ── New Client Form ─────────────────────────────────────────────────────────

interface NewClientFormProps {
  onCreated: (client: Client) => void;
}

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function NewClientForm({ onCreated }: NewClientFormProps) {
  const [name, setName]   = useState('');
  const [phone, setPhone] = useState('');
  const [slug, setSlug]   = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  // Auto-suggest slug from name
  function handleNameChange(val: string) {
    setName(val);
    if (!slug || slug === slugify(name)) {
      setSlug(slugify(val));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    const res = await fetch('/api/clients/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '',  // admin bypasses key — see note below
      },
      body: JSON.stringify({ name, phone, slug }),
    });

    // Admin page calls create directly with admin cookie validation
    if (res.ok) {
      const client = await res.json() as Client;
      onCreated(client);
      setSuccess(`Client "${client.name}" created. Dashboard: /clients/${client.slug}`);
      setName(''); setPhone(''); setSlug('');
    } else {
      const data = await res.json();
      setError(data.error ?? 'Failed to create client');
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
        <div>
          <label style={labelSt}>NAME</label>
          <input
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            placeholder="Business name"
            required
            style={inpSt}
          />
        </div>
        <div>
          <label style={labelSt}>PHONE</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="555-000-0000"
            required
            style={inpSt}
          />
        </div>
      </div>
      <div style={{ marginBottom: 12 }}>
        <label style={labelSt}>
          SLUG{' '}
          <span style={{ color: 'rgba(240,240,245,0.35)', fontWeight: 400 }}>
            (URL: /clients/{slug || '…'})
          </span>
        </label>
        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
          placeholder="auto-from-name"
          required
          style={inpSt}
        />
      </div>

      {error   && <p style={{ color: '#f26464', fontSize: 13, marginBottom: 8 }}>{error}</p>}
      {success && <p style={{ color: '#3ecf8e', fontSize: 13, marginBottom: 8 }}>{success}</p>}

      <button
        type="submit"
        disabled={loading || !name || !phone || !slug}
        style={{
          padding: '10px 20px',
          background: '#2563EB',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 700,
          cursor: 'pointer',
        }}
      >
        {loading ? 'Creating…' : '+ Create Client'}
      </button>
    </form>
  );
}

// ── Clients Table ────────────────────────────────────────────────────────────

export function ClientsTable({ clients: initialClients }: { clients: Client[] }) {
  const [clients, setClients] = useState(initialClients);

  function handleCreated(client: Client) {
    setClients((prev) => [client, ...prev]);
  }

  return (
    <section style={{ marginBottom: 48 }}>
      <h2 style={sectionTitle}>Clients</h2>

      {/* New client form */}
      <div
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 12,
          padding: '20px',
          marginBottom: 24,
        }}
      >
        <h3 style={{ fontSize: 15, fontWeight: 700, color: '#f0f0f5', marginBottom: 16 }}>
          New Client
        </h3>
        <NewClientFormInner onCreated={handleCreated} />
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr>
              {['#', 'Name', 'Phone', 'Slug', 'Status', 'Created', 'Dashboard'].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: '10px 14px',
                    textAlign: 'left',
                    color: 'rgba(240,240,245,0.45)',
                    fontWeight: 600,
                    fontSize: 12,
                    letterSpacing: '0.05em',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {clients.map((c) => (
              <tr
                key={c.id}
                style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              >
                <Td>{c.clientNumber}</Td>
                <Td><strong style={{ color: '#f0f0f5' }}>{c.name}</strong></Td>
                <Td>{c.phone}</Td>
                <Td><code style={{ fontSize: 12, color: '#60a5fa' }}>{c.slug}</code></Td>
                <Td>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: 100,
                      background: c.status === 'active' ? 'rgba(62,207,142,0.15)' : 'rgba(245,166,35,0.15)',
                      color: c.status === 'active' ? '#3ecf8e' : '#f5a623',
                      border: `1px solid ${c.status === 'active' ? 'rgba(62,207,142,0.3)' : 'rgba(245,166,35,0.3)'}`,
                    }}
                  >
                    {c.status === 'active' ? 'Active' : 'Pending Setup'}
                  </span>
                </Td>
                <Td>{new Date(c.createdAt).toLocaleDateString()}</Td>
                <Td>
                  <a
                    href={`/clients/${c.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#60a5fa', fontSize: 13 }}
                  >
                    Open ↗
                  </a>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
        {clients.length === 0 && (
          <p style={{ color: 'rgba(240,240,245,0.35)', fontSize: 14, padding: 16 }}>No clients yet</p>
        )}
      </div>
    </section>
  );
}

// ── Codes Table ────────────────────────────────────────────────────────────

type CodeWithClient = Code & { client: { name: string } };
type SortKey = 'createdAt' | 'status' | 'client';

export function CodesTable({ codes: initialCodes }: { codes: CodeWithClient[] }) {
  const [sortKey, setSortKey] = useState<SortKey>('createdAt');
  const [sortAsc, setSortAsc] = useState(false);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortAsc((v) => !v);
    } else {
      setSortKey(key);
      setSortAsc(false);
    }
  }

  const sorted = [...initialCodes].sort((a, b) => {
    let va: string, vb: string;
    if (sortKey === 'createdAt') {
      va = a.createdAt.toString();
      vb = b.createdAt.toString();
    } else if (sortKey === 'status') {
      va = a.status;
      vb = b.status;
    } else {
      va = a.client.name;
      vb = b.client.name;
    }
    return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
  });

  function SortHeader({ label, k }: { label: string; k: SortKey }) {
    const active = sortKey === k;
    return (
      <th
        onClick={() => toggleSort(k)}
        style={{
          padding: '10px 14px',
          textAlign: 'left',
          color: active ? '#60a5fa' : 'rgba(240,240,245,0.45)',
          fontWeight: 600,
          fontSize: 12,
          letterSpacing: '0.05em',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          cursor: 'pointer',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        {label} {active ? (sortAsc ? '↑' : '↓') : ''}
      </th>
    );
  }

  return (
    <section>
      <h2 style={sectionTitle}>All Codes ({initialCodes.length})</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr>
              <SortHeader label="Client" k="client" />
              <th style={plainTh}>Code</th>
              <th style={plainTh}>Job Type</th>
              <th style={plainTh}>Customer</th>
              <th style={plainTh}>Amount</th>
              <SortHeader label="Status" k="status" />
              <SortHeader label="Created" k="createdAt" />
              <th style={plainTh}>Expires</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((c) => {
              // Lazy expiry
              const status =
                c.status === 'unused' && new Date() > new Date(c.expiresAt)
                  ? 'expired'
                  : c.status;

              const statusColors: Record<string, string> = {
                unused: '#3ecf8e',
                used:   '#4f8ef7',
                voided: '#f26464',
                expired:'rgba(240,240,245,0.35)',
              };

              return (
                <tr key={c.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <Td>{c.client.name}</Td>
                  <Td>
                    <code style={{ fontFamily: 'monospace', fontSize: 13, color: '#f0f0f5', fontWeight: 700 }}>
                      {c.code}
                    </code>
                  </Td>
                  <Td>{c.jobType}</Td>
                  <Td>{c.clientName}</Td>
                  <Td>${parseFloat(c.amount || '0').toLocaleString()}</Td>
                  <Td>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: 100,
                        background: `${statusColors[status]}1a`,
                        color: statusColors[status],
                        border: `1px solid ${statusColors[status]}44`,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {status}
                    </span>
                  </Td>
                  <Td>{new Date(c.createdAt).toLocaleDateString()}</Td>
                  <Td>{new Date(c.expiresAt).toLocaleDateString()}</Td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {sorted.length === 0 && (
          <p style={{ color: 'rgba(240,240,245,0.35)', fontSize: 14, padding: 16 }}>No codes yet</p>
        )}
      </div>
    </section>
  );
}

// ── Inline form helper (to avoid closure issues with useState) ──────────────

function NewClientFormInner({ onCreated }: { onCreated: (c: Client) => void }) {
  const [name, setName]   = useState('');
  const [phone, setPhone] = useState('');
  const [slug, setSlug]   = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  function handleNameChange(val: string) {
    setName(val);
    const suggested = slugify(val);
    setSlug(suggested);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    const res = await fetch('/api/admin/create-client', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, slug }),
    });

    if (res.ok) {
      const client = await res.json() as Client;
      onCreated(client);
      setSuccess(`Created! Dashboard: /clients/${client.slug}`);
      setName(''); setPhone(''); setSlug('');
    } else {
      const data = await res.json();
      setError(data.error ?? 'Failed to create client');
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10, marginBottom: 10 }}>
        <div>
          <label style={labelSt}>BUSINESS NAME</label>
          <input value={name} onChange={(e) => handleNameChange(e.target.value)} placeholder="Acme Plumbing" required style={inpSt} />
        </div>
        <div>
          <label style={labelSt}>PHONE</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="555-000-0000" required style={inpSt} />
        </div>
        <div>
          <label style={labelSt}>SLUG</label>
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
            placeholder="acme-plumbing"
            required
            style={inpSt}
          />
        </div>
      </div>

      {error   && <p style={{ color: '#f26464', fontSize: 13, marginBottom: 8 }}>{error}</p>}
      {success && <p style={{ color: '#3ecf8e', fontSize: 13, marginBottom: 8 }}>{success}</p>}

      <button
        type="submit"
        disabled={loading || !name || !phone || !slug}
        style={{
          padding: '10px 20px',
          background: '#2563EB',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 700,
          cursor: 'pointer',
        }}
      >
        {loading ? 'Creating…' : '+ Create Client'}
      </button>
    </form>
  );
}

// ── Shared mini styles ─────────────────────────────────────────────────────

const labelSt: React.CSSProperties = {
  display: 'block',
  fontSize: 11,
  fontWeight: 700,
  color: 'rgba(240,240,245,0.45)',
  letterSpacing: '0.06em',
  marginBottom: 6,
};

const inpSt: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 8,
  color: '#f0f0f5',
  fontSize: 14,
  outline: 'none',
  boxSizing: 'border-box',
};

const sectionTitle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  color: '#f0f0f5',
  marginBottom: 20,
  borderBottom: '1px solid rgba(255,255,255,0.08)',
  paddingBottom: 12,
};

const plainTh: React.CSSProperties = {
  padding: '10px 14px',
  textAlign: 'left',
  color: 'rgba(240,240,245,0.45)',
  fontWeight: 600,
  fontSize: 12,
  letterSpacing: '0.05em',
  borderBottom: '1px solid rgba(255,255,255,0.08)',
};

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td style={{ padding: '10px 14px', color: 'rgba(240,240,245,0.75)', verticalAlign: 'middle' }}>
      {children}
    </td>
  );
}

