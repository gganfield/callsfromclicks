import { NextRequest, NextResponse } from "next/server";
import { config } from "@/client.config";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  // ── Audit form submission (from /audit) ──────────────────────
  if (body.formType === "audit") {
    const { name, business, email, website, phone, industry, notes } = body;
    if (!name || !business || !email) {
      return NextResponse.json({ error: "Name, business, and email are required." }, { status: 400 });
    }

    if (!RESEND_API_KEY) {
      console.error("Audit request failed: RESEND_API_KEY is not set.");
      return NextResponse.json(
        { error: "Email service is temporarily unavailable. Please email us directly at garrett@callsfromclicks.com." },
        { status: 503 }
      );
    }

    const notifyEmail = process.env.AUDIT_NOTIFY_EMAIL || process.env.AUDIT_TO_EMAIL || "garrett@callsfromclicks.com";
    const from = "Garrett from Calls From Clicks <garrett@updates.callsfromclicks.com>";

    const notifyBody = [
      "New audit request from Calls From Clicks",
      "",
      "Name: " + name,
      "Business: " + business,
      "Email: " + email,
      "Website: " + (website ? (/^https?:\/\//i.test(website) ? website : "https://" + website) : "—"),
      "Phone: " + (phone || "—"),
      "Industry: " + (industry || "—"),
      "Notes: " + (notes || "(none)"),
    ].join("\n");

    try {
      const notifyRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [notifyEmail],
          subject: `New audit request: ${business} — ${name}`,
          text: notifyBody,
        }),
      });

      if (!notifyRes.ok) {
        const err = await notifyRes.text();
        console.error("Resend error (audit notification to Garrett):", err);
        return NextResponse.json({ error: "Failed to send." }, { status: 500 });
      }

      const thankYouHtml = `<p>Thanks for requesting your free audit! We'll review your info and get back to you within 24-48 hours.</p><p>Garrett @ Calls From Clicks</p>`;

      const thankYouRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [email],
          subject: "Your Free Audit Request - Calls From Clicks",
          html: thankYouHtml,
        }),
      });

      if (!thankYouRes.ok) {
        const err = await thankYouRes.text();
        console.error("Resend error (audit thank-you to submitter):", err);
        return NextResponse.json({ error: "Failed to send." }, { status: 500 });
      }

      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error("Audit form send failed:", err);
      return NextResponse.json({ error: "Failed to send." }, { status: 500 });
    }
  }

  // ── Standard site contact form ──────────────────────────────
  const { name, phone, service, message } = body;

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  if (!RESEND_API_KEY) {
    console.error("Contact form failed: RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Email service is temporarily unavailable. Please try again later or email us directly." },
      { status: 503 }
    );
  }

  const emailBody = `
New lead from ${config.business.name} website

Name: ${name}
Phone: ${phone}
Service: ${service || "Not specified"}

Message:
${message || "(no message)"}

---
Sent from ${config.business.name} contact form
  `.trim();

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "leads@callsfromclicks.com",
        to: [config.form.toEmail],
        subject: `New Lead: ${name} — ${service || "General Inquiry"}`,
        text: emailBody,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
