/**
 * Database configuration from environment variables.
 * For local: .env.local. For deploy (e.g. Vercel): set DATABASE_URL in the host's Environment.
 * - Vercel + Render: use Render's External URL or (better) Connection Pooler URL to avoid exhausting connections.
 * - Cloud Postgres (Render, etc.) requires SSL – we enable it and append sslmode=require when not present.
 */
function getDbConfig() {
  let connectionString = process.env.DATABASE_URL;

  if (connectionString) {
    connectionString = connectionString.trim();
    if (process.env.DB_SSL !== "false" && !connectionString.includes("sslmode=")) {
      const separator = connectionString.includes("?") ? "&" : "?";
      connectionString = `${connectionString}${separator}sslmode=require`;
    }
    // Serverless (e.g. Vercel) can spawn many instances; keep pool small to avoid exhausting Render connections.
    const maxConnections = typeof process.env.VERCEL === "string" ? 5 : 20;
    return {
      connectionString,
      ssl: process.env.DB_SSL === "false" ? false : { rejectUnauthorized: false },
      max: maxConnections,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 15000,
    };
  }

  const host = process.env.DB_HOST ?? "localhost";
  const port = parseInt(process.env.DB_PORT ?? "5434", 10);
  const user = process.env.DB_USER ?? "postgres";
  const password = process.env.DB_PASSWORD ?? "";
  const database = process.env.DB_NAME ?? "Jobzenter";
  const isLocalhost = host === "localhost" || host === "127.0.0.1";

  return {
    host,
    port,
    user,
    password,
    database,
    ssl: isLocalhost || process.env.DB_SSL === "false" ? false : { rejectUnauthorized: false },
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
  };
}

export { getDbConfig };
