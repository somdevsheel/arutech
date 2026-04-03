// import nodemailer from "nodemailer";

// // Cached transporter (reused across hot-reloads in dev)
// declare global {
//   // eslint-disable-next-line no-var
//   var _mailerTransporter: nodemailer.Transporter | undefined;
// }

// function createTransporter(): nodemailer.Transporter {
//   const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

//   if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
//     throw new Error(
//       "Missing SMTP config. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env.local"
//     );
//   }

//   return nodemailer.createTransport({
//     host: SMTP_HOST,
//     port: Number(SMTP_PORT ?? 587),
//     secure: Number(SMTP_PORT) === 465, // true for port 465, false for 587
//     auth: {
//       user: SMTP_USER,
//       pass: SMTP_PASS,
//     },
//   });
// }

// function getTransporter(): nodemailer.Transporter {
//   if (process.env.NODE_ENV === "development") {
//     if (!global._mailerTransporter) {
//       global._mailerTransporter = createTransporter();
//     }
//     return global._mailerTransporter;
//   }
//   return createTransporter();
// }

// /* ─────────────────────────────────────────────────────────────
//    Send company notification email
// ───────────────────────────────────────────────────────────── */
// export async function sendContactNotification({
//   name,
//   email,
//   message,
//   ip,
//   submittedAt,
// }: {
//   name: string;
//   email: string;
//   message: string;
//   ip: string;
//   submittedAt: Date;
// }) {
//   const transporter = getTransporter();

//   const formattedDate = submittedAt.toLocaleString("en-IN", {
//     timeZone: "Asia/Kolkata",
//     dateStyle: "full",
//     timeStyle: "short",
//   });

//   // ── Email to company ──────────────────────────────────────
//   await transporter.sendMail({
//     from: `"Arutech Website" <${process.env.SMTP_USER}>`,
//     to: process.env.COMPANY_EMAIL,
//     replyTo: email,
//     subject: `📬 New Contact Form Submission — ${name}`,
//     html: `
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// </head>
// <body style="margin:0;padding:0;background:#020B18;font-family:'Segoe UI',Arial,sans-serif;">
//   <table width="100%" cellpadding="0" cellspacing="0" style="background:#020B18;padding:40px 20px;">
//     <tr>
//       <td align="center">
//         <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

//           <!-- Header -->
//           <tr>
//             <td style="background:linear-gradient(135deg,#0A2140,#0E2D58);border-radius:16px 16px 0 0;padding:32px;text-align:center;border:1px solid rgba(14,165,233,0.2);border-bottom:none;">
//               <p style="margin:0 0 8px 0;font-size:12px;font-family:monospace;color:#38BDF8;letter-spacing:3px;text-transform:uppercase;">Arutech Consultancy Services LLP</p>
//               <h1 style="margin:0;font-size:24px;font-weight:700;color:#ffffff;">New Contact Message</h1>
//               <p style="margin:8px 0 0;font-size:13px;color:#64748B;">${formattedDate} IST</p>
//             </td>
//           </tr>

//           <!-- Body -->
//           <tr>
//             <td style="background:#061527;padding:32px;border:1px solid rgba(14,165,233,0.15);border-top:none;border-bottom:none;">

//               <!-- From -->
//               <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
//                 <tr>
//                   <td style="background:#0A2140;border-radius:12px;padding:20px;border:1px solid rgba(14,165,233,0.15);">
//                     <p style="margin:0 0 4px;font-size:11px;color:#38BDF8;font-family:monospace;text-transform:uppercase;letter-spacing:2px;">From</p>
//                     <p style="margin:0 0 4px;font-size:18px;font-weight:600;color:#F1F5F9;">${name}</p>
//                     <a href="mailto:${email}" style="color:#38BDF8;font-size:14px;text-decoration:none;">${email}</a>
//                   </td>
//                 </tr>
//               </table>

//               <!-- Message -->
//               <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
//                 <tr>
//                   <td style="background:#0A2140;border-radius:12px;padding:20px;border:1px solid rgba(14,165,233,0.15);">
//                     <p style="margin:0 0 12px;font-size:11px;color:#38BDF8;font-family:monospace;text-transform:uppercase;letter-spacing:2px;">Message</p>
//                     <p style="margin:0;font-size:15px;color:#CBD5E1;line-height:1.7;white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
//                   </td>
//                 </tr>
//               </table>

