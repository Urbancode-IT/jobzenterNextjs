# Study Abroad Forms – Email Not Received?

The Study Abroad **Get Free Consultation** and **Enquire Now** forms use **EmailJS** and send data with explicit template variables. If you don’t receive emails, follow these steps.

## 1. Set the “To” email (required)

- Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
- Open **Email Services** → click service **`service_0wkmlio`**
- Set **To Email** to the address where you want to receive leads (e.g. `admin@jobzenter.in` or your Gmail).
- Save. Without this, emails have nowhere to be delivered.

## 2. Template variables (what the forms send)

The forms use **emailjs.send()** and send these variables to template **`template_x4qt8gf`**:

| Variable     | Example / use |
|-------------|----------------|
| `{{name}}`  | Sender’s full name |
| `{{from_name}}` | Same as name (for templates that use this) |
| `{{email}}` | Sender’s email |
| `{{reply_to}}` | Same as email (use in Reply-To if needed) |
| `{{phone}}` | Sender’s phone |
| `{{message}}` | **Full enquiry text** (all details in one block) |
| `{{subject}}` | e.g. "Study Abroad - Free Consultation" |

Your template **must** use **`{{message}}`** in the **body** so you see the full enquiry. Example body:

```
New enquiry:

{{message}}

---
Reply to: {{reply_to}}
```

You can also use `{{name}}`, `{{email}}`, `{{phone}}`, `{{subject}}` in subject or body if you want.

## 3. Check template and service

- **Email Templates** → open **`template_x4qt8gf`**
  - Body must contain at least: `{{message}}`
  - Subject can be: `{{subject}}` or a fixed text like "Study Abroad Enquiry"
- **Email Service** `service_0wkmlio`: connection (Gmail/SMTP etc.) must be connected and verified.

## 4. Spam and limits

- Check **Spam/Junk** for the “To” address.
- In EmailJS, check **Usage** for quota or errors.

## 5. Test and debug

1. Submit a test from the site (Get Free Consultation or Enquire Now).
2. In EmailJS go to **History** and see if the send is **Successful** or **Failed**.
3. If **Successful** but no email in inbox:
   - Wrong or typo in **To Email** in the service → fix and test again.
   - Provider (Gmail, etc.) blocking or filtering → check spam, inbox rules, admin settings.
4. If **Failed** in History:
   - Read the error; fix template variables (must match above) or service connection.

If **To Email** is correct and the template uses **`{{message}}`**, you should receive the full enquiry in your inbox (or spam until you allow it).
