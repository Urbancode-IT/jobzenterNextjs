import pg from "pg";
import { getDbConfig } from "./config.js";

const { Pool } = pg;

/**
 * Singleton PostgreSQL connection pool for the Next.js server.
 * Reusing a single pool avoids exhausting connections in serverless/edge contexts.
 */
let pool = null;

export function getPool() {
  if (pool === null) {
    const config = getDbConfig();
    const hasConnectionString = Boolean(config.connectionString);
    const hasPassword = Boolean(config.password);
    if (!hasConnectionString && !hasPassword) {
      throw new Error(
        "Database not configured. Set DATABASE_URL or DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME in your host Environment (e.g. Render → Environment)."
      );
    }
    pool = new Pool(config);
  }
  return pool;
}

/**
 * Run a parameterized query using the shared pool.
 * @param {string} text - SQL query with $1, $2, ... placeholders
 * @param {Array} [params] - Query parameters
 * @returns {Promise<pg.QueryResult>}
 */
export async function query(text, params = []) {
  const client = getPool();
  return client.query(text, params);
}

/**
 * Get a client from the pool for transactions (begin/commit/rollback).
 * Caller must release the client when done: client.release().
 * @returns {Promise<pg.PoolClient>}
 */
export async function getClient() {
  return getPool().connect();
}

export default { getPool, query, getClient };
