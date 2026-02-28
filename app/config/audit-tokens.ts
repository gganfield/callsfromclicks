/**
 * Unlisted audit URLs: /audit/{token}-{businessSlug}
 * Only people with the link can view. Token is 16+ chars, generated server-side (e.g. crypto.randomBytes(8).toString("hex")).
 * Key by recognizable id (ben, zach, example) so we can "pull up Ben's audit" without remembering tokens.
 */

export const AUDIT_PRIVATE_LINKS = {
  ben: {
    token: "a1b2c3d4e5f67890",
    businessSlug: "bens-auto-spa",
    businessName: "Ben's Auto Spa",
  },
  zach: {
    token: "0f1e2d3c4b5a6978",
    businessSlug: "big-dawgs-lawn-landscape",
    businessName: "Big Dawgs Lawn & Landscape",
  },
  example: {
    token: "83hf93hf2k4m9xq1a5",
    businessSlug: "peak-home-remodeling",
    businessName: "Peak Home Remodeling",
  },
} as const;

export type AuditId = keyof typeof AUDIT_PRIVATE_LINKS;

const tokenToId = new Map<string, AuditId>(
  (Object.entries(AUDIT_PRIVATE_LINKS) as [AuditId, { token: string }][]).map(
    ([id, { token }]) => [token, id]
  )
);

/** Parse slug "token-business-slug" and return audit id if token is valid. */
export function getAuditIdBySlug(slug: string): AuditId | null {
  const firstHyphen = slug.indexOf("-");
  if (firstHyphen === -1) return null;
  const token = slug.substring(0, firstHyphen);
  return tokenToId.get(token) ?? null;
}

/** Build unlisted URL for an audit (e.g. for email). */
export function getAuditUnlistedUrl(id: AuditId): string {
  const { token, businessSlug } = AUDIT_PRIVATE_LINKS[id];
  return `/audit/${token}-${businessSlug}`;
}
