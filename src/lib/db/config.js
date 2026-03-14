/**
 * Database configuration from environment variables.
 * Used by the connection pool in lib/db/pool.js.
 *
 * Set these in .env.local (see .env.local.example).
 */
function getDbConfig() {
  const host = process.env.DB_HOST ?? "localhost";
  const port = parseInt(process.env.DB_PORT ?? "5434", 10);
  const user = process.env.DB_USER ?? "postgres";
  const password = process.env.DB_PASSWORD ?? "";
  const database = process.env.DB_NAME ?? "Jobzenter";

  return {
    host,
    port,
    user,
    password,
    database,
    // Optional: connection pool settings
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
  };
}

export { getDbConfig };
