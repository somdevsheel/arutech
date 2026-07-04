import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { sendContactNotification } from "@/lib/mailer";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
    const { name, email, message } = body;

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
