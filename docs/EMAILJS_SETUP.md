# EmailJS – Why am I not receiving form emails?

If the "Get Free Consultation" or other forms show success but **no email arrives** in your inbox, check the following in your [EmailJS Dashboard](https://dashboard.emailjs.com/).

## 1. Email Service – "To" address

- Go to **Email Services** → open **service_0wkmlio** (or the service your forms use).
- Ensure **To Email** is set to **your** email (e.g. `admin@jobzenter.com` or the inbox where you want leads).
- If it’s wrong or empty, update it and save.

## 2. Email service connection

- The service must be **connected** (e.g. Gmail, Outlook, or SMTP).
- If you see "Not connected" or a warning, reconnect and complete the verification steps (e.g. allow EmailJS in Gmail).

## 3. Template variables

- Go to **Email Templates** → **template_x4qt8gf**.
- The template body should use at least: `{{message}}` (and optionally `{{name}}`, `{{email}}`, `{{subject}}`).
- The **Study Abroad – Free Consultation** form now sends the full enquiry in the **message** variable (name, email, phone, country, education level, course, and user message).

## 4. Spam / Promotions

- Check **Spam** and **Promotions** (Gmail).
- Add the EmailJS "from" address to contacts or safe senders to reduce filtering.

## 5. Domain / CORS (if forms work locally but not on your live site)

- In EmailJS dashboard, add your **live domain** (e.g. `https://jobzenter.in`) under any **allowed domains** or CORS settings if the service has that option.

## Quick test

1. Submit the "Get Free Consultation" form with test data.
2. In EmailJS dashboard, check **Email History** (if available) to see if the email was sent or if there was an error.
3. If it shows "Sent" but you still don’t get it, the issue is almost always the **To Email** or your inbox (spam/filters).
