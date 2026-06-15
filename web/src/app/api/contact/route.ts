// ============================================================
// POST /api/contact — receives a demo request, validates it, and
// captures the lead. Default capture is local + pluggable:
//   • always: append a JSON line to web/.data/leads.jsonl + console summary
//   • if LEAD_WEBHOOK_URL is set: POST a Slack-shaped message
//   • if RESEND_API_KEY + LEAD_NOTIFY_EMAIL are set: send an email
// No third-party credentials are required for it to work.
// ============================================================
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { contactSchema, type ContactResponse } from "@/lib/contact";

// Always run on the Node runtime (we touch the filesystem).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// --- naive in-memory rate limit (per IP, best-effort) ----------------------
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; reset: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

interface Lead {
  name: string;
  email: string;
  company: string;
  role?: string;
  companySize?: string;
  message?: string;
  plan?: string;
  receivedAt: string;
  ip: string;
  userAgent: string;
}

async function persistLead(lead: Lead): Promise<void> {
  const dir = path.join(process.cwd(), ".data");
  await fs.mkdir(dir, { recursive: true });
  await fs.appendFile(path.join(dir, "leads.jsonl"), JSON.stringify(lead) + "\n", "utf8");
}

async function forwardLead(lead: Lead): Promise<void> {
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    const text =
      `*New demo request*\n` +
      `• ${lead.name} <${lead.email}> — ${lead.company}\n` +
      (lead.role ? `• Role: ${lead.role}\n` : "") +
      (lead.companySize ? `• Size: ${lead.companySize}\n` : "") +
      (lead.plan ? `• Plan: ${lead.plan}\n` : "") +
      (lead.message ? `• "${lead.message}"\n` : "");
    await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text }),
    });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const notify = process.env.LEAD_NOTIFY_EMAIL;
  if (resendKey && notify) {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${resendKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.LEAD_FROM_EMAIL || "Quaeris <onboarding@resend.dev>",
        to: [notify],
        subject: `Demo request — ${lead.company}`,
        text:
          `${lead.name} <${lead.email}> at ${lead.company}\n` +
          `Role: ${lead.role || "—"} | Size: ${lead.companySize || "—"} | Plan: ${lead.plan || "—"}\n\n` +
          `${lead.message || "(no message)"}`,
      }),
    });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse<ContactResponse>> {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "local";

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a filled bot field — pretend success, do nothing.
  if (typeof body === "object" && body && (body as Record<string, unknown>).company_url) {
    return NextResponse.json({ ok: true });
  }

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again in a minute." },
      { status: 429 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors as ContactResponse["fieldErrors"];
    return NextResponse.json({ ok: false, fieldErrors }, { status: 400 });
  }

  const data = parsed.data;
  const lead: Lead = {
    name: data.name,
    email: data.email,
    company: data.company,
    role: data.role,
    companySize: data.companySize,
    message: data.message,
    plan: data.plan,
    receivedAt: new Date().toISOString(),
    ip,
    userAgent: req.headers.get("user-agent") || "",
  };

  try {
    await persistLead(lead);
  } catch (err) {
    console.error("[contact] failed to persist lead:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong on our end. Please email seek@quaeris.ai." },
      { status: 500 },
    );
  }

  // Forwarding is best-effort — never fail the request on it.
  forwardLead(lead).catch((err) => console.error("[contact] forward failed:", err));

  console.log(`[contact] demo request from ${lead.email} (${lead.company})`);
  return NextResponse.json({ ok: true });
}
