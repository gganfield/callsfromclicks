'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { suggestJobTypeShort } from '@/lib/code-utils';

type Phase = 'form' | 'preview' | 'success';

interface FormData {
  jobType: string;
  jobTypeShort: string;
  clientName: string;
  amount: string;
}

interface Props {
  slug: string;
  clientNumber: string;
}

// Format a dollar amount for display
function formatAmount(val: string) {
  const clean = val.replace(/[^0-9.]/g, '');
  if (!clean) return '';
  const num = parseFloat(clean);
  if (isNaN(num)) return val;
  return num.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

// Pill badge
function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 10px',
        background: `${color}22`,
        border: `1px solid ${color}55`,
        borderRadius: 100,
        fontSize: 11,
        fontWeight: 700,
        color,
        letterSpacing: '0.06em',
      }}
    >
      {label}
    </span>
  );
}

// ── Form Phase ─────────────────────────────────────────────────────────────

function FormPhase({
  form,
  onChange,
  onPreview,
  slug,
}: {
  form: FormData;
  onChange: (f: FormData) => void;
  onPreview: () => void;
  slug: string;
}) {
  const router = useRouter();

  // Auto-suggest jobTypeShort when jobType changes
  useEffect(() => {
    if (form.jobType) {
      onChange({ ...form, jobTypeShort: suggestJobTypeShort(form.jobType) });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.jobType]);

  const valid =
    form.jobType.trim().length > 0 &&
    form.jobTypeShort.trim().length >= 2 &&
    form.jobTypeShort.trim().length <= 3 &&
    form.clientName.trim().length > 0 &&
    form.amount.trim().length > 0;

  return (
    <div style={{ minHeight: '100vh', background: '#060609', color: '#f0f0f5', padding: '0 16px' }}>
      {/* Header */}
      <div style={{ paddingTop: 'env(safe-area-inset-top, 20px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 0 20px' }}>
          <button
            onClick={() => router.push(`/clients/${slug}`)}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8,
              color: '#f0f0f5',
              padding: '8px 12px',
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            ← Back
          </button>
          <h1 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: '#f0f0f5' }}>
            Generate Code
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: 480, margin: '0 auto' }}>
        {/* Job Type */}
        <div style={{ marginBottom: 20 }}>
          <label style={labelStyle}>JOB TYPE</label>
          <input
            type="text"
            value={form.jobType}
            onChange={(e) => onChange({ ...form, jobType: e.target.value })}
            placeholder="e.g. Kitchen Remodel, Roof Repair"
            style={inputStyle}
          />
        </div>

        {/* Job Type Short */}
        <div style={{ marginBottom: 20 }}>
          <label style={labelStyle}>
            ABBREVIATION{' '}
            <span style={{ color: 'rgba(240,240,245,0.35)', fontWeight: 400 }}>
              (2–3 chars — used in code)
            </span>
          </label>
          <input
            type="text"
            value={form.jobTypeShort}
            onChange={(e) =>
              onChange({
                ...form,
                jobTypeShort: e.target.value.toUpperCase().slice(0, 3),
              })
            }
            placeholder="e.g. KR"
            maxLength={3}
            style={{
              ...inputStyle,
              fontFamily: 'monospace',
              fontSize: 20,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          />
          {form.jobTypeShort && (form.jobTypeShort.length < 2 || form.jobTypeShort.length > 3) && (
            <p style={{ fontSize: 12, color: '#f26464', marginTop: 4 }}>
              Must be 2–3 characters
            </p>
          )}
        </div>

        {/* Customer Name */}
        <div style={{ marginBottom: 20 }}>
          <label style={labelStyle}>CUSTOMER NAME</label>
          <input
            type="text"
            value={form.clientName}
            onChange={(e) => onChange({ ...form, clientName: e.target.value })}
            placeholder="Who left the review?"
            autoCapitalize="words"
            style={inputStyle}
          />
        </div>

        {/* Amount */}
        <div style={{ marginBottom: 32 }}>
          <label style={labelStyle}>DISCOUNT AMOUNT</label>
          <div style={{ position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: 18,
                color: 'rgba(240,240,245,0.5)',
                pointerEvents: 'none',
              }}
            >
              $
            </span>
            <input
              type="number"
              value={form.amount}
              onChange={(e) => onChange({ ...form, amount: e.target.value })}
              placeholder="0"
              min="0"
              style={{
                ...inputStyle,
                paddingLeft: 32,
                fontSize: 20,
                fontWeight: 700,
              }}
            />
          </div>
        </div>

        <button
          onClick={onPreview}
          disabled={!valid}
          style={{
            width: '100%',
            padding: '18px',
            background: valid ? '#2563EB' : 'rgba(37,99,235,0.35)',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            fontSize: 18,
            fontWeight: 700,
            cursor: valid ? 'pointer' : 'not-allowed',
          }}
        >
          Preview Code →
        </button>
      </div>
    </div>
  );
}

