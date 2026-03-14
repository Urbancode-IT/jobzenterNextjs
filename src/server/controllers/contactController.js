import { createContactMessage } from "@/server/repositories/contactRepository.js";
import { sendAdminNotification, sendStudentConfirmation } from "@/server/services/emailService.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateReachUs(body) {
  const errors = [];
  if (!body.first_name?.trim()) errors.push("First name is required.");
  if (!body.last_name?.trim()) errors.push("Last name is required.");
  if (!body.email?.trim()) errors.push("Email is required.");
  else if (!EMAIL_REGEX.test(body.email.trim())) errors.push("Invalid email format.");
  if (!body.phone?.trim()) errors.push("Phone number is required.");
  if (!body.subject?.trim()) errors.push("Subject is required.");
  if (!body.message?.trim()) errors.push("Message is required.");
  return errors;
}

function validateStudyAbroad(body) {
  const errors = [];
  if (!body.first_name?.trim()) errors.push("Full name is required.");
  if (!body.email?.trim()) errors.push("Email is required.");
  else if (!EMAIL_REGEX.test(body.email.trim())) errors.push("Invalid email format.");
  if (!body.phone?.trim()) errors.push("Phone number is required.");
  return errors;
}

/**
 * Validate and normalize contact payload. Supports:
 * - Reach Us: first_name, last_name, email, phone, subject, message
 * - Study Abroad: first_name (full name), email, phone, subject?, message?, source, country?, education_level?
 */
export function validateContactBody(body) {
  const source = body.source?.trim() || "reach-us";
  const isStudyAbroad =
    source === "study-abroad" || source === "StudyAbroadEnquiry" || source === "consultation";
  const errors = isStudyAbroad ? validateStudyAbroad(body) : validateReachUs(body);
  if (errors.length > 0) {
    return { ok: false, errors };
  }
  const first_name = String(body.first_name ?? "").trim();
  const last_name = String(body.last_name ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const phone = String(body.phone ?? "").trim();
  const subject =
    String(body.subject ?? "").trim() ||
    (isStudyAbroad ? "Study Abroad Enquiry" : "");
  const message = String(body.message ?? "").trim();
  const country = body.country ? String(body.country).trim() : null;
  const education_level = body.education_level
    ? String(body.education_level).trim()
    : null;
  return {
    ok: true,
    data: {
      first_name,
      last_name: last_name || (isStudyAbroad ? "" : last_name),
      email,
      phone,
      subject,
      message,
      source: source || null,
      country,
      education_level,
    },
  };
}

/**
 * Submit contact: validate, store in DB, send admin + student emails.
 * @returns {{ success: true, data }} or throws with message for HTTP response.
 */
export async function submitContact(body) {
  const validation = validateContactBody(body);
  if (!validation.ok) {
    const err = new Error(validation.errors.join(" "));
    err.statusCode = 400;
    err.errors = validation.errors;
    throw err;
  }
  const data = validation.data;

  const record = await createContactMessage({
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    phone: data.phone,
    subject: data.subject,
    message: data.message,
    source: data.source,
    country: data.country,
    education_level: data.education_level,
  });

  try {
    await sendAdminNotification(record);
  } catch (e) {
    console.error("Contact: admin email failed –", e.code === "EAUTH" ? "SMTP login rejected. Use Gmail App Password in .env.local (SMTP_PASSWORD)." : e.message);
  }
  try {
    await sendStudentConfirmation(record);
  } catch (e) {
    console.error("Contact: student confirmation email failed –", e.code === "EAUTH" ? "SMTP login rejected. Use Gmail App Password in .env.local (SMTP_PASSWORD)." : e.message);
  }

  return { success: true, data: record };
}
