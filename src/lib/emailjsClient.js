import emailjs from '@emailjs/browser';

// Read credentials from environment variables so they can be shared across the app.
// NOTE: In Next.js, client-exposed env vars must be prefixed with NEXT_PUBLIC_
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

let initialized = false;

export function initEmailJS() {
  if (!initialized && PUBLIC_KEY) {
    try {
      emailjs.init(PUBLIC_KEY);
      initialized = true;
    } catch (e) {
      // Don't crash the app; let callers handle missing configuration
      // but log for easier debugging
      // eslint-disable-next-line no-console
      console.warn('Failed to initialize EmailJS:', e);
    }
  }
}

/**
 * sendEmail - wrapper around emailjs.send that uses env-configured IDs by default.
 * @param {Object} templateParams - template variables to send
 * @param {Object} options - optional overrides: { serviceId, templateId }
 */
export async function sendEmail(templateParams = {}, options = {}) {
  const serviceId = options.serviceId || SERVICE_ID;
  const templateId = options.templateId || TEMPLATE_ID;

  if (!serviceId || !templateId) {
    throw new Error('EmailJS service ID or template ID is not configured. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID and NEXT_PUBLIC_EMAILJS_TEMPLATE_ID.');
  }

  initEmailJS();

  // emailjs.send returns a Promise
  return emailjs.send(serviceId, templateId, templateParams);
}

/**
 * sendForm - wrapper around emailjs.sendForm that uses env-configured IDs by default.
 * @param {HTMLFormElement} form - the form element to send
 * @param {Object} options - optional overrides: { serviceId, templateId }
 */
export async function sendForm(form, options = {}) {
  const serviceId = options.serviceId || SERVICE_ID;
  const templateId = options.templateId || TEMPLATE_ID;

  if (!serviceId || !templateId) {
    throw new Error('EmailJS service ID or template ID is not configured. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID and NEXT_PUBLIC_EMAILJS_TEMPLATE_ID.');
  }

  initEmailJS();

  // emailjs.sendForm returns a Promise
  return emailjs.sendForm(serviceId, templateId, form);
}

export function isConfigured() {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
}
