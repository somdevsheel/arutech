import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { sendContactNotification } from "@/lib/mailer";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  _hp?: string;       // honeypot — must be empty
  _t?: number;        // form load timestamp
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Common disposable / temporary email domains
const BLOCKED_DOMAINS = new Set([
  "mailinator.com","guerrillamail.com","guerrillamail.net","guerrillamail.org",
  "guerrillamail.biz","guerrillamail.de","guerrillamail.info","tempmail.com",
  "temp-mail.org","throwam.com","throwam.net","fakeinbox.com","maildrop.cc",
  "dispostable.com","yopmail.com","yopmail.fr","trashmail.com","trashmail.me",
  "trashmail.net","trashmail.org","trashmail.at","trashmail.io","trashmail.xyz",
  "sharklasers.com","guerrillamailblock.com","grr.la","spam4.me","getairmail.com",
  "filzmail.com","discard.email","spamgourmet.com","spamgourmet.net","spamgourmet.org",
  "mailnull.com","spamhereplease.com","spamhereplease.net","10minutemail.com",
  "10minutemail.net","10minutemail.org","10minute-email.com","10minutemail.de",
  "minutemail.com","tempinbox.com","mailcatch.com","spamex.com","spamex.org",
  "binkmail.com","safetymail.info","dodgeit.com","spamgob.com","mailnesia.com",
  "mailnesia.net","spamevader.com","spam.la","spaml.com","spamtrap.ro",
  "crazymailing.com","ihasmail.com","dispostable.com","throwam.com","antispam24.de",
  "discardmail.com","discardmail.de","rejectmail.com","spaml.de","gowikicampus.com",
]);

function isDisposableEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  return domain ? BLOCKED_DOMAINS.has(domain) : false;
}

// In-memory rate limiter: max 3 submissions per IP per hour.
// Good enough for a consultancy site; swap for Redis/KV if traffic warrants it.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    if (ip !== "unknown" && isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many submissions. Please wait before sending another message.",
        },
        { status: 429 }
      );
    }

    const body: ContactPayload = await request.json();
    const { name, email, phone, message, _hp, _t } = body;

    // ── Bot detection ────────────────────────────────────────────
    // Honeypot: bots fill hidden fields, humans don't
    if (_hp && _hp.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Thank you!" }); // silent accept
    }

    // Timing: reject if form submitted in under 3 seconds (bot speed)
    if (_t && Date.now() - _t < 3000) {
      return NextResponse.json({ success: true, message: "Thank you!" }); // silent accept
    }

    // ── Validation ──────────────────────────────────────────────
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { success: false, error: "Invalid field types." },
        { status: 400 }
      );
    }

    if (name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Name must be at least 2 characters." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (isDisposableEmail(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please use a real email address. Temporary/disposable emails are not accepted." },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters." },
        { status: 400 }
      );
    }

    if (message.trim().length > 2000) {
      return NextResponse.json(
        { success: false, error: "Message must be under 2000 characters." },
        { status: 400 }
      );
    }

    const cleanName    = name.trim();
    const cleanEmail   = email.trim().toLowerCase();
    const cleanMessage = message.trim();
    const submittedAt  = new Date();

    // ── 1. Save to MongoDB Atlas ────────────────────────────────
    const client = await clientPromise.get();
    const rawDb  = (process.env.MONGODB_DB ?? "arutechdata").trim().replace(/\s+/g, "");
    const db     = client.db(rawDb);
    const col    = db.collection("contact_messages");

    const result = await col.insertOne({
      name:      cleanName,
      email:     cleanEmail,
      message:   cleanMessage,
      ip,
      userAgent: request.headers.get("user-agent") ?? "unknown",
      createdAt: submittedAt,
      read:      false,
    });

    console.log(`[Arutech Contact] Saved → _id: ${result.insertedId} | from: ${cleanEmail}`);

    // ── 2. Send email notifications ─────────────────────────────
    try {
      await sendContactNotification({
        name:        cleanName,
        email:       cleanEmail,
        phone:       phone?.trim() || undefined,
        message:     cleanMessage,
        ip,
        submittedAt,
      });
      console.log(`[Arutech Contact] Emails sent → company + auto-reply to ${cleanEmail}`);
    } catch (mailErr) {
      // Email failure does NOT fail the whole request —
      // data is already safely in MongoDB.
      console.error("[Arutech Mailer] Email send failed:", mailErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. We'll get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