//               <!-- Meta -->
//               <table width="100%" cellpadding="0" cellspacing="0">
//                 <tr>
//                   <td style="background:#020B18;border-radius:8px;padding:14px 16px;border:1px solid rgba(148,163,184,0.08);">
//                     <p style="margin:0;font-size:11px;color:#475569;font-family:monospace;">IP: ${ip} &nbsp;|&nbsp; Saved to MongoDB Atlas → arutechdata.contact_messages</p>
//                   </td>
//                 </tr>
//               </table>
//             </td>
//           </tr>

//           <!-- Footer -->
//           <tr>
//             <td style="background:#0A2140;border-radius:0 0 16px 16px;padding:20px 32px;text-align:center;border:1px solid rgba(14,165,233,0.15);border-top:none;">
//               <p style="margin:0 0 8px;font-size:13px;color:#334155;">Reply directly to this email to respond to ${name}</p>
//               <p style="margin:0;font-size:11px;color:#1E3A5F;">Arutech Consultancy Services LLP &nbsp;·&nbsp; arutech.in</p>
//             </td>
//           </tr>

//         </table>
//       </td>
//     </tr>
//   </table>
// </body>
// </html>
//     `,
//     text: `
// New Contact Form Submission
// ===========================
// Name:    ${name}
// Email:   ${email}
// Date:    ${formattedDate} IST

// Message:
// ${message}

// ---
// IP: ${ip}
// Saved to: MongoDB Atlas → arutechdata.contact_messages
//     `.trim(),
//   });

//   // ── Auto-reply to sender ──────────────────────────────────
//   await transporter.sendMail({
//     from: `"Arutech Consultancy Services" <${process.env.SMTP_USER}>`,
//     to: email,
//     subject: `We received your message, ${name.split(" ")[0]}!`,
//     html: `
// <!DOCTYPE html>
// <html>
// <head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
// <body style="margin:0;padding:0;background:#f8fafc;font-family:'Segoe UI',Arial,sans-serif;">
//   <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 20px;">
//     <tr>
//       <td align="center">
//         <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

//           <!-- Header -->
//           <tr>
//             <td style="background:linear-gradient(135deg,#0284C7,#0D9488);border-radius:16px 16px 0 0;padding:32px;text-align:center;">
//               <p style="margin:0 0 6px;font-size:11px;font-family:monospace;color:rgba(255,255,255,0.7);letter-spacing:3px;text-transform:uppercase;">Arutech Consultancy Services LLP</p>
//               <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">Thanks for reaching out!</h1>
//             </td>
//           </tr>

//           <!-- Body -->
//           <tr>
//             <td style="background:#ffffff;padding:32px;border:1px solid #e2e8f0;border-top:none;border-bottom:none;">
//               <p style="margin:0 0 16px;font-size:15px;color:#334155;line-height:1.7;">Hi <strong>${name.split(" ")[0]}</strong>,</p>
//               <p style="margin:0 0 16px;font-size:15px;color:#334155;line-height:1.7;">
//                 We've received your message and will get back to you within <strong>24 hours</strong>.
//               </p>

//               <!-- Message recap -->
//               <table width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
//                 <tr>
//                   <td style="background:#f1f5f9;border-left:3px solid #0EA5E9;border-radius:0 8px 8px 0;padding:16px 20px;">
//                     <p style="margin:0 0 6px;font-size:11px;color:#64748B;font-family:monospace;text-transform:uppercase;letter-spacing:1px;">Your message</p>
//                     <p style="margin:0;font-size:14px;color:#475569;line-height:1.6;white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;").substring(0, 300)}${message.length > 300 ? "..." : ""}</p>
//                   </td>
//                 </tr>
//               </table>

//               <p style="margin:0 0 8px;font-size:15px;color:#334155;line-height:1.7;">In the meantime, feel free to explore our products:</p>
//               <table cellpadding="0" cellspacing="0" style="margin:12px 0 24px;">
//                 <tr>
//                   <td style="padding-right:10px;">
//                     <a href="https://freenoo.com" style="display:inline-block;padding:10px 20px;background:#0EA5E9;color:#fff;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none;">Try Freenoo →</a>
//                   </td>
//                   <td>
//                     <a href="https://arutech.in" style="display:inline-block;padding:10px 20px;background:#f1f5f9;color:#334155;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none;border:1px solid #e2e8f0;">Visit Website →</a>
//                   </td>
//                 </tr>
//               </table>

