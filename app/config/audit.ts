/**
 * Audit intro video config.
 * Change AUDIT_INTRO_VIDEO_URL (and optionally AUDIT_INTRO_POSTER_URL)
 * to update the "How to read your audit" video across all client audit pages at once.
 *
 * For a self-hosted video: place the file in /public/ and use "/your-video.mp4".
 * For Loom: paste the embed URL (https://www.loom.com/embed/YOUR_SHARE_ID).
 */

export const AUDIT_INTRO_VIDEO_URL = "";
export const AUDIT_INTRO_POSTER_URL = "";

/** Set to true once you've recorded and uploaded the intro video. */
export const AUDIT_INTRO_READY = false;

/** Calendly link for "Book a call" CTA on real client audit pages (not shown on /audit/example). */
export const AUDIT_BOOK_CALL_URL = "https://calendly.com/garrett-callsfromclicks/30min";
