// src/app/api/contact/route.ts — port of api/contact.js (Zoho SMTP via nodemailer)
// Sends Thank-You email to the enquirer + notification to hello@clickdecoded.com
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { buildThankYouEmail, buildNotificationEmail } from '@/lib/email/contact-templates'

export const runtime = 'nodejs'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: CORS })
}

export async function POST(req: NextRequest) {
  if (!process.env.ZOHO_EMAIL || !process.env.ZOHO_APP_PASSWORD) {
    console.error('Missing ZOHO_EMAIL or ZOHO_APP_PASSWORD env vars')
    return NextResponse.json(
      { success: false, error: 'Server configuration error. Please contact us via WhatsApp.' },
      { status: 500, headers: CORS },
    )
  }

  try {
    const body = await req.json().catch(() => ({}))
    const { name, company, email, phone, service, budget, message } = body || {}

    if (!name || !email || !service) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and service are required.' },
        { status: 400, headers: CORS },
      )
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400, headers: CORS },
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.zoho.in',
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: { user: process.env.ZOHO_EMAIL, pass: process.env.ZOHO_APP_PASSWORD },
    })

    await transporter.sendMail({
      from: `"Team Click Decoded" <${process.env.ZOHO_EMAIL}>`,
      to: email,
      subject: `We got your message, ${String(name).split(' ')[0]} \u{1F44B} — Click Decoded`,
      html: buildThankYouEmail({ name, company, email, phone, service, budget, message }),
    })

    await transporter.sendMail({
      from: `"Click Decoded Website" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_EMAIL,
      replyTo: email,
      subject: `\u{1F514} New Enquiry — ${name} | ${service || 'Website'} | Click Decoded`,
      html: buildNotificationEmail({ name, company, email, phone, service, budget, message }),
    })

    return NextResponse.json({ success: true, message: 'Emails sent successfully.' }, { headers: CORS })
  } catch (err) {
    console.error('Contact form SMTP error:', err instanceof Error ? err.message : err)
    return NextResponse.json(
      { success: false, error: 'Failed to send email. Please WhatsApp us at +91 94070 00101.' },
      { status: 500, headers: CORS },
    )
  }
}
