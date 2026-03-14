import { NextResponse } from "next/server";
import { handlePostContact } from "@/server/routes/contactRoutes.js";
import { sendAdminNotification, sendStudentConfirmation, isEmailConfigured } from "@/server/services/emailService.js";

export async function POST(request) {
  return handlePostContact(request);
}

/**
 * GET /api/contact/test-email?email=your@email.com
 * Sends two test emails (admin notification + student confirmation) so you can verify mail trigger.
 * Use your own email in the query to receive the "student" confirmation.
 * Only available when NODE_ENV=development (or set ALLOW_TEST_EMAIL=1).
 */
export async function GET(request) {
  const allow = process.env.NODE_ENV === "development" || process.env.ALLOW_TEST_EMAIL === "1";
  if (!allow) {
    return NextResponse.json(
      { error: "Test email is disabled. Set ALLOW_TEST_EMAIL=1 to enable." },
      { status: 404 }
    );
  }
  if (!isEmailConfigured()) {
    return NextResponse.json(
      { error: "Email not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASSWORD in .env.local" },
      { status: 503 }
    );
  }
  const { searchParams } = new URL(request.url);
  const studentEmail = searchParams.get("email") || process.env.TEST_EMAIL;
  const fakeRecord = {
    first_name: "Test",
    last_name: "User",
    email: studentEmail || "test@example.com",
    phone: "+91 98765 43210",
    subject: "[TEST] Contact form check",
    message: "This is a test submission to verify emails are triggered. You can ignore it.",
    source: "test-email",
  };
  const results = { admin: null, student: null };
  try {
    await sendAdminNotification(fakeRecord);
    results.admin = "sent";
  } catch (e) {
    results.admin = e.message || "failed";
  }
  if (studentEmail) {
    try {
      await sendStudentConfirmation(fakeRecord);
      results.student = "sent";
    } catch (e) {
      results.student = e.message || "failed";
    }
  } else {
    results.student = "skipped (no email param or TEST_EMAIL)";
  }
  const ok = results.admin === "sent";
  return NextResponse.json({
    ok,
    message: ok
      ? "Test emails triggered. Check admin inbox and the student email you passed."
      : "Admin email failed. Check SMTP settings and .env.local.",
    results,
  });
}
