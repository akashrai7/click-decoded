// src/app/api/careers/route.ts — port of api/careers.js (multipart resume upload → Zoho SMTP)
// Sends confirmation to applicant + HR notification with resume attached.
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { buildApplicantEmail, buildHRNotification } from '@/lib/email/careers-templates'

export const runtime = 'nodejs'

const MAX_FILE = 4 * 1024 * 1024 // 4 MB (Vercel-compatible request limit)
const ALLOWED = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

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
    return NextResponse.json({ success: false, error: 'Server configuration error.' }, { status: 500, headers: CORS })
  }

  try {
    const form = await req.formData()
    const fields: Record<string, string> = {}
    let file: File | null = null
    for (const [key, value] of form.entries()) {
      if (value instanceof File) file = value
      else fields[key] = String(value)
    }

    const { name, email, phone, role, portfolio, message } = fields

    if (!name || !email || !role) {
      return NextResponse.json({ success: false, error: 'Name, email, and role are required.' }, { status: 400, headers: CORS })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: 'Invalid email address.' }, { status: 400, headers: CORS })
    }
    if (!file || (file.type && !ALLOWED.includes(file.type))) {
      return NextResponse.json({ success: false, error: 'Please upload a valid resume (PDF, DOC or DOCX).' }, { status: 400, headers: CORS })
    }
    if (file.size > MAX_FILE) {
      return NextResponse.json({ success: false, error: 'Resume file too large. Maximum 4 MB.' }, { status: 400, headers: CORS })
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer())

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.zoho.in',
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: { user: process.env.ZOHO_EMAIL, pass: process.env.ZOHO_APP_PASSWORD },
    })

    await transporter.sendMail({
      from: `"Team Click Decoded" <${process.env.ZOHO_EMAIL}>`,
      to: email,
      subject: `Application received, ${String(name).split(' ')[0]} 🎉 — Click Decoded`,
      html: buildApplicantEmail({ name, role }),
    })

    await transporter.sendMail({
      from: `"Click Decoded Careers" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_EMAIL,
      replyTo: email,
      subject: `📋 New Application — ${name} | ${role || 'Open'} | Click Decoded`,
      html: buildHRNotification({ name, email, phone, role, portfolio, message }),
      attachments: [
        {
          filename: file.name || 'resume.pdf',
          content: fileBuffer,
          contentType: file.type || 'application/pdf',
        },
      ],
    })

    return NextResponse.json({ success: true }, { headers: CORS })
  } catch (err) {
    console.error('Careers form error:', err instanceof Error ? err.message : err)
    return NextResponse.json(
      { success: false, error: 'Failed to submit application. Please WhatsApp us at +91 94070 00101.' },
      { status: 500, headers: CORS },
    )
  }
}
