/**
 * HTML email templates for Jobzenter – inline styles for email clients.
 * Reach Us: theme-aligned, neat, professional. Study Abroad: travel-themed, impressive.
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://jobzenter.in";
const LOGO_URL = `${SITE_URL}/logo.png`;
const STUDY_ABROAD_AIRPLANE_URL = `${SITE_URL}/study-abroad-airplane.png`;

// Theme (Reach Us / main brand)
const YELLOW = "#ffcc00";
const PALE = "#f9f697";
const TEXT = "#2f2f2f";
const TEXT_MUTED = "#4f4f4f";
const BORDER = "#e8e8e8";
const CARD_BG = "#fffef9";

// Study Abroad – travel accent (sky blue)
const TRAVEL_BLUE = "#0c6ea5";
const TRAVEL_LIGHT = "#e8f4fc";

function escapeHtml(str) {
  if (str == null || str === "") return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isStudyAbroad(record) {
  const s = (record.source || "").toLowerCase();
  return s.includes("study") || s.includes("abroad") || s === "consultation";
}

/** Returns true if message is the auto-generated summary (duplicate of fields). */
function isDuplicateSummaryMessage(message) {
  if (!message || typeof message !== "string") return true;
  const m = message.trim();
  return (
    m.includes("Name:") &&
    m.includes("Email:") &&
    m.includes("Phone:") &&
    (m.includes("Country:") || m.includes("Education Level:") || m.includes("Study Abroad"))
  );
}

/** Two-column row: bold label left, value right (pattern used in Zendesk, HubSpot, Intercom contact emails). */
const ROW_BORDER = `border-bottom: 1px solid ${BORDER};`;
function twoColRow(label, value) {
  if (value == null || value === "") return "";
  const v = escapeHtml(String(value));
  return `
  <tr>
    <td style="padding: 12px 16px 12px 0; font-size: 13px; font-weight: 700; color: ${TEXT}; vertical-align: top; width: 140px; ${ROW_BORDER}">${escapeHtml(label)}</td>
    <td style="padding: 12px 0; font-size: 14px; color: ${TEXT}; line-height: 1.4; ${ROW_BORDER}">${v}</td>
  </tr>`;
}

