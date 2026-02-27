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
      console.log("Audit request (no Resend key):", body);
      return NextResponse.json({ ok: true });
    }

    const emailBody = `
New Lead Leak Audit Request — Calls From Clicks

Name: ${name}
Business: ${business}
Email: ${email}
Phone: ${phone || "Not provided"}
Website: ${website || "None"}
Industry: ${industry || "Not specified"}

Notes:
${notes || "(none)"}

---
Submitted via callsfromclicks.com/audit
    `.trim();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "audit@callsfromclicks.com",
        to: [process.env.AUDIT_TO_EMAIL ?? "gg@callsfromclicks.com"],
        subject: `Audit Request: ${name} — ${business}`,
        text: emailBody,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  }

  // ── Standard site contact form ──────────────────────────────
  const { name, phone, service, message } = body;

  if (!name || !phone) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }

  if (!RESEND_API_KEY) {
    console.log("New lead (no Resend key set):", { name, phone, service, message });
    return NextResponse.json({ ok: true });
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
}
