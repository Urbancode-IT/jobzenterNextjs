import nodemailer from "nodemailer";
import { getAdminNotificationHtml, getStudentConfirmationHtml } from "./emailTemplates.js";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || process.env.SMTP_USER || "admin@jobzenter.in";
const FROM_EMAIL = process.env.FROM_EMAIL || process.env.SMTP_USER;
const FROM_NAME = process.env.FROM_NAME || "Jobzenter";

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    throw new Error(
      "Email not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASSWORD in .env.local"
    );
  }
  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
  return transporter;
}

function getAdminNotificationText(record) {
  const studentName = [record.first_name, record.last_name].filter(Boolean).join(" ");
  const lines = [
    `Student Name: ${studentName}`,
    `Email: ${record.email}`,
    `Phone Number: ${record.phone}`,
    `Subject: ${record.subject || "-"}`,
    "",
    "Message:",
    record.message || "-",
  ];
  if (record.country) lines.push("", `Country: ${record.country}`);
  if (record.education_level) lines.push(`Education Level: ${record.education_level}`);
  if (record.source) lines.push("", `Source: ${record.source}`);
  return lines.join("\n");
}

/**
 * Send contact form notification to admin (HTML template with logo and brand colours).
 */
export async function sendAdminNotification(record) {
  const studentName = [record.first_name, record.last_name].filter(Boolean).join(" ");
  await getTransporter().sendMail({
    from: FROM_EMAIL ? `"${FROM_NAME}" <${FROM_EMAIL}>` : FROM_NAME,
    to: ADMIN_EMAIL,
    subject: `[Jobzenter Contact] ${record.subject || "New enquiry"} – ${studentName}`,
    text: getAdminNotificationText(record),
    html: getAdminNotificationHtml(record),
  });
}

/**
 * Send confirmation email to the student (HTML template with logo and brand colours).
 */
export async function sendStudentConfirmation(record) {
  const text =
    "Thank you for contacting Jobzenter. Our team will get back to you shortly.";
  await getTransporter().sendMail({
    from: FROM_EMAIL ? `"${FROM_NAME}" <${FROM_EMAIL}>` : FROM_NAME,
    to: record.email,
    subject: "We received your message – Jobzenter",
    text,
    html: getStudentConfirmationHtml(record),
  });
}

export function isEmailConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      (process.env.SMTP_PASSWORD || process.env.SMTP_PASS)
  );
}
