import path from "path";
import fs from "fs";
import nodemailer from "nodemailer";
import {
  getAdminNotificationHtml,
  getStudentConfirmationHtml,
  getBrochureStudentHtml,
  getBrochureAdminHtml,
} from "./emailTemplates.js";

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

export function resolveCurriculumPdf(courseName = "") {
  const norm = (courseName || "").toLowerCase().trim();
  let filename = "mern-stack.pdf";
  let displayFilename = "MERN_Stack_Curriculum.pdf";

  if (norm.includes(".net") || norm.includes("dotnet")) {
    filename = ".net fullstack.pdf";
    displayFilename = ".NET_Fullstack_Curriculum.pdf";
  } else if (norm.includes("mern")) {
    filename = "mern-stack.pdf";
    displayFilename = "MERN_Stack_Curriculum.pdf";
  } else if (norm.includes("mean")) {
    filename = "mean-stack.pdf";
    displayFilename = "MEAN_Stack_Curriculum.pdf";
  } else if (norm.includes("java") && (norm.includes("full") || norm.includes("stack"))) {
    filename = "java fullstack.pdf";
    displayFilename = "Java_Fullstack_Curriculum.pdf";
  } else if (norm.includes("react")) {
    filename = "react native.pdf";
    displayFilename = "React_Native_Curriculum.pdf";
  } else if (
    norm.includes("selenium") ||
    norm.includes("playwright") ||
    norm.includes("typescript") ||
    norm.includes("testing") ||
    (norm.includes("java") && !norm.includes("full"))
  ) {
    filename = "software-testing.pdf";
    displayFilename = "Software_Testing_Curriculum.pdf";
  } else if (norm.includes("aws") || (norm.includes("cloud") && norm.includes("devops"))) {
    if (norm.includes("aws")) {
      filename = "aws devops.pdf";
      displayFilename = "AWS_DevOps_Curriculum.pdf";
    } else {
      filename = "cloud devops.pdf";
      displayFilename = "Cloud_DevOps_Curriculum.pdf";
    }
  } else if (norm.includes("azure")) {
    filename = "azure.pdf";
    displayFilename = "Azure_Curriculum.pdf";
  } else if (norm.includes("google cloud") || norm.includes("gcp")) {
    filename = "google cloud.pdf";
    displayFilename = "Google_Cloud_Curriculum.pdf";
  } else if (norm.includes("python")) {
    filename = "core python.pdf";
    displayFilename = "Python_Curriculum.pdf";
  } else if (norm.includes("sql")) {
    filename = "sql.pdf";
    displayFilename = "SQL_Curriculum.pdf";
  } else if (norm.includes("power bi") || norm.includes("powerbi")) {
    filename = "power bi.pdf";
    displayFilename = "Power_BI_Curriculum.pdf";
  } else if (
    norm.includes("ethical hacking") ||
    norm.includes("cyber security") ||
    norm.includes("cybersecurity") ||
    norm.includes("hacking")
  ) {
    filename = "ethical hacking.pdf";
    displayFilename = "Ethical_Hacking_Curriculum.pdf";
  }

  const filePath = path.join(process.cwd(), "public", "curriculum", filename);
  if (fs.existsSync(filePath)) {
    return [{ filename: displayFilename, path: filePath }];
  }
  return [];
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

/**
 * Send brochure curriculum PDF to student + notify admin.
 */
export async function sendBrochureEmails(record) {
  const studentName = record.first_name || record.name || "Student";
  const course = record.course || record.subject || "Course";
  const attachments = resolveCurriculumPdf(course);
  const fromAddress = FROM_EMAIL ? `"${FROM_NAME}" <${FROM_EMAIL}>` : FROM_NAME;

  // 1. Send Student Email with PDF Attachment
  const studentPromise = getTransporter().sendMail({
    from: fromAddress,
    to: record.email,
    subject: `Your ${course} Course Curriculum – Jobzenter`,
    text: `Hi ${studentName},\n\nThank you for requesting the brochure for ${course}. Please find the curriculum PDF attached.\n\nBest regards,\nJobzenter Team`,
    html: getBrochureStudentHtml(record),
    attachments,
  });

  // 2. Send Admin Notification Email
  const adminPromise = getTransporter().sendMail({
    from: fromAddress,
    to: ADMIN_EMAIL,
    subject: `[Brochure Request] ${course} – ${studentName}`,
    text: `New Brochure Request:\nName: ${studentName}\nEmail: ${record.email}\nPhone: ${record.phone}\nCourse: ${course}\nMode: ${record.mode || "-"}\nPincode: ${record.pincode || "-"}`,
    html: getBrochureAdminHtml(record),
  });

  await Promise.allSettled([studentPromise, adminPromise]);
}

export function isEmailConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      (process.env.SMTP_PASSWORD || process.env.SMTP_PASS)
  );
}