// ── Preview Phase ──────────────────────────────────────────────────────────

function PreviewPhase({
  form,
  clientNumber,
  onBack,
  onConfirm,
  loading,
}: {
  form: FormData;
  clientNumber: string;
  onBack: () => void;
  onConfirm: () => void;
  loading: boolean;
}) {
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 30);

  const previewCode = `${clientNumber}-${form.jobTypeShort}-????`;

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
      <div style={{ paddingTop: 'env(safe-area-inset-top, 20px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 0 20px' }}>
          <button
            onClick={onBack}
            disabled={loading}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8,
              color: '#f0f0f5',
              padding: '8px 12px',
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            ← Back
          </button>
          <h1 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: '#f0f0f5' }}>
            Preview
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: 480, margin: '0 auto', width: '100%', flex: 1 }}>
        <p style={{ fontSize: 14, color: 'rgba(240,240,245,0.45)', marginBottom: 24 }}>
          Confirm the details below. The code will be finalized when you press Confirm.
        </p>

        {/* Code preview card */}
        <div
          style={{
            background: 'rgba(37,99,235,0.08)',
            border: '1px solid rgba(37,99,235,0.3)',
            borderRadius: 16,
            padding: '28px 24px',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: 12, color: '#60a5fa', fontWeight: 600, letterSpacing: '0.08em', marginBottom: 12 }}>
            CODE WILL LOOK LIKE
          </p>
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: 32,
              fontWeight: 900,
              color: '#f0f0f5',
              letterSpacing: '0.1em',
              marginBottom: 8,
            }}
          >
            {previewCode}
          </div>
          <p style={{ fontSize: 12, color: 'rgba(240,240,245,0.38)' }}>
            Random 4-char suffix assigned on confirm
          </p>
        </div>

        {/* Details card */}
        <div
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 14,
            overflow: 'hidden',
            marginBottom: 28,
          }}
        >
          {[
            { label: 'Job Type', value: form.jobType },
            { label: 'Customer', value: form.clientName },
            { label: 'Discount', value: `$${parseFloat(form.amount || '0').toLocaleString()}` },
            { label: 'Expires', value: expiresAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) },
          ].map(({ label, value }, i) => (
            <div
              key={label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '14px 18px',
                borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              <span style={{ fontSize: 13, color: 'rgba(240,240,245,0.45)' }}>{label}</span>
              <span style={{ fontSize: 15, fontWeight: 600, color: '#f0f0f5' }}>{value}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onConfirm}
          disabled={loading}
          style={{
            width: '100%',
            padding: '18px',
            background: loading ? 'rgba(37,99,235,0.5)' : '#2563EB',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            fontSize: 18,
            fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer',
            marginBottom: 12,
          }}
        >
          {loading ? 'Generating…' : 'Confirm — Generate Code'}
        </button>
      </div>
    </div>
  );
}

// ── Success Phase ──────────────────────────────────────────────────────────

