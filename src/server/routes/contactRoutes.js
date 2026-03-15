import { NextResponse } from "next/server";
import { submitContact } from "@/server/controllers/contactController.js";

/**
 * POST /api/contact – contact form submission (Reach Us + Study Abroad).
 * Body: first_name, last_name, email, phone, subject?, message?, source?, country?, education_level?
 * For Study Abroad: first_name = full name, last_name optional, source = 'study-abroad' or 'StudyAbroadEnquiry'.
 */
export async function handlePostContact(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  try {
    const result = await submitContact(body);
    return NextResponse.json(result, { status: 201 });
  } catch (err) {
    const status = err.statusCode || 500;
    const message = err.message || "Internal server error";
    const errors = err.errors;
    const msg = String(err.message || "");

    // Never log raw error message (may contain sensitive words or env). Log only a safe summary.
    const sensitive = /password|DB_|secret|credential|auth/i.test(msg);
    if (process.env.NODE_ENV === "development" && !sensitive) {
      console.error("[POST /api/contact]", msg);
    } else if (sensitive || status >= 500) {
      console.error("[POST /api/contact] Request failed: configuration or database error.");
    }

    const payload = errors ? { error: message, errors } : { error: message };
    if (msg.includes("Contact table not set up") || msg.includes("contact_messages") || msg.includes("does not exist")) {
      payload.hint = "In pgAdmin: open database (Jobzenter locally, jobzenter_db on Render) → Query Tool → run database/migrations/002_contact_messages.sql";
    } else if (msg.includes("Database connection failed") || msg.includes("connect") || msg.includes("ECONNREFUSED") || msg.includes("DB_PASSWORD") || msg.includes("authentication")) {
      payload.hint = process.env.NODE_ENV === "production"
        ? "On Vercel: set DATABASE_URL (Render External URL or Connection Pooler URL). Enable SSL (we add sslmode=require). Prefer Render's pooler URL to avoid connection limits."
        : "Copy .env.local.example to .env.local and set DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME.";
    } else if (msg.toLowerCase().includes("smtp") || msg.toLowerCase().includes("email")) {
      payload.hint = "Check .env.local: SMTP_HOST, SMTP_USER, SMTP_PASSWORD.";
    }
    if (status === 500 && process.env.NODE_ENV === "development" && !sensitive) {
      payload.detail = err.message;
    }

    return NextResponse.json(payload, { status });
  }
}
