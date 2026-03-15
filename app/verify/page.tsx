'use client';

import { useState, useRef } from 'react';

type VerifyState =
  | { stage: 'idle' }
  | { stage: 'loading' }
  | { stage: 'found'; data: CodeData }
  | { stage: 'not_found' }
  | { stage: 'redeeming' }
  | { stage: 'redeemed'; data: CodeData }
  | { stage: 'error'; message: string };

interface CodeData {
  code: string;
  jobType: string;
  clientName: string;
  amount: string;
  status: string;
  expiresAt: string;
  usedAt: string | null;
  contractorName: string;
}

function fmt(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 20px',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <span style={{ fontSize: 14, color: 'rgba(240,240,245,0.5)' }}>{label}</span>
      <span style={{ fontSize: 16, fontWeight: 600, color: '#f0f0f5', textAlign: 'right', maxWidth: '60%' }}>{value}</span>
    </div>
  );
}

export default function VerifyPage() {
  const [input, setInput]     = useState('');
  const [state, setState]     = useState<VerifyState>({ stage: 'idle' });
  const inputRef              = useRef<HTMLInputElement>(null);

  function clear() {
    setInput('');
    setState({ stage: 'idle' });
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  async function handleVerify() {
    const code = input.trim().toUpperCase();
    if (!code) return;

    setState({ stage: 'loading' });

    const res = await fetch(`/api/codes/verify/${encodeURIComponent(code)}`);
    if (!res.ok) {
      setState({ stage: 'not_found' });
      return;
    }

    const data = await res.json();
    if (!data.found) {
      setState({ stage: 'not_found' });
      return;
    }

    setState({ stage: 'found', data });
  }

  async function handleRedeem() {
    if (state.stage !== 'found') return;
    setState({ stage: 'redeeming' });

    const res = await fetch(`/api/codes/redeem/${encodeURIComponent(state.data.code)}`, {
      method: 'POST',
    });

    if (res.ok) {
      setState({ stage: 'redeemed', data: state.data });
    } else {
      const json = await res.json();
      setState({ stage: 'error', message: json.error ?? 'Failed to redeem code' });
    }
  }

  // ── Render ───────────────────────────────────────────────────────────────

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: '#060609',
    color: '#f0f0f5',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 16px',
    paddingTop: 'env(safe-area-inset-top, 0px)',
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={{ padding: '28px 0 0', marginBottom: 32 }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(37,99,235,0.12)',
            border: '1px solid rgba(37,99,235,0.28)',
            borderRadius: 100,
            padding: '5px 14px',
            marginBottom: 18,
          }}
        >
          <span style={{ fontSize: 11, color: '#60a5fa', letterSpacing: '0.06em', fontWeight: 600 }}>
            CALLS FROM CLICKS
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
          <button
            onClick={() => window.history.back()}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8,
              color: '#f0f0f5',
              padding: '8px 12px',
              cursor: 'pointer',
              fontSize: 14,
              flexShrink: 0,
            }}
          >
            ← Back
          </button>
          <h1 style={{ fontSize: 30, fontWeight: 800, margin: 0 }}>
            Verify Code
          </h1>
        </div>
        <p style={{ fontSize: 16, color: 'rgba(240,240,245,0.45)', margin: 0 }}>
          Enter a referral code to check its status
        </p>
      </div>

      {/* Input */}
      <div style={{ position: 'relative', marginBottom: 16 }}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value.toUpperCase());
            if (state.stage !== 'idle') setState({ stage: 'idle' });
          }}
          onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
          placeholder="e.g. 0001-KR-FHDS"
          autoCapitalize="characters"
          autoCorrect="off"
          autoComplete="off"
          spellCheck={false}
          style={{
            width: '100%',
            padding: '20px 60px 20px 20px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 14,
            color: '#f0f0f5',
            fontSize: 22,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '0.1em',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
        {input.length > 0 && (
          <button
            onClick={clear}
            style={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '50%',
              width: 32,
              height: 32,
              color: 'rgba(240,240,245,0.6)',
              fontSize: 18,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: 1,
            }}
            aria-label="Clear"
          >
            ×
          </button>
        )}
      </div>

      {/* Verify button */}
      <button
        onClick={handleVerify}
        disabled={!input.trim() || state.stage === 'loading'}
        style={{
          width: '100%',
          padding: '20px',
          background:
            !input.trim() || state.stage === 'loading'
              ? 'rgba(37,99,235,0.35)'
              : '#2563EB',
          color: '#fff',
          border: 'none',
          borderRadius: 14,
          fontSize: 20,
          fontWeight: 800,
          cursor: !input.trim() ? 'not-allowed' : 'pointer',
          marginBottom: 32,
          letterSpacing: '0.02em',
        }}
      >
        {state.stage === 'loading' ? 'Checking…' : 'Verify Code'}
      </button>

      {/* Results ──────────────────────────────────────────────────────────── */}

      {/* Not found */}
      {state.stage === 'not_found' && (
        <ResultCard color="#f26464">
          <BigIcon color="#f26464">✕</BigIcon>
          <h2 style={resultTitle}>Code Not Found</h2>
          <p style={resultSub}>
            "{input.trim()}" doesn't match any code in our system. Check the code and try again.
          </p>
          <BackButton />
        </ResultCard>
      )}

      {/* Error */}
      {state.stage === 'error' && (
        <ResultCard color="#f26464">
          <BigIcon color="#f26464">!</BigIcon>
          <h2 style={resultTitle}>Something went wrong</h2>
          <p style={resultSub}>{state.message}</p>
          <BackButton />
        </ResultCard>
      )}

      {/* Found — show details + redeem button */}
      {state.stage === 'found' && (() => {
        const { data } = state;

        if (data.status === 'used') {
          return (
            <ResultCard color="#f26464">
              <BigIcon color="#f26464">✕</BigIcon>
              <h2 style={resultTitle}>Already Used</h2>
              <p style={resultSub}>
                This code was redeemed{data.usedAt ? ` on ${fmt(data.usedAt)}` : ''}.
              </p>
              <CodeDetails data={data} />
              <BackButton />
            </ResultCard>
          );
        }

        if (data.status === 'voided') {
          return (
            <ResultCard color="#f26464">
              <BigIcon color="#f26464">⊘</BigIcon>
              <h2 style={resultTitle}>Code Voided</h2>
              <p style={resultSub}>This code has been voided and cannot be used.</p>
              <CodeDetails data={data} />
              <BackButton />
            </ResultCard>
          );
        }

        if (data.status === 'expired') {
          return (
            <ResultCard color="rgba(240,240,245,0.3)">
              <BigIcon color="rgba(240,240,245,0.4)">⏱</BigIcon>
              <h2 style={resultTitle}>Code Expired</h2>
              <p style={resultSub}>This code expired on {fmt(data.expiresAt)}.</p>
              <CodeDetails data={data} />
              <BackButton />
            </ResultCard>
          );
        }

        // Valid / unused
        return (
          <ResultCard color="#3ecf8e">
            <CodeDetails data={data} />
            <button
              onClick={handleRedeem}
              style={{
                width: '100%',
                padding: '22px',
                background: '#3ecf8e',
                color: '#060609',
                border: 'none',
                borderRadius: 14,
                fontSize: 20,
                fontWeight: 800,
                cursor: 'pointer',
                marginTop: 20,
                letterSpacing: '0.01em',
              }}
            >
              ✓ Confirm — Mark as Used
            </button>
          </ResultCard>
        );
      })()}

      {/* Redeemed success */}
      {(state.stage === 'redeemed' || state.stage === 'redeeming') && (
        <ResultCard color="#3ecf8e">
          <BigIcon color="#3ecf8e">✓</BigIcon>
          <h2 style={resultTitle}>Code Redeemed!</h2>
          <p style={resultSub}>
            {state.stage === 'redeeming' ? 'Marking as used…' : 'This code has been successfully marked as used.'}
          </p>
          {state.stage === 'redeemed' && <CodeDetails data={state.data} />}
          {state.stage === 'redeemed' && (
            <>
              <button
                onClick={clear}
                style={{
                  width: '100%',
                  padding: '16px',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 12,
                  color: '#f0f0f5',
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginTop: 16,
                }}
              >
                Verify Another Code
              </button>
              <BackButton />
            </>
          )}
        </ResultCard>
      )}

      {/* Footer */}
      <div style={{ flex: 1 }} />
      <div style={{ padding: '24px 0', textAlign: 'center', paddingBottom: 'max(24px, env(safe-area-inset-bottom, 24px))' }}>
        <p style={{ fontSize: 12, color: 'rgba(240,240,245,0.2)', margin: 0 }}>callsfromclicks.com</p>
      </div>
    </div>
  );
}

