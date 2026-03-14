/**
 * Database configuration from environment variables.
 * For local: .env.local. For deploy (e.g. Render): set DB_* or DATABASE_URL in the host's Environment.
 * Cloud Postgres (Render, etc.) often requires SSL – we enable it when not connecting to localhost.
 */
function getDbConfig() {
  const connectionString = process.env.DATABASE_URL;

  if (connectionString) {
    return {
      connectionString,
      ssl: process.env.DB_SSL === "false" ? false : { rejectUnauthorized: false },
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
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