//               <p style="margin:0;font-size:14px;color:#64748B;line-height:1.6;">Warm regards,<br/><strong style="color:#0F172A;">Team Arutech</strong></p>
//             </td>
//           </tr>

//           <!-- Footer -->
//           <tr>
//             <td style="background:#f1f5f9;border-radius:0 0 16px 16px;padding:18px 32px;text-align:center;border:1px solid #e2e8f0;border-top:none;">
//               <p style="margin:0;font-size:11px;color:#94A3B8;">Arutech Consultancy Services LLP &nbsp;·&nbsp; arutech.in</p>
//             </td>
//           </tr>

//         </table>
//       </td>
//     </tr>
//   </table>
// </body>
// </html>
//     `,
//     text: `
// Hi ${name.split(" ")[0]},

// Thanks for reaching out to Arutech! We've received your message and will get back to you within 24 hours.

// Your message:
// "${message.substring(0, 300)}${message.length > 300 ? "..." : ""}"

// In the meantime, try Freenoo: https://freenoo.com

// Warm regards,
// Team Arutech
// arutech.in
//     `.trim(),
//   });
// }



import nodemailer from "nodemailer";

// Cached transporter (reused across hot-reloads in dev)
declare global {
  // eslint-disable-next-line no-var
  var _mailerTransporter: nodemailer.Transporter | undefined;
}

function createTransporter(): nodemailer.Transporter {
  // Lazy check — only throws at request time, not at build time
  const { SMTP_HOST, SMTP_PORT, SMTP_EMAIL, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_EMAIL || !SMTP_PASS) {
    throw new Error(
      "Missing SMTP config. Set SMTP_HOST, SMTP_PORT, SMTP_EMAIL, SMTP_PASS in .env.local"
    );
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT) === 465, // true for port 465, false for 587
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASS,
    },
  });
}

function getTransporter(): nodemailer.Transporter {
  if (process.env.NODE_ENV === "development") {
    if (!global._mailerTransporter) {
      global._mailerTransporter = createTransporter();
    }
    return global._mailerTransporter;
  }
  return createTransporter();
}

