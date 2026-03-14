import { query } from "@/lib/db";

/**
 * Enquiry service – all DB access for enquiries in one place.
 * Used by src/app/api/enquiries/route.js.
 */
export async function listEnquiries(limit = 50) {
  const { rows } = await query(
    `SELECT id, name, email, phone, subject, message, source, created_at
     FROM enquiries
     ORDER BY created_at DESC
     LIMIT $1`,
    [Math.min(limit, 100)]
  );
  return rows;
}

export async function createEnquiry({ name, email, phone = null, subject = null, message = null, source = null }) {
  const { rows } = await query(
    `INSERT INTO enquiries (name, email, phone, subject, message, source)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id, name, email, phone, subject, message, source, created_at`,
    [name, email, phone, subject, message, source]
  );
  return rows[0];
}
