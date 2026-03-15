import crypto from 'crypto';
import { cookies } from 'next/headers';
import { prisma } from './db';
import bcrypt from 'bcryptjs';

// ── Constants ──────────────────────────────────────────────────────────────

export const CLIENT_COOKIE = 'cfc_client_auth';
export const ADMIN_COOKIE  = 'cfc_admin_auth';

function cookieSecret(): string {
  return process.env.COOKIE_SECRET ?? 'dev-cookie-secret-change-in-prod';
}

// ── Client session ─────────────────────────────────────────────────────────

/** Create a signed token: `clientId:slug:hmac` */
export function createClientToken(clientId: number, slug: string): string {
  const payload = `${clientId}:${slug}`;
  const hmac = crypto
    .createHmac('sha256', cookieSecret())
    .update(payload)
    .digest('hex');
  return `${payload}:${hmac}`;
}

/** Verify and parse a client token. Returns null on failure. */
export function parseClientToken(
  token: string,
): { clientId: number; slug: string } | null {
  // format is `clientId:slug:hmac` — slug can contain hyphens but not colons
  const lastColon = token.lastIndexOf(':');
  if (lastColon === -1) return null;

  const payload = token.substring(0, lastColon);
  const hmac    = token.substring(lastColon + 1);

  const colonIdx = payload.indexOf(':');
  if (colonIdx === -1) return null;

  const clientIdStr = payload.substring(0, colonIdx);
  const slug        = payload.substring(colonIdx + 1);
  const clientId    = parseInt(clientIdStr, 10);

  if (isNaN(clientId)) return null;

  const expected = crypto
    .createHmac('sha256', cookieSecret())
    .update(payload)
    .digest('hex');

  // Constant-time compare
  if (hmac.length !== expected.length) return null;
  if (!crypto.timingSafeEqual(Buffer.from(hmac), Buffer.from(expected))) return null;

  return { clientId, slug };
}

/** Returns the authenticated Client record, or null. */
export async function getAuthenticatedClient(slug: string) {
  const jar   = await cookies();
  const token = jar.get(CLIENT_COOKIE)?.value;
  if (!token) return null;

  const session = parseClientToken(token);
  if (!session || session.slug !== slug) return null;

  return prisma.client.findUnique({
    where: { id: session.clientId, slug },
  });
}

/** Build Set-Cookie header value for client auth */
export function clientCookieHeader(clientId: number, slug: string): string {
  const token     = createClientToken(clientId, slug);
  const thirtyDays = 30 * 24 * 60 * 60;
  return `${CLIENT_COOKIE}=${token}; HttpOnly; SameSite=Strict; Max-Age=${thirtyDays}; Path=/`;
}

// ── Admin session ──────────────────────────────────────────────────────────

function adminHash(): string {
  return crypto
    .createHmac('sha256', cookieSecret())
    .update(process.env.ADMIN_PASSWORD ?? '')
    .digest('hex');
}

export function isAdminAuthenticated(cookieValue: string | undefined): boolean {
  if (!cookieValue) return false;
  const expected = adminHash();
  if (cookieValue.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(cookieValue), Buffer.from(expected));
}

export async function getAdminCookieValue(): Promise<string | undefined> {
  const jar = await cookies();
  return jar.get(ADMIN_COOKIE)?.value;
}

export function adminCookieHeader(): string {
  const token      = adminHash();
  const thirtyDays = 30 * 24 * 60 * 60;
  return `${ADMIN_COOKIE}=${token}; HttpOnly; SameSite=Strict; Max-Age=${thirtyDays}; Path=/`;
}

// ── Password helpers ───────────────────────────────────────────────────────

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(
  password: string,
  hash: string,
): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
