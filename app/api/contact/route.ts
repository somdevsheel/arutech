// import { NextRequest, NextResponse } from "next/server";

// interface ContactPayload {
//   name: string;
//   email: string;
//   message: string;
// }

// function isValidEmail(email: string): boolean {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// export async function POST(request: NextRequest) {
//   try {
//     const body: ContactPayload = await request.json();
//     const { name, email, message } = body;

//     // Validate presence
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { success: false, error: "All fields are required." },
//         { status: 400 }
//       );
//     }

//     // Validate types
//     if (
//       typeof name !== "string" ||
//       typeof email !== "string" ||
//       typeof message !== "string"
//     ) {
//       return NextResponse.json(
//         { success: false, error: "Invalid field types." },
//         { status: 400 }
//       );
//     }

//     // Validate lengths
//     if (name.trim().length < 2) {
//       return NextResponse.json(
//         { success: false, error: "Name must be at least 2 characters." },
//         { status: 400 }
//       );
//     }

//     if (!isValidEmail(email.trim())) {
//       return NextResponse.json(
//         { success: false, error: "Please provide a valid email address." },
//         { status: 400 }
//       );
//     }

//     if (message.trim().length < 10) {
//       return NextResponse.json(
//         { success: false, error: "Message must be at least 10 characters." },
//         { status: 400 }
//       );
//     }

//     if (message.trim().length > 2000) {
//       return NextResponse.json(
//         { success: false, error: "Message must be under 2000 characters." },
//         { status: 400 }
//       );
//     }

//     // Log the submission (replace with email/DB integration in production)
//     const submission = {
//       name: name.trim(),
//       email: email.trim().toLowerCase(),
//       message: message.trim(),
//       timestamp: new Date().toISOString(),
//       ip: request.headers.get("x-forwarded-for") ?? "unknown",
//     };

//     console.log("[Arutech Contact Form]", JSON.stringify(submission, null, 2));

//     // TODO: Integrate nodemailer / SendGrid / database here

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Thank you for reaching out. We'll get back to you within 24 hours.",
//       },
//       { status: 200 }
//     );
//   } catch (err) {
//     console.error("[Contact API Error]", err);
//     return NextResponse.json(
//       { success: false, error: "Something went wrong. Please try again." },
//       { status: 500 }
//     );
//   }
// }



// import { NextRequest, NextResponse } from "next/server";
// import clientPromise from "@/lib/mongodb";

// interface ContactPayload {
//   name: string;
//   email: string;
//   message: string;
// }

// function isValidEmail(email: string): boolean {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// export async function POST(request: NextRequest) {
//   try {
//     const body: ContactPayload = await request.json();
//     const { name, email, message } = body;

//     // ── Validation ─────────────────────────────────────────────
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { success: false, error: "All fields are required." },
//         { status: 400 }
//       );
//     }

//     if (
//       typeof name !== "string" ||
//       typeof email !== "string" ||
//       typeof message !== "string"
//     ) {
//       return NextResponse.json(
//         { success: false, error: "Invalid field types." },
//         { status: 400 }
//       );
//     }

//     if (name.trim().length < 2) {
//       return NextResponse.json(
//         { success: false, error: "Name must be at least 2 characters." },
//         { status: 400 }
//       );
//     }

//     if (!isValidEmail(email.trim())) {
//       return NextResponse.json(
//         { success: false, error: "Please provide a valid email address." },
//         { status: 400 }
//       );
//     }

//     if (message.trim().length < 10) {
//       return NextResponse.json(
//         { success: false, error: "Message must be at least 10 characters." },
//         { status: 400 }
//       );
//     }

//     if (message.trim().length > 2000) {
//       return NextResponse.json(
//         { success: false, error: "Message must be under 2000 characters." },
//         { status: 400 }
//       );
//     }

//     // ── Build document ──────────────────────────────────────────
//     const doc = {
//       name:      name.trim(),
//       email:     email.trim().toLowerCase(),
//       message:   message.trim(),
//       ip:        request.headers.get("x-forwarded-for") ?? "unknown",
//       userAgent: request.headers.get("user-agent") ?? "unknown",
//       createdAt: new Date(),
//       read:      false,
//     };

//     // ── Save to MongoDB Atlas ───────────────────────────────────
//     const client = await clientPromise;
//     const db     = client.db(process.env.MONGODB_DB ?? "arutechdata");
//     const col    = db.collection("contact_messages");

//     const result = await col.insertOne(doc);

//     console.log(
//       `[Arutech Contact] Saved message from ${doc.email} → _id: ${result.insertedId}`
//     );

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Thank you for reaching out. We'll get back to you within 24 hours.",
//       },
//       { status: 200 }
//     );

//   } catch (err) {
//     console.error("[Contact API Error]", err);
//     return NextResponse.json(
//       { success: false, error: "Something went wrong. Please try again." },
//       { status: 500 }
//     );
//   }
// }



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

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();
    const { name, email, message } = body;

    // ── Validation ──────────────────────────────────────────────
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
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
    const ip           = request.headers.get("x-forwarded-for") ?? "unknown";
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