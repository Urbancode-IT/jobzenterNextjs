# Jobzenter – PostgreSQL backend

## Setup

1. **Environment**  
   Copy `.env.local.example` to `.env.local` in the project root and set your DB credentials (database `Jobzenter`, port `5434`).

2. **Create database in pgAdmin**  
   - Connect to your PostgreSQL server (port 5434).  
   - Create a database named `Jobzenter` if it does not exist.

3. **Run migrations**  
   In pgAdmin, open a Query Tool for the `Jobzenter` database and run in order:
   - `database/migrations/001_initial.sql` (enquiries table)
   - `database/migrations/002_contact_messages.sql` (contact_messages table)

4. **Email (contact form)**  
   Set in `.env.local`: `ADMIN_EMAIL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`.  
   For Gmail use an [App Password](https://support.google.com/accounts/answer/185833), not your account password.

5. **Study Abroad email image (optional)**  
   To show the airplane graphic in Study Abroad emails, add your image as `public/study-abroad-airplane.png`. It will be used in the email header (e.g. `https://jobzenter.in/study-abroad-airplane.png` when deployed).

6. **Run the app**  
   `npm run dev`  
   - Health: [http://localhost:3000/api/health](http://localhost:3000/api/health)  
   - Enquiries: [http://localhost:3000/api/enquiries](http://localhost:3000/api/enquiries) (GET list, POST create)  
   - Contact: `POST /api/contact` – Reach Us and Study Abroad forms submit here (store in DB + email admin + confirmation to student).

### Deploy (e.g. Render)

- Set **Environment Variables** in your host (Render → Environment). Do not rely on `.env.local` (it is not deployed).
- **Option A – DATABASE_URL:** If your host gives a Postgres URL (e.g. Render’s “Internal Database URL”), set `DATABASE_URL` only. SSL is enabled automatically.
- **Option B – DB_*:** Set `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`. For cloud Postgres (non-localhost), SSL is enabled automatically. Use the host’s **internal** hostname and port (e.g. Render Postgres: port `5432`, host like `dpg-xxx.oregon-postgres.render.com`).
- Run the same migrations on the deployed database (e.g. via Render Shell or a one-off job).

### Testing that mail is triggered

1. **Test endpoint (no form submit)**  
   In development, open in the browser or call with curl:
   - `http://localhost:3000/api/contact/test-email?email=your@email.com`  
   Replace `your@email.com` with your real address. This sends:
   - One email to **ADMIN_EMAIL** (admin notification)
   - One email to **your@email.com** (student confirmation)
   The response is JSON: `{ ok, message, results: { admin: "sent", student: "sent" } }`. If either fails, `results` will show the error message.

2. **Test via the real form**  
   Submit the Reach Us or Study Abroad form; then check:
   - Admin inbox (e.g. jobzenter24@gmail.com) for the new contact
   - Submitter’s inbox for the “Thank you for contacting Jobzenter…” confirmation

3. **If emails don’t arrive**  
   - Check spam/junk.  
   - For Gmail: use an [App Password](https://support.google.com/accounts/answer/185833), not your normal password.  
   - Confirm `.env.local` has `SMTP_HOST`, `SMTP_USER`, `SMTP_PASSWORD`, and `ADMIN_EMAIL`.  
   - Call the test endpoint and read the `results` object in the JSON response for the exact error.

## Folder structure

- `src/lib/db/` – DB config, connection pool, and `query` helper.  
- `src/server/repositories/` – DB access per entity (e.g. `contactRepository.js`).  
- `src/server/services/` – Business logic (e.g. `emailService.js`).  
- `src/server/controllers/` – Request validation and orchestration (e.g. `contactController.js`).  
- `src/server/routes/` – HTTP layer (e.g. `contactRoutes.js`).  
- `src/app/api/` – Next.js route handlers (e.g. `api/contact`, `api/enquiries`).  
- `database/migrations/` – SQL scripts to run in pgAdmin/psql.

## Using the DB in code

```js
import { query, getClient } from "@/lib/db";

// Simple query
const { rows } = await query("SELECT * FROM enquiries WHERE id = $1", [id]);

// Transaction
const client = await getClient();
try {
  await client.query("BEGIN");
  await client.query("INSERT INTO ...");
  await client.query("COMMIT");
} finally {
  client.release();
}
```