function twoColRowLink(label, value, href) {
  if (value == null || value === "") return "";
  const v = escapeHtml(String(value));
  const safeHref = href ? String(href).replace(/"/g, "&quot;").replace(/</g, "&lt;") : "#";
  return `
  <tr>
    <td style="padding: 12px 16px 12px 0; font-size: 13px; font-weight: 700; color: ${TEXT}; vertical-align: top; width: 140px; ${ROW_BORDER}">${escapeHtml(label)}</td>
    <td style="padding: 12px 0; font-size: 14px; ${ROW_BORDER}"><a href="${safeHref}" style="color: #0c6ea5; text-decoration: none;">${v}</a></td>
  </tr>`;
}

// —— Reach Us: two-column, bold labels left, answers right ——
function getReachUsAdminHtml(record) {
  const studentName = [record.first_name, record.last_name].filter(Boolean).join(" ") || "—";
  const message = escapeHtml(record.message || "—").replace(/\n/g, "<br/>");

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>New Contact – Jobzenter</title></head>
<body style="margin:0; padding:0; background:#f0f0f0; font-family: 'Segoe UI', Inter, -apple-system, BlinkMacSystemFont, Roboto, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f0; padding: 32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px; width:100%; background:#ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.06);">
        <tr>
          <td style="background: linear-gradient(135deg, ${PALE} 0%, #fff9c4 100%); padding: 24px 28px; text-align: center; border-bottom: 4px solid ${YELLOW};">
            <a href="${SITE_URL}" target="_blank" rel="noopener"><img src="${LOGO_URL}" alt="Jobzenter" width="140" height="auto" style="display:block; margin:0 auto; max-height: 44px; width: auto;" /></a>
            <p style="margin: 12px 0 0 0; font-size: 13px; color: ${TEXT_MUTED}; font-weight: 500;">Reach Us – New message</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 28px 28px 32px 28px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
              ${twoColRow("Name", studentName)}
              ${twoColRowLink("Email", record.email, `mailto:${record.email}`)}
              ${twoColRow("Phone", record.phone)}
              ${twoColRow("Subject", record.subject || "—")}
              <tr>
                <td style="padding: 12px 16px 12px 0; font-size: 13px; font-weight: 700; color: ${TEXT}; vertical-align: top; width: 140px; ${ROW_BORDER}">Message</td>
                <td style="padding: 12px 0; font-size: 14px; color: ${TEXT}; line-height: 1.5; ${ROW_BORDER}">${message}</td>
              </tr>
            </table>
            <p style="margin: 20px 0 0 0; font-size: 12px; color: ${TEXT_MUTED}; text-align: center;">Source: Reach Us contact form</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 14px 28px; background: #fafafa; border-top: 1px solid ${BORDER}; font-size: 11px; color: ${TEXT_MUTED}; text-align: center;">
            Jobzenter &middot; <a href="${SITE_URL}" style="color: ${YELLOW}; text-decoration: none; font-weight: 500;">jobzenter.in</a>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// —— Study Abroad: two-column, no duplicate – show only structured fields ——
function getStudyAbroadAdminHtml(record) {
  const studentName = [record.first_name, record.last_name].filter(Boolean).join(" ") || "—";
  const showMessage = record.message && !isDuplicateSummaryMessage(record.message);
  const messageHtml = showMessage ? escapeHtml(record.message).replace(/\n/g, "<br/>") : "";

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Study Abroad Enquiry – Jobzenter</title></head>
<body style="margin:0; padding:0; background:#e8f4fc; font-family: 'Segoe UI', Inter, -apple-system, BlinkMacSystemFont, Roboto, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#e8f4fc; padding: 32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px; width:100%; background:#ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 24px rgba(12, 110, 165, 0.12);">
        <tr>
          <td style="background: linear-gradient(135deg, ${TRAVEL_BLUE} 0%, #0a5a8a 100%); padding: 28px 28px; text-align: center;">
            <a href="${SITE_URL}" target="_blank" rel="noopener"><img src="${LOGO_URL}" alt="Jobzenter" width="140" height="auto" style="display:block; margin:0 auto; max-height: 44px; width: auto; filter: brightness(0) invert(1);" /></a>
            <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 20px auto 0; max-width: 320px;">
              <tr>
                <td style="padding: 0 16px 0 0; vertical-align: middle; width: 72px;"><img src="${STUDY_ABROAD_AIRPLANE_URL}" alt="" width="72" height="auto" style="display:block; max-height: 48px; width: auto; opacity: 0.95;" /></td>
                <td style="vertical-align: middle; text-align: left;">
                  <p style="margin: 0; font-size: 22px; color: #ffffff; font-weight: 600;">Study Abroad Enquiry</p>
                  <p style="margin: 4px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.9);">New enquiry – global education journey</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding: 28px 28px 32px 28px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
              ${twoColRow("Name", studentName)}
              ${twoColRowLink("Email", record.email, `mailto:${record.email}`)}
              ${twoColRow("Phone", record.phone)}
              ${record.country ? twoColRow("Preferred country", record.country) : ""}
              ${record.education_level ? twoColRow("Education level", record.education_level) : ""}
              ${twoColRow("Subject", record.subject || "Study Abroad Enquiry")}
              ${showMessage ? `<tr>
                <td style="padding: 12px 16px 12px 0; font-size: 13px; font-weight: 700; color: ${TEXT}; vertical-align: top; width: 140px; ${ROW_BORDER}">Additional notes</td>
                <td style="padding: 12px 0; font-size: 14px; color: ${TEXT}; line-height: 1.5; ${ROW_BORDER}">${messageHtml}</td>
              </tr>` : ""}
            </table>
            <p style="margin: 20px 0 0 0; font-size: 12px; color: ${TEXT_MUTED}; text-align: center;">Source: Study Abroad &middot; Follow up within 24 hours</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 14px 28px; background: #f0f8fc; border-top: 1px solid #b8d9ed; font-size: 11px; color: ${TEXT_MUTED}; text-align: center;">
            Jobzenter Study Abroad &middot; <a href="${SITE_URL}/study-abroad" style="color: ${TRAVEL_BLUE}; text-decoration: none; font-weight: 500;">jobzenter.in/study-abroad</a>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// —— Admin: pick template by source ——
export function getAdminNotificationHtml(record) {
  return isStudyAbroad(record) ? getStudyAbroadAdminHtml(record) : getReachUsAdminHtml(record);
}

// —— Student confirmation: Reach Us (neat, professional) ——
function getReachUsStudentHtml(record) {
  const name = record.first_name || "there";
  const safeName = escapeHtml(name);

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>We received your message – Jobzenter</title></head>
<body style="margin:0; padding:0; background:#f0f0f0; font-family: 'Segoe UI', Inter, -apple-system, BlinkMacSystemFont, Roboto, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f0; padding: 32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px; width:100%; background:#ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.06);">
        <tr>
          <td style="background: linear-gradient(135deg, ${PALE} 0%, #fff9c4 100%); padding: 24px 28px; text-align: center; border-bottom: 4px solid ${YELLOW};">
            <a href="${SITE_URL}" target="_blank" rel="noopener"><img src="${LOGO_URL}" alt="Jobzenter" width="140" height="auto" style="display:block; margin:0 auto; max-height: 44px; width: auto;" /></a>
          </td>
        </tr>
        <tr>
          <td style="padding: 32px 28px 36px 28px;">
            <p style="margin: 0 0 8px 0; font-size: 20px; color: ${TEXT}; font-weight: 600;">Hi ${safeName},</p>
            <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TEXT}; line-height: 1.6;">Thank you for getting in touch with <strong>Jobzenter</strong>. We have received your message and our team will get back to you shortly.</p>
            <p style="margin: 0; font-size: 15px; color: ${TEXT_MUTED}; line-height: 1.6;">Need us sooner? Email <a href="mailto:admin@jobzenter.in" style="color: ${YELLOW}; text-decoration: underline;">admin@jobzenter.in</a> or call <strong>+91 90577 70577</strong>.</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 14px 28px; background: #fafafa; border-top: 1px solid ${BORDER}; font-size: 11px; color: ${TEXT_MUTED}; text-align: center;">
            Jobzenter &middot; <a href="${SITE_URL}" style="color: ${YELLOW}; text-decoration: none; font-weight: 500;">jobzenter.in</a>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// —— Student confirmation: Study Abroad (inspiring, travel vibe) ——
function getStudyAbroadStudentHtml(record) {
  const name = record.first_name || "there";
  const safeName = escapeHtml(name);

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Your study abroad journey – Jobzenter</title></head>
<body style="margin:0; padding:0; background:#e8f4fc; font-family: 'Segoe UI', Inter, -apple-system, BlinkMacSystemFont, Roboto, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#e8f4fc; padding: 32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px; width:100%; background:#ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 24px rgba(12, 110, 165, 0.12);">
        <tr>
          <td style="background: linear-gradient(135deg, ${TRAVEL_BLUE} 0%, #0a5a8a 100%); padding: 28px 28px; text-align: center;">
            <a href="${SITE_URL}" target="_blank" rel="noopener"><img src="${LOGO_URL}" alt="Jobzenter" width="140" height="auto" style="display:block; margin:0 auto; max-height: 44px; width: auto; filter: brightness(0) invert(1);" /></a>
            <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 20px auto 0; max-width: 300px;">
              <tr>
                <td style="padding: 0 14px 0 0; vertical-align: middle; width: 64px;"><img src="${STUDY_ABROAD_AIRPLANE_URL}" alt="" width="64" height="auto" style="display:block; max-height: 44px; width: auto; opacity: 0.95;" /></td>
                <td style="vertical-align: middle; text-align: left;">
                  <p style="margin: 0; font-size: 20px; color: #ffffff; font-weight: 600;">Your journey starts here</p>
                  <p style="margin: 4px 0 0 0; font-size: 13px; color: rgba(255,255,255,0.9);">Study Abroad – Jobzenter</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding: 32px 28px 36px 28px;">
            <p style="margin: 0 0 8px 0; font-size: 20px; color: ${TEXT}; font-weight: 600;">Hi ${safeName},</p>
            <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TEXT}; line-height: 1.6;">Thank you for your <strong>Study Abroad</strong> enquiry. We’re excited to help you take the next step in your global education.</p>
            <p style="margin: 0 0 20px 0; font-size: 16px; color: ${TEXT}; line-height: 1.6;">Our team will review your details and get back to you within <strong>24 hours</strong> with personalised guidance.</p>
            <p style="margin: 0; font-size: 15px; color: ${TEXT_MUTED}; line-height: 1.6;">Questions? Reply to this email or call <strong>+91 90577 70577</strong>. We’re here to help you soar. ✈️</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 14px 28px; background: #f0f8fc; border-top: 1px solid #b8d9ed; font-size: 11px; color: ${TEXT_MUTED}; text-align: center;">
            Jobzenter Study Abroad &middot; <a href="${SITE_URL}/study-abroad" style="color: ${TRAVEL_BLUE}; text-decoration: none; font-weight: 500;">jobzenter.in/study-abroad</a>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// —— Student: pick template by source ——
export function getStudentConfirmationHtml(record) {
  return isStudyAbroad(record) ? getStudyAbroadStudentHtml(record) : getReachUsStudentHtml(record);
}
