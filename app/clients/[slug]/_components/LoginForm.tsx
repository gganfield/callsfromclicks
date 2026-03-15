'use client';

import { useState } from 'react';

interface Props {
  slug: string;
  clientName: string;
}

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

export default function LoginForm({ slug, clientName }: Props) {
  const [password, setPassword]         = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError]               = useState('');
  const [loading, setLoading]           = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, password }),
    });

    if (res.ok) {
      window.location.reload();
    } else {
      const data = await res.json();
      setError(data.error ?? 'Login failed');
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#060609',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
      }}
    >
      {/* Logo / App label */}
      <div style={{ marginBottom: 8, textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(37,99,235,0.12)',
            border: '1px solid rgba(37,99,235,0.28)',
            borderRadius: 100,
            padding: '6px 16px',
            marginBottom: 24,
          }}
        >
          <span style={{ fontSize: 12, color: '#60a5fa', letterSpacing: '0.06em', fontWeight: 600 }}>
            CALLS FROM CLICKS
          </span>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: 400,
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 16,
          padding: '32px 24px',
        }}
      >
        <h1
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: '#f0f0f5',
            marginBottom: 6,
            textAlign: 'center',
          }}
        >
          Welcome back
        </h1>
        <p
          style={{
            fontSize: 15,
            color: 'rgba(240,240,245,0.52)',
            textAlign: 'center',
            marginBottom: 28,
          }}
        >
          {clientName}
        </p>

        <form onSubmit={handleSubmit}>
          <label
            style={{
              display: 'block',
              fontSize: 13,
              fontWeight: 600,
              color: 'rgba(240,240,245,0.7)',
              marginBottom: 8,
              letterSpacing: '0.04em',
            }}
          >
            PASSWORD
          </label>
          <div style={{ position: 'relative', marginBottom: 8 }}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              autoFocus
              style={{
                width: '100%',
                padding: '14px 48px 14px 16px',
                background: 'rgba(255,255,255,0.06)',
                border: error
                  ? '1px solid rgba(242,100,100,0.6)'
                  : '1px solid rgba(255,255,255,0.12)',
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
              <EyeIcon open={!showPassword} />
            </button>
          </div>

          {error && (
            <p
              style={{
                fontSize: 13,
                color: '#f26464',
                marginBottom: 16,
                marginTop: 4,
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            style={{
              width: '100%',
              padding: '16px',
              background: loading || !password ? 'rgba(37,99,235,0.4)' : '#2563EB',
              color: '#fff',
              border: 'none',
              borderRadius: 10,
              fontSize: 17,
              fontWeight: 700,
              cursor: loading || !password ? 'not-allowed' : 'pointer',
              marginTop: 8,
              transition: 'background 0.15s',
            }}
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