function SuccessPhase({
  code,
  form,
  slug,
}: {
  code: string;
  form: FormData;
  slug: string;
}) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#060609',
        color: '#f0f0f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 16px',
        textAlign: 'center',
      }}
    >
      {/* Success check */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: 'rgba(62,207,142,0.15)',
          border: '2px solid rgba(62,207,142,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#3ecf8e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 6 }}>Code Created!</h1>
      <p style={{ fontSize: 15, color: 'rgba(240,240,245,0.45)', marginBottom: 32 }}>
        Share this code with {form.clientName}
      </p>

      {/* The code — BIG */}
      <div
        style={{
          background: 'rgba(37,99,235,0.08)',
          border: '1px solid rgba(37,99,235,0.35)',
          borderRadius: 20,
          padding: '32px 24px',
          marginBottom: 16,
          width: '100%',
          maxWidth: 380,
        }}
      >
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 38,
            fontWeight: 900,
            color: '#f0f0f5',
            letterSpacing: '0.12em',
            wordBreak: 'break-all',
            marginBottom: 8,
          }}
        >
          {code}
        </div>
        <Badge label="ACTIVE" color="#3ecf8e" />
      </div>

      {/* Copy button */}
      <button
        onClick={copy}
        style={{
          width: '100%',
          maxWidth: 380,
          padding: '16px',
          background: copied ? 'rgba(62,207,142,0.15)' : 'rgba(255,255,255,0.07)',
          border: `1px solid ${copied ? 'rgba(62,207,142,0.4)' : 'rgba(255,255,255,0.15)'}`,
          borderRadius: 12,
          color: copied ? '#3ecf8e' : '#f0f0f5',
          fontSize: 16,
          fontWeight: 700,
          cursor: 'pointer',
          marginBottom: 12,
          transition: 'all 0.2s',
        }}
      >
        {copied ? '✓ Copied!' : 'Copy Code'}
      </button>

      {/* Details */}
      <div
        style={{
          width: '100%',
          maxWidth: 380,
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 12,
          padding: '14px 18px',
          marginBottom: 32,
          textAlign: 'left',
        }}
      >
        <p style={{ fontSize: 13, color: 'rgba(240,240,245,0.45)', margin: '0 0 4px' }}>
          {form.jobType} · {form.clientName} · ${parseFloat(form.amount || '0').toLocaleString()} off · 30 days
        </p>
      </div>

      <div style={{ display: 'flex', gap: 10, width: '100%', maxWidth: 380 }}>
        <button
          onClick={() => router.push(`/clients/${slug}/generate`)}
          style={{
            flex: 1,
            padding: '14px',
            background: '#2563EB',
            color: '#fff',
            border: 'none',
            borderRadius: 10,
            fontSize: 15,
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          + New Code
        </button>
        <button
          onClick={() => router.push(`/clients/${slug}`)}
          style={{
            flex: 1,
            padding: '14px',
            background: 'rgba(255,255,255,0.06)',
            color: '#f0f0f5',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 10,
            fontSize: 15,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

// ── Shared styles ──────────────────────────────────────────────────────────

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 12,
  fontWeight: 700,
  color: 'rgba(240,240,245,0.55)',
  letterSpacing: '0.06em',
  marginBottom: 8,
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 10,
  color: '#f0f0f5',
  fontSize: 16,
  outline: 'none',
  boxSizing: 'border-box',
};

// ── Root component ─────────────────────────────────────────────────────────

export default function GenerateCodeClient({ slug, clientNumber }: Props) {
  const [phase, setPhase]   = useState<Phase>('form');
  const [form, setForm]     = useState<FormData>({ jobType: '', jobTypeShort: '', clientName: '', amount: '' });
  const [loading, setLoading] = useState(false);
  const [finalCode, setFinalCode] = useState('');
  const [error, setError]   = useState('');

  async function handleConfirm() {
    setLoading(true);
    setError('');

    const res = await fetch('/api/codes/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        slug,
        jobType: form.jobType,
        jobTypeShort: form.jobTypeShort,
        clientName: form.clientName,
        amount: form.amount,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      setFinalCode(data.code);
      setPhase('success');
    } else {
      const data = await res.json();
      setError(data.error ?? 'Failed to generate code');
    }

    setLoading(false);
  }

  if (phase === 'form') {
    return (
      <FormPhase
        form={form}
        onChange={setForm}
        onPreview={() => setPhase('preview')}
        slug={slug}
      />
    );
  }

  if (phase === 'preview') {
    return (
      <>
        {error && (
          <div
            style={{
              position: 'fixed',
              top: 16,
              left: 16,
              right: 16,
              background: 'rgba(242,100,100,0.15)',
              border: '1px solid rgba(242,100,100,0.4)',
              borderRadius: 10,
              padding: '12px 16px',
              color: '#f26464',
              fontSize: 14,
              fontWeight: 600,
              zIndex: 99,
              textAlign: 'center',
            }}
          >
            {error}
          </div>
        )}
        <PreviewPhase
          form={form}
          clientNumber={clientNumber}
          onBack={() => { setPhase('form'); setError(''); }}
          onConfirm={handleConfirm}
          loading={loading}
        />
      </>
    );
  }

  return <SuccessPhase code={finalCode} form={form} slug={slug} />;
}
