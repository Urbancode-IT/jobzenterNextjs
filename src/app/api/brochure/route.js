import { NextResponse } from "next/server";
import { sendBrochureEmails, isEmailConfigured } from "@/server/services/emailService.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * POST /api/brochure
 * Accepts: { name, email, phone, course, mode, pincode?, message? }
 * Sends: curriculum PDF to student + admin notification to ADMIN_EMAIL
 */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { name, email, phone, course, mode, pincode, message } = body;

  // Validation
  const errors = [];
  if (!name?.trim()) errors.push("Name is required.");
  if (!email?.trim()) errors.push("Email is required.");
  else if (!EMAIL_REGEX.test(email.trim())) errors.push("Invalid email format.");
  if (!phone?.trim()) errors.push("Phone number is required.");
  else if (!/^\d{10}$/.test(phone.trim())) errors.push("Phone must be 10 digits.");
  if (!course?.trim()) errors.push("Course name is required.");
  if (!mode?.trim()) errors.push("Please select a mode.");

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(" "), errors }, { status: 400 });
  }

  // Check SMTP is configured
  if (!isEmailConfigured()) {
    return NextResponse.json(
      {
        error: "Email service is not configured.",
        hint: "Set SMTP_HOST, SMTP_USER, and SMTP_PASSWORD in .env.local",
      },
      { status: 503 }
    );
  }

  const record = {
    name: name.trim(),
    first_name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    course: course.trim(),
    mode: mode.trim(),
    pincode: pincode?.trim() || "",
    message: message?.trim() || `Brochure request for: ${course.trim()}`,
  };

  try {
    await sendBrochureEmails(record);
    return NextResponse.json(
      {
        success: true,
        message: `Your ${record.course} curriculum has been sent to ${record.email}!`,
      },
      { status: 200 }
    );
  } catch (err) {
    const msg = err?.message || "Failed to send brochure email.";
    console.error("[POST /api/brochure] Error:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
