"use client";
import { AUDIT_INTRO_VIDEO_URL, AUDIT_INTRO_POSTER_URL, AUDIT_INTRO_READY } from "@/app/config/audit";

/**
 * Reusable "How to read your audit" video block.
 * Place this at the very top of each client audit page.
 * Configure the video URL once in /app/config/audit.ts to update all pages.
 */
export default function AuditIntroVideo() {
  if (!AUDIT_INTRO_READY) {
    return null;
  }

  const isLoom = AUDIT_INTRO_VIDEO_URL.includes("loom.com");

  return (
    <div
      style={{
        marginBottom: "40px",
        background: "var(--gg-card-bg)",
        border: "1px solid var(--gg-border-strong)",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {/* Header row */}
      <div
        style={{
          padding: "16px 20px",
          borderBottom: "1px solid var(--gg-border)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7" stroke="var(--gg-accent)" strokeWidth="1.3"/>
          <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="var(--gg-accent)"/>
        </svg>
        <div>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "var(--gg-text1)",
              margin: 0,
            }}
          >
            How to read your audit
          </p>
          <p
            style={{
              fontSize: "11px",
              color: "var(--gg-text3)",
              margin: 0,
            }}
          >
            Quick walkthrough before you dive in
          </p>
        </div>
      </div>

      {/* Video */}
      {isLoom ? (
        <iframe
          src={AUDIT_INTRO_VIDEO_URL}
          style={{ display: "block", width: "100%", aspectRatio: "16/9", border: "none" }}
          allowFullScreen
          title="How to read your audit"
        />
      ) : (
        <video
          src={AUDIT_INTRO_VIDEO_URL}
          poster={AUDIT_INTRO_POSTER_URL || undefined}
          controls
          playsInline
          preload="metadata"
          style={{ display: "block", width: "100%", aspectRatio: "16/9", background: "#000" }}
        />
      )}
    </div>
  );
}
