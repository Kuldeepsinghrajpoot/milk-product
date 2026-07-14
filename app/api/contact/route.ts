import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
// Reads RESEND_API_KEY from the environment. Add it to .env.local (and to your
// hosting provider's environment variables) before this route will actually send mail.
function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }
  return new Resend(apiKey);
}

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@gangaamrit.co.in";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Ganga Amrit Website <noreply@gangaamrit.co.in>";

type ContactPayload = {
  fullName: string;
  email: string;
  phonePrimary: string;
  phoneSecondary?: string;
  inquiryType: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  message?: string;
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

  const { fullName, email, phonePrimary, phoneSecondary, inquiryType, address, city, state, pincode, message } = data;

  const requiredFields: [keyof ContactPayload, string | undefined][] = [
    ["fullName", fullName],
    ["email", email],
    ["phonePrimary", phonePrimary],
    ["address", address],
    ["city", city],
    ["state", state],
    ["pincode", pincode],
  ];

  const missing = requiredFields.filter(([, value]) => !value || !value.trim());
  if (missing.length > 0) {
    return NextResponse.json(
      { success: false, error: `Missing required field(s): ${missing.map(([key]) => key).join(", ")}` },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { success: false, error: "Email service is not configured yet." },
      { status: 500 }
    );
  }

  try {
    // ── Email 1: Owner ko inquiry details ──────────────────────────
    const { error: ownerError } = await resend.emails.send({
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New ${inquiryType || "General"} inquiry from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #1e293b; max-width: 600px; margin: 0 auto;">
          
          <div style="background: #1d4ed8; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">📬 New B2B Inquiry</h1>
            <p style="color: #bfdbfe; margin: 6px 0 0; font-size: 14px;">Received from Ganga Amrit website</p>
          </div>

          <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569; width: 40%;">Inquiry Type</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
                  <span style="background: #dbeafe; color: #1d4ed8; padding: 2px 10px; border-radius: 20px; font-size: 13px; font-weight: bold;">
                    ${escapeHtml(inquiryType || "General")}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Full Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${escapeHtml(fullName!)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                  <a href="mailto:${escapeHtml(email!)}" style="color: #1d4ed8;">${escapeHtml(email!)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Phone (Primary)</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${escapeHtml(phonePrimary!)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Phone (Secondary)</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${phoneSecondary ? escapeHtml(phoneSecondary) : "—"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Address</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
                  ${escapeHtml(address!)}, ${escapeHtml(city!)}, ${escapeHtml(state!)} — ${escapeHtml(pincode!)}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #475569; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #1e293b;">
                  ${message ? escapeHtml(message).replace(/\n/g, "<br/>") : "—"}
                </td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #1d4ed8;">
              <p style="margin: 0; font-size: 13px; color: #1d4ed8; font-weight: bold;">
                💡 Reply directly to this email to respond to ${escapeHtml(fullName!)}
              </p>
            </div>
          </div>

          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px;">
            Ganga Amrit Dairy Pvt. Ltd. · gangaamrit.co.in
          </p>
        </div>
      `,
    });

    if (ownerError) {
      console.error("Resend owner email error:", ownerError);
      return NextResponse.json(
        { success: false, error: "Could not send your message. Please try again." },
        { status: 502 }
      );
    }

    // ── Email 2: Customer ko confirmation ──────────────────────────
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [email!],
      subject: `We received your inquiry — Ganga Amrit`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #1e293b; max-width: 600px; margin: 0 auto;">

          <div style="background: linear-gradient(135deg, #1d4ed8 0%, #166534 100%); padding: 40px 32px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 26px; font-weight: 900; letter-spacing: -0.5px;">
              गंगा अमृत
            </h1>
            <p style="color: #bfdbfe; margin: 6px 0 0; font-size: 14px; letter-spacing: 2px; text-transform: uppercase;">
              शुद्धता का वादा
            </p>
          </div>

          <div style="background: white; padding: 40px 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">

            <h2 style="color: #1e293b; font-size: 22px; margin: 0 0 8px;">
              Thank you, ${escapeHtml(fullName!)}! 🙏
            </h2>
            <p style="color: #64748b; margin: 0 0 24px; font-size: 15px;">
              We have received your <strong>${escapeHtml(inquiryType || "General")}</strong> inquiry 
              and our B2B team will get back to you within <strong>24 hours</strong>.
            </p>

            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px 24px; margin-bottom: 28px;">
              <p style="margin: 0 0 12px; font-weight: bold; color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">
                Your Inquiry Summary
              </p>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td style="padding: 6px 0; color: #64748b; width: 45%;">Inquiry Type</td>
                  <td style="padding: 6px 0; color: #1e293b; font-weight: 600;">${escapeHtml(inquiryType || "General")}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #64748b;">Phone</td>
                  <td style="padding: 6px 0; color: #1e293b; font-weight: 600;">${escapeHtml(phonePrimary!)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #64748b;">Location</td>
                  <td style="padding: 6px 0; color: #1e293b; font-weight: 600;">${escapeHtml(city!)}, ${escapeHtml(state!)}</td>
                </tr>
              </table>
            </div>

            <p style="color: #64748b; font-size: 14px; margin: 0 0 8px;">
              In the meantime, feel free to explore our product range or reach us directly:
            </p>

            <table style="width: 100%; font-size: 14px; margin-bottom: 28px;">
              <tr>
                <td style="padding: 5px 0; color: #64748b;">📞 Phone</td>
                <td style="padding: 5px 0; color: #1e293b; font-weight: 600;">+91 98765 43210</td>
              </tr>
              <tr>
                <td style="padding: 5px 0; color: #64748b;">📧 Email</td>
                <td style="padding: 5px 0; color: #1e293b; font-weight: 600;">info@gangaamrit.co.in</td>
              </tr>
              <tr>
                <td style="padding: 5px 0; color: #64748b;">🌐 Website</td>
                <td style="padding: 5px 0;">
                  <a href="https://www.gangaamrit.co.in" style="color: #1d4ed8;">www.gangaamrit.co.in</a>
                </td>
              </tr>
            </table>

            <div style="text-align: center;">
              <a href="https://www.gangaamrit.co.in/products"
                style="display: inline-block; background: #1d4ed8; color: white; font-weight: bold; padding: 14px 32px; border-radius: 10px; text-decoration: none; font-size: 15px;">
                View Our Products →
              </a>
            </div>

          </div>

          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px;">
            © ${new Date().getFullYear()} Ganga Amrit Dairy Pvt. Ltd. · Kanpur, Uttar Pradesh<br/>
            You received this email because you submitted an inquiry on our website.
          </p>

        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}