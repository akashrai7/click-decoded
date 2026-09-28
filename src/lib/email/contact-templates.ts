// src/lib/email/contact-templates.ts — extracted 1:1 from api/contact.js (HTML build)
/* eslint-disable */
// api/contact.js — Vercel Serverless Function
// Zoho SMTP · nodemailer · sends Thank You to user + notification to hello@clickdecoded.com


// ── Thank You email to the person who enquired ────────────────────────────
export function buildThankYouEmail(data: any) {
  const { name, company, service, budget, message } = data;
  const firstName = name.split(" ")[0];

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>We got your message — Click Decoded</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Inter',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 0;">
  <tr><td align="center">
    <table width="100%" style="max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(13,27,42,.10);">

      <!-- HEADER -->
      <tr>
        <td style="background:linear-gradient(135deg,#0f1e38 0%,#162847 60%,#0f1e38 100%);padding:40px 40px 36px;text-align:center;">
          <div style="display:inline-block;background:#ffffff;border-radius:14px;padding:10px 22px;margin:0 auto 24px;"><img src="https://www.clickdecoded.com/clickdecoded.png" alt="Click Decoded" width="150" style="display:block;max-width:150px;"></div>
          <h1 style="margin:0;font-size:26px;font-weight:900;color:#ffffff;letter-spacing:-0.03em;line-height:1.2;">
            We've Got Your Message,<br>
            <span style="color:#EE7E1A;">${firstName}!</span>
          </h1>
          <p style="margin:14px 0 0;font-size:15px;color:rgba(255,255,255,0.6);line-height:1.6;">
            Our team is already looking at your enquiry.
          </p>
        </td>
      </tr>

      <!-- BODY -->
      <tr>
        <td style="padding:40px 40px 0;">

          <!-- Greeting -->
          <p style="margin:0 0 20px;font-size:16px;color:#1E293B;line-height:1.7;">
            Hi <strong>${firstName}</strong>,
          </p>
          <p style="margin:0 0 28px;font-size:15px;color:#475569;line-height:1.75;">
            Thank you for reaching out to <strong style="color:#2A4573;">Click Decoded</strong>. We've received your enquiry and a real person (not a bot) will review it and get back to you within <strong style="color:#EE7E1A;">24 hours</strong> — usually much faster.
          </p>

          <!-- Your Submission Summary -->
          <div style="background:#f8fafc;border:1.5px solid #E2E8F0;border-radius:14px;padding:24px;margin-bottom:28px;">
            <p style="margin:0 0 16px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8;">Your Enquiry Summary</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${service ? `<tr>
                <td style="padding:8px 0;border-bottom:1px solid #E2E8F0;font-size:13px;color:#64748b;font-weight:600;width:40%;">Service Interested In</td>
                <td style="padding:8px 0;border-bottom:1px solid #E2E8F0;font-size:13px;color:#1E293B;font-weight:700;">${service}</td>
              </tr>` : ""}
              ${budget ? `<tr>
                <td style="padding:8px 0;border-bottom:1px solid #E2E8F0;font-size:13px;color:#64748b;font-weight:600;">Budget Range</td>
                <td style="padding:8px 0;border-bottom:1px solid #E2E8F0;font-size:13px;color:#1E293B;font-weight:700;">${budget}</td>
              </tr>` : ""}
              ${company ? `<tr>
                <td style="padding:8px 0;font-size:13px;color:#64748b;font-weight:600;">Company / Brand</td>
                <td style="padding:8px 0;font-size:13px;color:#1E293B;font-weight:700;">${company}</td>
              </tr>` : ""}
            </table>
            ${message ? `<div style="margin-top:16px;padding-top:16px;border-top:1px solid #E2E8F0;">
              <p style="margin:0 0 8px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8;">Your Message</p>
              <p style="margin:0;font-size:13.5px;color:#475569;line-height:1.7;font-style:italic;">"${message}"</p>
            </div>` : ""}
          </div>

          <!-- What Happens Next -->
          <p style="margin:0 0 16px;font-size:15px;font-weight:800;color:#2A4573;">What Happens Next</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
            <tr>
              <td style="vertical-align:top;width:36px;">
                <div style="width:28px;height:28px;border-radius:8px;background:rgba(238,126,26,0.1);color:#EE7E1A;font-size:11px;font-weight:900;text-align:center;line-height:28px;flex-shrink:0;">01</div>
              </td>
              <td style="padding:0 0 16px 12px;">
                <p style="margin:0 0 3px;font-size:13.5px;font-weight:700;color:#1E293B;">We actually read it</p>
                <p style="margin:0;font-size:12.5px;color:#64748b;line-height:1.6;">A real person reviews your message — not a template bot.</p>
              </td>
            </tr>
            <tr>
              <td style="vertical-align:top;width:36px;">
                <div style="width:28px;height:28px;border-radius:8px;background:rgba(238,126,26,0.1);color:#EE7E1A;font-size:11px;font-weight:900;text-align:center;line-height:28px;">02</div>
              </td>
              <td style="padding:0 0 16px 12px;">
                <p style="margin:0 0 3px;font-size:13.5px;font-weight:700;color:#1E293B;">We research you first</p>
                <p style="margin:0;font-size:12.5px;color:#64748b;line-height:1.6;">We look at your website and competitors before replying, so we come prepared.</p>
              </td>
            </tr>
            <tr>
              <td style="vertical-align:top;width:36px;">
                <div style="width:28px;height:28px;border-radius:8px;background:rgba(238,126,26,0.1);color:#EE7E1A;font-size:11px;font-weight:900;text-align:center;line-height:28px;">03</div>
              </td>
              <td style="padding:0 0 0 12px;">
                <p style="margin:0 0 3px;font-size:13.5px;font-weight:700;color:#1E293B;">You get a real response</p>
                <p style="margin:0;font-size:12.5px;color:#64748b;line-height:1.6;">Actual insights on your situation — not a generic pitch deck.</p>
              </td>
            </tr>
          </table>

          <!-- WhatsApp CTA -->
          <div style="background:rgba(37,211,102,0.07);border:1.5px solid rgba(37,211,102,0.2);border-radius:14px;padding:20px 24px;margin-bottom:32px;text-align:center;">
            <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#065f46;">Need a faster reply?</p>
            <p style="margin:0 0 14px;font-size:13px;color:#16a34a;">WhatsApp us — we typically respond in under 5 minutes during working hours.</p>
            <a href="https://wa.me/919407000101?text=Hi%20Click%20Decoded%2C%20I%20just%20submitted%20an%20enquiry%20on%20your%20website"
               style="display:inline-block;background:#25D366;color:#ffffff;font-size:14px;font-weight:700;padding:12px 28px;border-radius:10px;text-decoration:none;">
              💬 Chat on WhatsApp
            </a>
          </div>

        </td>
      </tr>

      <!-- FOOTER -->
      <tr>
        <td style="background:#0f1e38;padding:28px 40px;border-radius:0 0 20px 20px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:rgba(255,255,255,0.7);">Click Decoded</p>
                <p style="margin:0 0 2px;font-size:12px;color:rgba(255,255,255,0.35);">2nd Floor, Amrit Complex, Raisen Road</p>
                <p style="margin:0 0 2px;font-size:12px;color:rgba(255,255,255,0.35);">Bhopal, Madhya Pradesh — 462023</p>
                <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.35);">
                  <a href="tel:+919407000101" style="color:rgba(255,255,255,0.4);text-decoration:none;">+91 94070 00101</a>
                  &nbsp;·&nbsp;
                  <a href="mailto:hello@clickdecoded.com" style="color:rgba(255,255,255,0.4);text-decoration:none;">hello@clickdecoded.com</a>
                </p>
              </td>
              <td align="right" style="vertical-align:top;">
                <a href="https://www.clickdecoded.com" style="font-size:12px;color:rgba(255,255,255,0.35);text-decoration:none;">www.clickdecoded.com</a>
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding-top:16px;border-top:1px solid rgba(255,255,255,0.07);margin-top:16px;">
                <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.2);line-height:1.6;">
                  You received this email because you submitted an enquiry on our website. We will never share your information with third parties.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

