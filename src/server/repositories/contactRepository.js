import { query } from "@/lib/db";

/**
 * Contact messages repository – all DB access for contact_messages.
 */
export async function createContactMessage({
  first_name,
  last_name,
  email,
  phone,
  subject = "",
  message = "",
  source = null,
  country = null,
  education_level = null,
}) {
  try {
    const { rows } = await query(
      `INSERT INTO contact_messages
       (first_name, last_name, email, phone, subject, message, source, country, education_level)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING id, first_name, last_name, email, phone, subject, message, source, country, education_level, created_at`,
      [
        first_name,
        last_name,
        email,
        phone,
        subject,
        message,
        source,
        country,
        education_level,
      ]
    );
    return rows[0];
  } catch (err) {
    // PostgreSQL: relation "contact_messages" does not exist (migration not run)
    if (err.code === "42P01" || (err.message && String(err.message).includes("contact_messages"))) {
      const e = new Error(
        "Contact table not set up. Run database/migrations/002_contact_messages.sql in pgAdmin (Jobzenter database)."
      );
      e.statusCode = 503;
      throw e;
    }
    // Connection / auth errors
    if (err.code === "ECONNREFUSED" || err.code === "28P01" || (err.message && /password|connect/i.test(err.message))) {
      const e = new Error(
        "Database connection failed. Check PostgreSQL is running and .env.local has DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME."
      );
      e.statusCode = 503;
      throw e;
    }
    throw err;
  }
}
