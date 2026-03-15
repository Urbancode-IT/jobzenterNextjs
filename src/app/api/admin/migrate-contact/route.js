import { NextResponse } from "next/server";
import { getClient } from "@/lib/db/pool.js";

/**
 * One-time migration: creates contact_messages table on the DB that this app uses (e.g. Render).
 * GET /api/admin/migrate-contact?key=YOUR_MIGRATE_SECRET
 * Set MIGRATE_SECRET in Vercel env, then visit the URL once. Safe to run multiple times (IF NOT EXISTS).
 */
export async function GET(request) {
  const secret = process.env.MIGRATE_SECRET;
  const key = request.nextUrl.searchParams.get("key");

  if (!secret || key !== secret) {
    return NextResponse.json(
      { error: "Forbidden. Set MIGRATE_SECRET in env and pass ?key=value." },
      { status: 403 }
    );
  }

  let client;
  try {
    client = await getClient();

    await client.query(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id          SERIAL PRIMARY KEY,
        first_name  VARCHAR(255) NOT NULL,
        last_name   VARCHAR(255) NOT NULL DEFAULT '',
        email       VARCHAR(255) NOT NULL,
        phone       VARCHAR(50)  NOT NULL,
        subject     VARCHAR(500) NOT NULL DEFAULT '',
        message     TEXT         NOT NULL DEFAULT '',
        source      VARCHAR(100),
        country     VARCHAR(255),
        education_level VARCHAR(255),
        created_at  TIMESTAMPTZ   DEFAULT NOW()
      )
    `);
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages (created_at DESC)
    `);
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages (email)
    `);
    await client.query(`
      COMMENT ON TABLE contact_messages IS 'Contact form and study abroad enquiry submissions'
    `);

    return NextResponse.json({
      ok: true,
      message: "contact_messages table created or already exists. You can now use the contact form.",
    });
  } catch (err) {
    console.error("[migrate-contact]", err.message);
    return NextResponse.json(
      { error: "Migration failed.", detail: err.message },
      { status: 500 }
    );
  } finally {
    if (client) client.release();
  }
}
