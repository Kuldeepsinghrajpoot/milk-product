import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Reads RESEND_API_KEY from the environment. Add it to .env.local (and to your
// hosting provider's environment variables) before this route will actually send mail.
function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }
  return new Resend(apiKey);
}

// Where inquiries land (receiver).
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@gangaamrit.co.in";
// Resend requires the "from" address (sender) to be on a domain you've verified with them.
// "onboarding@resend.dev" works out of the box for testing without a verified domain.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Ganga Amrit Website <noreply@gangaamrit.co.in>";

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  city: string;
  type?: string;
  volume?: string;
  message?: string;
  // Honeypot - real visitors never fill this.
  company_website?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  let data: Partial<ContactPayload>;

  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, email, city, type, volume, message, company_website } = data;

  // Honeypot: pretend success so bots get no signal.
  if (company_website) {
    return NextResponse.json({ success: true });
  }

  // Server-side validation mirrors the client-side rules.
  const requiredFields: [keyof ContactPayload, string | undefined][] = [
    ["name", name],
    ["email", email],
    ["phone", phone],
    ["city", city],
  ];
  const missing = requiredFields.filter(([, value]) => !value || !value.trim());
  if (missing.length > 0) {
    return NextResponse.json(
      { success: false, error: `Missing required field(s): ${missing.map(([key]) => key).join(", ")}` },
      { status: 400 }
    );
  }

  const cleanEmail = email?.trim();
  if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    return NextResponse.json({ success: false, error: "Enter a valid email address." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set - cannot send contact emails.");
    return NextResponse.json({ success: false, error: "Email service is not configured yet." }, { status: 500 });
  }

  try {
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: cleanEmail,
      subject: `New ${type || "General"} inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b;">
          <h2 style="color:#EA580C;">New website inquiry — Ganga Amrit</h2>
          <p><strong>Name:</strong> ${escapeHtml(name!)}</p>
          <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone!)}</p>
          <p><strong>City:</strong> ${escapeHtml(city!)}</p>
          <p><strong>Inquiry Type:</strong> ${escapeHtml(type || "General")}</p>
          <p><strong>Expected Volume:</strong> ${volume?.trim() ? `${escapeHtml(volume.trim())} litres/day` : "-"}</p>
          <p><strong>Message:</strong><br/>${message ? escapeHtml(message).replace(/\n/g, "<br/>") : "-"}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false, error: "Could not send your message. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ success: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