/* ─────────────────────────────────────────────────────────────
   Send company notification email
───────────────────────────────────────────────────────────── */
export async function sendContactNotification({
  name,
  email,
  message,
  ip,
  submittedAt,
}: {
  name: string;
  email: string;
  message: string;
  ip: string;
  submittedAt: Date;
}) {
  const transporter = getTransporter();

  const formattedDate = submittedAt.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  // ── Email to company ──────────────────────────────────────
  await transporter.sendMail({
    from: `"Arutech Website" <${process.env.SMTP_EMAIL}>`,
    to: process.env.COMPANY_EMAIL,
    replyTo: email,
    subject: `📬 New Contact Form Submission — ${name}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#020B18;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#020B18;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0A2140,#0E2D58);border-radius:16px 16px 0 0;padding:32px;text-align:center;border:1px solid rgba(14,165,233,0.2);border-bottom:none;">
              <p style="margin:0 0 8px 0;font-size:12px;font-family:monospace;color:#38BDF8;letter-spacing:3px;text-transform:uppercase;">Arutech Consultancy Services LLP</p>
              <h1 style="margin:0;font-size:24px;font-weight:700;color:#ffffff;">New Contact Message</h1>
              <p style="margin:8px 0 0;font-size:13px;color:#64748B;">${formattedDate} IST</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#061527;padding:32px;border:1px solid rgba(14,165,233,0.15);border-top:none;border-bottom:none;">

              <!-- From -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="background:#0A2140;border-radius:12px;padding:20px;border:1px solid rgba(14,165,233,0.15);">
                    <p style="margin:0 0 4px;font-size:11px;color:#38BDF8;font-family:monospace;text-transform:uppercase;letter-spacing:2px;">From</p>
                    <p style="margin:0 0 4px;font-size:18px;font-weight:600;color:#F1F5F9;">${name}</p>
                    <a href="mailto:${email}" style="color:#38BDF8;font-size:14px;text-decoration:none;">${email}</a>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="background:#0A2140;border-radius:12px;padding:20px;border:1px solid rgba(14,165,233,0.15);">
                    <p style="margin:0 0 12px;font-size:11px;color:#38BDF8;font-family:monospace;text-transform:uppercase;letter-spacing:2px;">Message</p>
                    <p style="margin:0;font-size:15px;color:#CBD5E1;line-height:1.7;white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
                  </td>
                </tr>
              </table>

              <!-- Meta -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#020B18;border-radius:8px;padding:14px 16px;border:1px solid rgba(148,163,184,0.08);">
                    <p style="margin:0;font-size:11px;color:#475569;font-family:monospace;">IP: ${ip} &nbsp;|&nbsp; Saved to MongoDB Atlas → arutechdata.contact_messages</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0A2140;border-radius:0 0 16px 16px;padding:20px 32px;text-align:center;border:1px solid rgba(14,165,233,0.15);border-top:none;">
              <p style="margin:0 0 8px;font-size:13px;color:#334155;">Reply directly to this email to respond to ${name}</p>
              <p style="margin:0;font-size:11px;color:#1E3A5F;">Arutech Consultancy Services LLP &nbsp;·&nbsp; arutech.in</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
    text: `
New Contact Form Submission
===========================
Name:    ${name}
Email:   ${email}
Date:    ${formattedDate} IST

Message:
${message}

---
IP: ${ip}
Saved to: MongoDB Atlas → arutechdata.contact_messages
    `.trim(),
  });

  // ── Auto-reply to sender ──────────────────────────────────
  await transporter.sendMail({
    from: `"Arutech Consultancy Services" <${process.env.SMTP_EMAIL}>`,
    to: email,
    subject: `We received your message, ${name.split(" ")[0]}!`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0284C7,#0D9488);border-radius:16px 16px 0 0;padding:32px;text-align:center;">
              <p style="margin:0 0 6px;font-size:11px;font-family:monospace;color:rgba(255,255,255,0.7);letter-spacing:3px;text-transform:uppercase;">Arutech Consultancy Services LLP</p>
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;">Thanks for reaching out!</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:32px;border:1px solid #e2e8f0;border-top:none;border-bottom:none;">
              <p style="margin:0 0 16px;font-size:15px;color:#334155;line-height:1.7;">Hi <strong>${name.split(" ")[0]}</strong>,</p>
              <p style="margin:0 0 16px;font-size:15px;color:#334155;line-height:1.7;">
                We've received your message and will get back to you within <strong>24 hours</strong>.
              </p>

              <!-- Message recap -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
                <tr>
                  <td style="background:#f1f5f9;border-left:3px solid #0EA5E9;border-radius:0 8px 8px 0;padding:16px 20px;">
                    <p style="margin:0 0 6px;font-size:11px;color:#64748B;font-family:monospace;text-transform:uppercase;letter-spacing:1px;">Your message</p>
                    <p style="margin:0;font-size:14px;color:#475569;line-height:1.6;white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;").substring(0, 300)}${message.length > 300 ? "..." : ""}</p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 8px;font-size:15px;color:#334155;line-height:1.7;">In the meantime, feel free to explore our products:</p>
              <table cellpadding="0" cellspacing="0" style="margin:12px 0 24px;">
                <tr>
                  <td style="padding-right:10px;">
                    <a href="https://freenoo.com" style="display:inline-block;padding:10px 20px;background:#0EA5E9;color:#fff;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none;">Try Freenoo →</a>
                  </td>
                  <td>
                    <a href="https://arutech.in" style="display:inline-block;padding:10px 20px;background:#f1f5f9;color:#334155;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none;border:1px solid #e2e8f0;">Visit Website →</a>
                  </td>
                </tr>
              </table>

              <p style="margin:0;font-size:14px;color:#64748B;line-height:1.6;">Warm regards,<br/><strong style="color:#0F172A;">Team Arutech</strong></p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f1f5f9;border-radius:0 0 16px 16px;padding:18px 32px;text-align:center;border:1px solid #e2e8f0;border-top:none;">
              <p style="margin:0;font-size:11px;color:#94A3B8;">Arutech Consultancy Services LLP &nbsp;·&nbsp; arutech.in</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
    text: `
Hi ${name.split(" ")[0]},

Thanks for reaching out to Arutech! We've received your message and will get back to you within 24 hours.

Your message:
"${message.substring(0, 300)}${message.length > 300 ? "..." : ""}"

In the meantime, try Freenoo: https://freenoo.com

Warm regards,
Team Arutech
arutech.in
    `.trim(),
  });
}