// ── Internal notification email to hello@clickdecoded.com ─────────────────
export function buildNotificationEmail(data: any) {
  const { name, company, email, phone, service, budget, message } = data;

  const phoneClean = (phone || "").replace(/[^0-9]/g, "");
  const phoneDisplay = phone || "—";

  const rows = [
    ["Name", name],
    ["Email", `<a href="mailto:${email}" style="color:#2A4573;text-decoration:none;">${email}</a>`],
    ["Phone", phone ? `<a href="tel:+${phoneClean}" style="color:#EE7E1A;font-weight:800;text-decoration:none;">${phoneDisplay}</a>` : "—"],
    ["Company / Brand", company || "—"],
    ["Service", service || "—"],
    ["Budget", budget || "—"],
  ];

  const rowsHtml = rows
    .map(
      ([label, val]) => `
    <tr>
      <td style="padding:10px 16px;border-bottom:1px solid #E2E8F0;font-size:13px;color:#64748b;font-weight:600;width:38%;background:#f8fafc;">${label}</td>
      <td style="padding:10px 16px;border-bottom:1px solid #E2E8F0;font-size:13px;color:#1E293B;font-weight:700;">${val}</td>
    </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Inter',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 0;">
  <tr><td align="center">
    <table width="100%" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(13,27,42,.08);">

      <!-- HEADER -->
      <tr>
        <td style="background:linear-gradient(135deg,#0f1e38,#162847);padding:28px 32px;">
          <p style="margin:0 0 4px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:rgba(255,255,255,0.4);">New Website Enquiry</p>
          <h1 style="margin:0;font-size:22px;font-weight:900;color:#ffffff;">
            🔔 ${name}
            ${service ? `<span style="color:#EE7E1A;"> — ${service}</span>` : ""}
          </h1>
          <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.5);">Submitted via contact form · clickdecoded.com</p>
        </td>
      </tr>

      <!-- DETAILS TABLE -->
      <tr>
        <td style="padding:28px 32px 8px;">
          <p style="margin:0 0 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8;">Contact Details</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1.5px solid #E2E8F0;border-radius:12px;overflow:hidden;">
            ${rowsHtml}
          </table>
        </td>
      </tr>

      <!-- MESSAGE -->
      ${
        message
          ? `<tr>
        <td style="padding:8px 32px 28px;">
          <p style="margin:0 0 10px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8;">Their Message</p>
          <div style="background:#f8fafc;border:1.5px solid #E2E8F0;border-radius:12px;padding:18px 20px;">
            <p style="margin:0;font-size:14px;color:#475569;line-height:1.75;white-space:pre-wrap;">${message}</p>
          </div>
        </td>
      </tr>`
          : ""
      }

      <!-- QUICK ACTIONS -->
      <tr>
        <td style="padding:0 32px 28px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding-right:6px;">
                <a href="mailto:${email}?subject=Re: Your Enquiry — Click Decoded&body=Hi ${name},%0A%0AThank you for reaching out..."
                   style="display:block;text-align:center;background:#2A4573;color:#ffffff;font-size:12px;font-weight:700;padding:11px 10px;border-radius:10px;text-decoration:none;">
                  ✉ Reply via Email
                </a>
              </td>
              <td style="padding:0 6px;">
                <a href="tel:+${(phone || "").replace(/[^0-9]/g, "")}"
                   style="display:block;text-align:center;background:#EE7E1A;color:#ffffff;font-size:12px;font-weight:700;padding:11px 10px;border-radius:10px;text-decoration:none;">
                  📞 Call Them
                </a>
              </td>
              <td style="padding-left:6px;">
                <a href="https://wa.me/${(phone || "").replace(/[^0-9]/g, "") || "919407000101"}"
                   style="display:block;text-align:center;background:#25D366;color:#ffffff;font-size:12px;font-weight:700;padding:11px 10px;border-radius:10px;text-decoration:none;">
                  💬 WhatsApp Them
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- FOOTER -->
      <tr>
        <td style="background:#f8fafc;border-top:1px solid #E2E8F0;padding:16px 32px;text-align:center;">
          <p style="margin:0;font-size:11px;color:#94a3b8;">Click Decoded · Internal Notification · hello@clickdecoded.com</p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

