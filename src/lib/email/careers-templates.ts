// src/lib/email/careers-templates.ts — extracted 1:1 from api/careers.js (HTML build)
/* eslint-disable */
// api/careers.js — Vercel Serverless Function
// Handles careers form: parses multipart/form-data, emails resume as attachment


// ── Allowed MIME types for resume ─────────────────────────────────────────
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ALLOWED_EXTS = /\.(pdf|doc|docx)$/i;
const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4 MB (Vercel-compatible request limit)

// ── Disable Vercel's default body parser (we need raw stream) ─────────────

// ── Parse multipart form ───────────────────────────────────────────────────

// ── Email builders ────────────────────────────────────────────────────────
export function buildApplicantEmail({ name, role }: any) {
  const firstName = (name || "there").split(" ")[0];
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Inter',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 0;">
  <tr><td align="center">
    <table width="100%" style="max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(13,27,42,.10);">
      <!-- HEADER -->
      <tr>
        <td style="background:linear-gradient(135deg,#0f1e38 0%,#162847 60%,#0f1e38 100%);padding:40px 40px 36px;text-align:center;">
          <div style="display:inline-block;background:#ffffff;border-radius:14px;padding:10px 22px;margin:0 auto 24px;">
            <img src="https://www.clickdecoded.com/clickdecoded.png" alt="Click Decoded" width="150" style="display:block;max-width:150px;">
          </div>
          <h1 style="margin:0;font-size:26px;font-weight:900;color:#ffffff;letter-spacing:-0.03em;line-height:1.2;">
            Application Received,<br>
            <span style="color:#EE7E1A;">${firstName}! 🎉</span>
          </h1>
          <p style="margin:14px 0 0;font-size:15px;color:rgba(255,255,255,0.6);line-height:1.6;">
            We've got your application and we're excited to read it.
          </p>
        </td>
      </tr>
      <!-- BODY -->
      <tr>
        <td style="padding:40px 40px 0;">
          <p style="margin:0 0 20px;font-size:16px;color:#1E293B;line-height:1.7;">Hi <strong>${firstName}</strong>,</p>
          <p style="margin:0 0 28px;font-size:15px;color:#475569;line-height:1.75;">
            Thank you for applying for the <strong style="color:#2A4573;">${role || "position"}</strong> role at Click Decoded.
            We read every application personally — no bots, no auto-rejections. You'll hear from us within <strong style="color:#EE7E1A;">3 working days</strong>.
          </p>
          <div style="background:#f8fafc;border:1.5px solid #E2E8F0;border-radius:14px;padding:24px;margin-bottom:28px;">
            <p style="margin:0 0 16px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8;">What Happens Next</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr><td style="vertical-align:top;width:36px;"><div style="width:28px;height:28px;border-radius:8px;background:rgba(238,126,26,0.1);color:#EE7E1A;font-size:11px;font-weight:900;text-align:center;line-height:28px;">01</div></td>
                <td style="padding:0 0 16px 12px;"><p style="margin:0 0 3px;font-size:13.5px;font-weight:700;color:#1E293B;">We review your application</p><p style="margin:0;font-size:12.5px;color:#64748b;line-height:1.6;">A real team member reads your application and resume carefully.</p></td></tr>
              <tr><td style="vertical-align:top;width:36px;"><div style="width:28px;height:28px;border-radius:8px;background:rgba(238,126,26,0.1);color:#EE7E1A;font-size:11px;font-weight:900;text-align:center;line-height:28px;">02</div></td>
                <td style="padding:0 0 16px 12px;"><p style="margin:0 0 3px;font-size:13.5px;font-weight:700;color:#1E293B;">We reach out if it's a fit</p><p style="margin:0;font-size:12.5px;color:#64748b;line-height:1.6;">If we see a match, we'll contact you to schedule a short call.</p></td></tr>
              <tr><td style="vertical-align:top;width:36px;"><div style="width:28px;height:28px;border-radius:8px;background:rgba(238,126,26,0.1);color:#EE7E1A;font-size:11px;font-weight:900;text-align:center;line-height:28px;">03</div></td>
                <td style="padding:0 0 0 12px;"><p style="margin:0 0 3px;font-size:13.5px;font-weight:700;color:#1E293B;">Interview &amp; decision</p><p style="margin:0;font-size:12.5px;color:#64748b;line-height:1.6;">A short practical task + conversation — no trick questions.</p></td></tr>
            </table>
          </div>
          <div style="background:rgba(37,211,102,0.07);border:1.5px solid rgba(37,211,102,0.2);border-radius:14px;padding:20px 24px;margin-bottom:32px;text-align:center;">
            <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#065f46;">Questions in the meantime?</p>
            <p style="margin:0 0 14px;font-size:13px;color:#16a34a;">WhatsApp us — we typically respond in under 5 minutes during working hours.</p>
            <a href="https://wa.me/919407000101?text=Hi%20Click%20Decoded%2C%20I%20just%20applied%20for%20a%20role%20on%20your%20website"
               style="display:inline-block;background:#25D366;color:#ffffff;font-size:14px;font-weight:700;padding:12px 28px;border-radius:10px;text-decoration:none;">💬 Chat on WhatsApp</a>
          </div>
        </td>
      </tr>
      <!-- FOOTER -->
      <tr>
        <td style="background:#0f1e38;padding:28px 40px;border-radius:0 0 20px 20px;text-align:center;">
          <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:rgba(255,255,255,0.7);">Click Decoded</p>
          <p style="margin:0 0 2px;font-size:12px;color:rgba(255,255,255,0.35);">2nd Floor, Amrit Complex, Raisen Road, Bhopal — 462023</p>
          <p style="margin:8px 0 0;font-size:12px;color:rgba(255,255,255,0.25);">© 2026 Aharnish Infotech Pvt. Ltd.</p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

export function buildHRNotification({ name, email, phone, role, portfolio, message }: any) {
  const phoneClean = (phone || "").replace(/[^0-9]/g, "");
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Inter',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 0;">
  <tr><td align="center">
    <table width="100%" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(13,27,42,.08);">
      <tr>
        <td style="background:linear-gradient(135deg,#0f1e38,#162847);padding:28px 32px;">
          <p style="margin:0 0 4px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:rgba(255,255,255,0.4);">New Job Application</p>
          <h1 style="margin:0;font-size:22px;font-weight:900;color:#ffffff;">
            📋 ${name} <span style="color:#EE7E1A;">— ${role || "Open Application"}</span>
          </h1>
          <p style="margin:8px 0 0;font-size:13px;color:rgba(255,255,255,0.5);">Submitted via careers form · clickdecoded.com</p>
        </td>
      </tr>
      <tr>
        <td style="padding:28px 32px 8px;">
          <p style="margin:0 0 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8;">Applicant Details</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1.5px solid #E2E8F0;border-radius:12px;overflow:hidden;">
            <tr><td style="padding:10px 16px;border-bottom:1px solid #E2E8F0;font-size:13px;color:#64748b;font-weight:600;width:38%;background:#f8fafc;">Name</td><td style="padding:10px 16px;border-bottom:1px solid #E2E8F0;font-size:13px;color:#1E293B;font-weight:700;">${name}</td></tr>
            <tr><td style="padding:10px 16px;border-bottom:1px solid #E2E8F0;font-size:13px;color:#64748b;font-weight:600;background:#f8fafc;">Email</td><td style="padding:10px 16px;border-bottom:1px solid #E2E8F0;font-size:13px;font-weight:700;"><a href="mailto:${email}" style="color:#2A4573;text-decoration:none;">${email}</a></td></tr>
            <tr><td style="padding:10px 16px;border-bottom:1px solid #E2E8F0;font-size:13px;color:#64748b;font-weight:600;background:#f8fafc;">Phone</td><td style="padding:10px 16px;border-bottom:1px solid #E2E8F0;font-size:13px;font-weight:800;"><a href="tel:+${phoneClean}" style="color:#EE7E1A;text-decoration:none;">${phone || "—"}</a></td></tr>
            <tr><td style="padding:10px 16px;border-bottom:1px solid #E2E8F0;font-size:13px;color:#64748b;font-weight:600;background:#f8fafc;">Role Applied</td><td style="padding:10px 16px;border-bottom:1px solid #E2E8F0;font-size:13px;color:#1E293B;font-weight:700;">${role || "—"}</td></tr>
            <tr><td style="padding:10px 16px;font-size:13px;color:#64748b;font-weight:600;background:#f8fafc;">Portfolio / LinkedIn</td><td style="padding:10px 16px;font-size:13px;color:#1E293B;font-weight:700;">${portfolio ? `<a href="${portfolio}" style="color:#2A4573;">${portfolio}</a>` : "—"}</td></tr>
          </table>
        </td>
      </tr>
      ${message ? `<tr><td style="padding:8px 32px 28px;">
        <p style="margin:0 0 10px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#94a3b8;">Why Click Decoded?</p>
        <div style="background:#f8fafc;border:1.5px solid #E2E8F0;border-radius:12px;padding:18px 20px;">
          <p style="margin:0;font-size:14px;color:#475569;line-height:1.75;white-space:pre-wrap;">${message}</p>
        </div>
      </td></tr>` : ""}
      <tr>
        <td style="padding:0 32px 28px;">
          <p style="margin:0 0 12px;font-size:12px;color:#94a3b8;font-weight:600;">📎 Resume attached to this email</p>
          <table width="100%" cellpadding="0" cellspacing="0"><tr>
            <td style="padding-right:6px;">
              <a href="mailto:${email}?subject=Re: Your Application at Click Decoded&body=Hi ${name},%0A%0AThank you for applying..."
                 style="display:block;text-align:center;background:#2A4573;color:#ffffff;font-size:12px;font-weight:700;padding:11px 10px;border-radius:10px;text-decoration:none;">✉ Reply via Email</a>
            </td>
            <td style="padding:0 6px;">
              <a href="tel:+${phoneClean}"
                 style="display:block;text-align:center;background:#EE7E1A;color:#ffffff;font-size:12px;font-weight:700;padding:11px 10px;border-radius:10px;text-decoration:none;">📞 Call Them</a>
            </td>
            <td style="padding-left:6px;">
              <a href="https://wa.me/${phoneClean}"
                 style="display:block;text-align:center;background:#25D366;color:#ffffff;font-size:12px;font-weight:700;padding:11px 10px;border-radius:10px;text-decoration:none;">💬 WhatsApp Them</a>
            </td>
          </tr></table>
        </td>
      </tr>
      <tr><td style="background:#0f1e38;padding:20px 32px;border-radius:0 0 16px 16px;text-align:center;">
        <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.35);">Click Decoded · Internal HR Notification · hello@clickdecoded.com</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