// ── Shared sub-components ──────────────────────────────────────────────────

function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      style={{
        width: '100%',
        padding: '14px',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 12,
        color: 'rgba(240,240,245,0.6)',
        fontSize: 15,
        fontWeight: 600,
        cursor: 'pointer',
        marginTop: 10,
        letterSpacing: '0.01em',
      }}
    >
      ← Back to Dashboard
    </button>
  );
}

function ResultCard({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: `1px solid ${color}44`,
        borderRadius: 18,
        padding: '24px',
        marginBottom: 24,
      }}
    >
      {children}
    </div>
  );
}

function BigIcon({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: `${color}1a`,
        border: `2px solid ${color}55`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 26,
        color,
        margin: '0 auto 16px',
      }}
    >
      {children}
    </div>
  );
}

function CodeDetails({ data }: { data: CodeData }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 12,
        overflow: 'hidden',
      }}
    >
      <div style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <span
          style={{
            fontFamily: 'monospace',
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: '0.1em',
            color: '#f0f0f5',
          }}
        >
          {data.code}
        </span>
      </div>
      <Row label="Job Type"   value={data.jobType} />
      <Row label="Customer"   value={data.clientName} />
      <Row label="Discount"   value={`$${parseFloat(data.amount || '0').toLocaleString()}`} />
      <Row label="Contractor" value={data.contractorName} />
      <div style={{ padding: '14px 20px' }}>
        <span style={{ fontSize: 14, color: 'rgba(240,240,245,0.5)' }}>Expires</span>
        <span style={{ fontSize: 16, fontWeight: 600, color: '#f0f0f5', float: 'right' }}>
          {fmt(data.expiresAt)}
        </span>
      </div>
    </div>
  );
}

const resultTitle: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 800,
  color: '#f0f0f5',
  textAlign: 'center',
  margin: '0 0 8px',
};

const resultSub: React.CSSProperties = {
  fontSize: 15,
  color: 'rgba(240,240,245,0.5)',
  textAlign: 'center',
  margin: '0 0 20px',
};
